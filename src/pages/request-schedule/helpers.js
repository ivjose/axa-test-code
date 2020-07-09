import { client } from 'utils/api';

export function schedule(value) {
  return client('schedule', {
    method: 'POST',
    body: value,
  });
}
