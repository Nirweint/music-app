import React, { ChangeEvent, FC, useRef } from 'react';

import { ReturnComponentType } from 'types';

type FileUploadPropsTYpe = {
  setFile: Function;
  accept: string;
};

export const FileUpload: FC<FileUploadPropsTYpe> = ({
  setFile,
  accept,
  children,
}): ReturnComponentType => {
  const ref = useRef<HTMLInputElement>(null);

  const handleInputClick = (): void => {
    if (ref.current) {
      ref.current.click();
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div onClick={handleInputClick}>
      <input
        type="file"
        accept={accept}
        style={{ display: 'none' }}
        ref={ref}
        onChange={handleFileChange}
      />
      {children}
    </div>
  );
};
