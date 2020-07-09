import { getToken } from './auth';

export async function client(
  endpoint,
  { body, ...customConfig } = {},
  external
) {
  const token = external ? '' : getToken();
  const headers = { 'Content-Type': 'application/json' };
  if (token) {
    headers['x-axa-api-key'] = `${token}`;
  }
  const config = {
    method: body ? body.method : 'GET',
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };
  if (body) {
    config.body = JSON.stringify(body);
  }

  return window.fetch(`/${endpoint}`, config).then(async (response) => {
    const data = await response.json();

    if (response.ok) {
      return data;
    } else {
      return Promise.reject(data);
    }
  });
}
