import React from 'react';

import { ReturnComponentType } from 'types';

type TrackProgressPropsType = {
  left: number;
  right: number;
  onChange: () => void;
};

export const TrackProgress = ({
  left,
  right,
  onChange,
}: TrackProgressPropsType): ReturnComponentType => {
  return (
    <div style={{ display: 'flex' }}>
      <input type="range" min={left} max={right} value={left} onChange={onChange} />
      <div>
        {left} / {right}
      </div>
    </div>
  );
};
