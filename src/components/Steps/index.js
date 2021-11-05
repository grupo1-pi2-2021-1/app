/* eslint-disable react/prop-types */
import React from 'react';
import {Container, Step} from './styles';

const InitialPageTemplate = ({step}) => {
  const steps = [0, 1, 2, 3];
  return (
    <Container>
      {steps.map(item => (
        <Step key={item} currentStep={item === step} />
      ))}
    </Container>
  );
};

export default InitialPageTemplate;
