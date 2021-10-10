import styled from 'styled-components/native';
import theme from 'theme/theme';

export const Container = styled.View`
  padding: 10px;
  align-self: stretch;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const Step = styled.View`
  margin: 5px;
  height: 10px;
  width: 10px;
  border-radius: 20px;
  background-color: ${({currentStep}) =>
    currentStep ? theme.colors.primary : theme.colors.grey};
`;
