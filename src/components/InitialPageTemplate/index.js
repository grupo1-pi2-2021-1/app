/* eslint-disable react/prop-types */
import React from 'react';
import {Text, Btn, ScrollView, View} from 'components/UI';
import theme from 'theme/theme';
import {Container} from './styles';
import Steps from './Steps';
const InitialPageTemplate = ({
  onPress,
  Image,
  title,
  buttonTitle,
  disabledButton,
  subtitle,
  children,
  step,
}) => {
  return (
    <Container>
      <View flex={0.85}>
        <ScrollView>
          {Image ? <Image /> : null}
          <Text
            textAlign="center"
            fontWeight="bold"
            fontSize={theme.font.sizes.L}
            my={1}>
            {title}
          </Text>
          <Text textAlign="center" fontSize={theme.font.sizes.ML} my={1}>
            {subtitle}
          </Text>
          {children}
        </ScrollView>
      </View>
      <View flex={0.15}>
        <Btn disabled={disabledButton} title={buttonTitle} onPress={onPress} />
        <Steps step={step} />
      </View>
    </Container>
  );
};

export default InitialPageTemplate;
