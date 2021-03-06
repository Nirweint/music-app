import React from 'react';

import { MainLayout } from 'layouts/MainLayout';
import { ReturnComponentType } from 'types';

const Index = (): ReturnComponentType => {
  return (
    <>
      <MainLayout>
        <div className="center">
          <h1>Main page</h1>
          <h3>Music app</h3>
        </div>
      </MainLayout>

      <style jsx>
        {`
          .center {
            margin-top: 150px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
    </>
  );
};

export default Index;
