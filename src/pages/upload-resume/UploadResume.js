import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Layout from 'components/Layout';
import Button from 'components/Button';
import Input from 'components/Input';
import AlertDisplay from 'components/AlertDisplay';

import { register } from './helpers';

import './UploadResume.styles.css';

const defaultValue = {
  type: '',
  message: '',
};

const UploadResume = () => {
  const history = useHistory();

  const [file, setFile] = useState('');
  const [status, setStatus] = useState(defaultValue);
  const [loading, setLoading] = useState(false);

  const handleConvert = (e) => {
    const value = e.target.files[0];
    const fileReader = new FileReader();
    setStatus(defaultValue);

    fileReader.onloadend = () => {
      setFile(fileReader.result.split(',').pop());
    };

    // Convert data to base64
    if (value) {
      fileReader.readAsDataURL(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const value = {
      file: {
        mime: 'application/pdf',
        data: file,
      },
    };

    try {
      await register(value);

      setStatus({
        type: 'success',
        message: 'Your Resume has been successfully uploaded.',
      });

      setTimeout(() => {
        history.push('/request-schedule');
      }, 1500);
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Oops, Please check your resume and re-upload, Thank you!',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="upload-page">
        <h1>Please upload your resume</h1>
        {status.type && (
          <AlertDisplay message={status.message} status={status.type} />
        )}

        <form onSubmit={handleSubmit}>
          <Input
            required
            type="file"
            name="file-resume"
            label="File upload"
            accept="application/pdf"
            onChange={handleConvert}
          />

          <Button text="Upload File" type="submit" disabled={loading} />
        </form>
      </div>
    </Layout>
  );
};

export default UploadResume;
