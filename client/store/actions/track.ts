import { Dispatch } from 'redux';

import { trackAPI } from 'api';
import { TrackAction, TrackActionTypes } from 'types';

export const fetchTracks = () => {
  return async (dispatch: Dispatch<TrackAction>) => {
    try {
      const response = await trackAPI.getTracks();
      dispatch({ type: TrackActionTypes.FETCH_TRACKS, payload: response.data });
    } catch (e) {
      dispatch({
        type: TrackActionTypes.FETCH_TRACKS_ERROR,
        payload: 'Fetch tracks error',
      });
    }
  };
};
