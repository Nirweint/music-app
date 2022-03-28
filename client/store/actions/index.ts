import * as PlayerActionCreators from 'store/actions/player';
import * as TrackActionCreators from 'store/actions/track';

export default {
  ...PlayerActionCreators,
  ...TrackActionCreators,
};
