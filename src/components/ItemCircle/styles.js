import styled from 'styled-components/native';
import theme from 'theme/theme';

export const Container = styled.View`
  height: 40px;
  width: 40px;
  background-color: ${theme.colors.darkGrey};
  border-radius: 70px;
  align-items: center;
  justify-content: center;
`;

export const FirstInput = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const InputView = styled.View`
  flex: 1;
`;
