import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {IconSendDark, IconSendLight} from '../../../assets';
import {colors} from '../../../utils';

export default function BtnIconSend({disable, onPress}) {
  if (disable) {
    return (
      <View style={styles.container(disable)}>
        <IconSendDark />
      </View>
    );
  }
  return (
    <View style={styles.content}>
      <Pressable
        onPress={onPress}
        android_ripple={{color: colors.rippleSendBtn}}
        style={styles.container(disable)}>
        <IconSendLight />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    borderRadius: 10,
    overflow: 'hidden',
  },
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
