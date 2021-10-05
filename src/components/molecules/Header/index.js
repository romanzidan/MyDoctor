import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Gap} from '../../atoms';
import {IconBackDark} from '../../../assets';
import {colors} from '../../../utils';

export default function Header({title}) {
  return (
    <View style={styles.container}>
      <IconBackDark />
      <Text style={styles.text}>{title}</Text>
      <Gap width={24} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 30,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: colors.text.primary,
    fontFamily: 'Nunito-SemiBold',
    flex: 1,
    textAlign: 'center',
  },
});
