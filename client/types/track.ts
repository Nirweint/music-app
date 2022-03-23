export type CommentType = {
  _id: string;
  username: string;
  text: string;
};

export type TrackType = {
  _id: string;
  name: string;
  artist: string;
  text: string;
  listens: number;
  picture: string;
  audio: string;
  comments: CommentType[];
};
