import React from 'react';
import {StyleSheet} from 'react-native';
import {AppText} from './AppText';
import {Color} from '../styles/Shared';

interface Props {
  customStyle?: {};
  text: string;
}
export const Label: React.FC<Props> = ({customStyle = {}, text}) => {
  const allStyles = {...styles.default, ...customStyle};
  return <AppText customStyle={allStyles} text={text} />;
};

const styles = StyleSheet.create({
  default: {
    color: Color.white,
    margin: 20,
    marginLeft: 0,
  },
});
