import { client } from 'utils/api';

export function register(value) {
  return client('upload', {
    method: 'POST',
    body: value,
  });
}
