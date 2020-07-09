import { client } from 'utils/api';

export function register(value) {
  return client(
    'register',
    {
      method: 'POST',
      body: value,
    },
    true
  );
}
