import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import TimePicker from 'rc-time-picker';
import moment from 'moment';

import Layout from 'components/Layout';
import Button from 'components/Button';
import Input from 'components/Input';
import AlertDisplay from 'components/AlertDisplay';

import { schedule } from './helpers';

import './RequestSchedule.styles.css';
import 'react-datepicker/dist/react-datepicker.css';
import 'rc-time-picker/assets/index.css';

const defaultValue = {
  type: '',
  message: '',
};

const RequestSchedule = () => {
  const timeFormat = 'h:mm A';
  const dateFormat = 'yyyy-MM-dd';

  const history = useHistory();

  const [status, setStatus] = useState(defaultValue);
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(moment().hour(0).minute(0));

  const handleSubmit = async (e) => {
    e.preventDefault();

    const value = {
      ProposedDate: moment(date).format('YYYY-MM-DD'),
      ProposedTime: time,
      Online: 'true',
    };

    setLoading(true);
    try {
      await schedule(value);

      setStatus({
        type: 'success',
        message: 'Your Schedule has been successfully submitted.',
      });
    } catch (err) {
      setStatus({
        type: 'error',
        message:
          err.Message || 'Oops, Please try to select new schedule, Thank you!',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="schedule-page">
        <h1>Please select your schedule</h1>
        {status.type && (
          <AlertDisplay message={status.message} status={status.type} />
        )}

        <form onSubmit={handleSubmit}>
          <label className="field-label">Proposed Time</label>
          <TimePicker
            showSecond={false}
            defaultValue={time}
            className="field-wrap"
            onChange={(value) => {
              setTime(value.format(timeFormat));
              setStatus(defaultValue);
            }}
            format={timeFormat}
            use12Hours
            inputReadOnly
          />
          <DatePicker
            selected={date}
            onChange={(date) => {
              setDate(date);
              setStatus(defaultValue);
            }}
            dateFormat={dateFormat}
            customInput={<Input label="Proposed Date" />}
          />
          <Button text="Submit" type="submit" disabled={loading} />
        </form>
      </div>
    </Layout>
  );
};

export default RequestSchedule;
