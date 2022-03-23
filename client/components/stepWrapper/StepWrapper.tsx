import React, { FC } from 'react';

import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';

import { ReturnComponentType } from 'types';

type StepWrapperPropsType = {
  activeStep: number;
};

const steps: string[] = ['Information about track', 'Upload track image', 'Upload track'];

export const StepWrapper: FC<StepWrapperPropsType> = ({
  activeStep,
  children,
}): ReturnComponentType => {
  return (
    <Container style={{ marginTop: 80 }}>
      <Stepper activeStep={activeStep}>
        {steps.map((step, index) => {
          return (
            <Step key={index} completed={activeStep > index}>
              <StepLabel>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <Grid container justifyContent="center" style={{ margin: '70px 0', height: 270 }}>
        <Card style={{ width: 600 }}>{children}</Card>
      </Grid>
    </Container>
  );
};
