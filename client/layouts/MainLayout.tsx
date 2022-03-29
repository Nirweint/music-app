import React, { FC } from 'react';

import Container from '@mui/material/Container';
import Head from 'next/head';

import { Navbar } from 'components/navbar/Navbar';
import { Player } from 'components/player/Player';
import { ReturnComponentType } from 'types';

type MainLayoutPropsType = {
  title?: string;
  description?: string;
  keywords?: string;
};

export const MainLayout: FC<MainLayoutPropsType> = ({
  children,
  title,
  description,
  keywords,
}): ReturnComponentType => {
  return (
    <>
      <Head>
        <title>{title || 'Music platform'}</title>
        <meta name="description" content={'Music platform. ' + description} />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content={keywords || 'Music, tracks, artists'} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <Container sx={{ marginTop: '60px' }}>{children}</Container>
      <Player />
    </>
  );
};
