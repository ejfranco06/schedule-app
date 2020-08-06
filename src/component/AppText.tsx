import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {Color} from '../styles/Shared';

interface Props {
  text?: string;
  customStyle?: {};
  children?: React.ReactNode;
}
export const AppText: React.FC<Props> = ({
  customStyle = {},
  children,
  text,
}) => {
  return (
    <Text style={[styles.default, customStyle]}>
      {text}
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  default: {
    color: Color.white,
  },
});
