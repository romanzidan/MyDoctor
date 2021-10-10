import React from 'react';
import {StyleSheet, View} from 'react-native';
import {IconSendDark, IconSendLight} from '../../../assets';
import {colors} from '../../../utils';

export default function BtnIconSend({disable}) {
  return (
    <View style={styles.container(disable)}>
      {disable ? <IconSendDark /> : <IconSendLight />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: disable => ({
    backgroundColor: disable ? colors.disable : colors.secondary,
    width: 50,
    height: 50,
    borderRadius: 10,
    paddingTop: 5,
    paddingRight: 5,
    paddingBottom: 10,
    paddingLeft: 10,
  }),
});
