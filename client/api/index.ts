import { instance } from 'api/config';

export const trackAPI = {
  getTracks() {
    return instance.get('tracks');
  },
};
