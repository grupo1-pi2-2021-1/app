import styled from 'styled-components/native';
import theme from 'theme/theme';
import {Dimensions} from 'react-native';
const screenWidth = Dimensions.get('window').width;
export const Container = styled.View`
  padding: 20px;
`;

export const ButtonView = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px 70px;
`;

export const RondedView = styled.View`
  border: 20px solid ${theme.colors.primary};
  border-radius: 200px;
  align-items: center;
  justify-content: center;
  width: ${screenWidth - 120}px;
  height: ${screenWidth - 120}px;
  align-self: center;
  margin: 20px 0px;
`;
