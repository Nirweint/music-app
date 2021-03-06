import React, { useState } from 'react';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { useRouter } from 'next/router';

import { trackAPI } from 'api';
import { FileUpload } from 'components/fileUpload/FileUpload';
import { StepWrapper } from 'components/stepWrapper/StepWrapper';
import { useInput } from 'hooks';
import { MainLayout } from 'layouts/MainLayout';
import { Nullable, ReturnComponentType } from 'types';

const MAX_STEPS = 3;

const Create = (): ReturnComponentType => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [picture, setPicture] = useState<Nullable<string>>(null);
  const [audio, setAudio] = useState<Nullable<string>>(null);
  const name = useInput('');
  const artist = useInput('');
  const text = useInput('');
  const router = useRouter();

  const handleBackClick = (): void => {
    setActiveStep(prev => prev - 1);
  };

  const handleNextClick = (): void => {
    if (activeStep !== MAX_STEPS - 1) {
      setActiveStep(prev => prev + 1);
    } else {
      trackAPI
        .setTracks({
          picture,
          name: name.value,
          audio,
          text: text.value,
          artist: artist.value,
        })
        .then(() => router.push('/tracks'))
        .catch(e => console.log(e));
    }
  };

  return (
    <MainLayout>
      <StepWrapper activeStep={activeStep}>
        {activeStep === 0 && (
          <Grid container direction="column" style={{ padding: 20 }}>
            <TextField {...name} style={{ marginTop: 10 }} label="Track name" />
            <TextField {...artist} style={{ marginTop: 10 }} label="Artist name" />
            <TextField
              {...text}
              style={{ marginTop: 10 }}
              label="Text of the track"
              multiline
              rows={3}
            />
          </Grid>
        )}
        {activeStep === 1 && (
          <FileUpload setFile={setPicture} accept="image/*">
            <Button>Upload track image</Button>
          </FileUpload>
        )}
        {activeStep === MAX_STEPS - 1 && (
          <FileUpload setFile={setAudio} accept="audio/*">
            <Button>Upload track</Button>
          </FileUpload>
        )}
      </StepWrapper>
      <Grid container justifyContent="space-between">
        <Button disabled={activeStep === 0} onClick={handleBackClick}>
          Back
        </Button>
        <Button onClick={handleNextClick}>Next</Button>
      </Grid>
    </MainLayout>
  );
};

export default Create;
