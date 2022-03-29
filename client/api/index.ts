import { instance } from 'api/config';
import { Nullable } from 'types';

export const trackAPI = {
  getTracks() {
    return instance.get('tracks');
  },
  getTrack(id: string) {
    return instance.get(`tracks/${id}`);
  },
  setTrackComment(data: setTrackCommentDataType) {
    return instance.post('tracks/comment', data);
  },
  setTracks(data: SetTracksFormDataType) {
    const { name, text, artist, picture, audio } = data;
    const formData = new FormData();
    if (picture !== null && audio !== null) {
      formData.append('name', name);
      formData.append('text', text);
      formData.append('artist', artist);
      formData.append('picture', picture && picture);
      formData.append('audio', audio);
    }
    return instance.post('tracks', formData);
  },
  searchTracks(query: string) {
    return instance.get('tracks/search', { params: { query } });
  },
};

type setTrackCommentDataType = {
  username: string;
  text: string;
  trackId: string;
};

type SetTracksFormDataType = {
  name: string;
  text: string;
  artist: string;
  picture: Nullable<string>;
  audio: Nullable<string>;
};
