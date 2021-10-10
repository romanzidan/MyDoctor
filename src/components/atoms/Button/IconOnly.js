import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {IconBackDark, IconBackLight} from '../../../assets';

export default function IconOnly({onPress, icon}) {
  const Icon = () => {
    if (icon === 'back-dark') {
      return <IconBackDark />;
    }
    if (icon === 'back-light') {
      return <IconBackLight />;
    }
    return <IconBackDark />;
  };
  return (
    <Pressable
      onPress={onPress}
      style={styles.button}
      android_ripple={{
        color: icon === 'back-light' ? '#303E56' : '#D9D9D9',
        borderless: true,
      }}>
      <Icon />
    </Pressable>
  );
}
const styles = StyleSheet.create({
  button: {
    padding: 5,
    borderRadius: 30,
  },
});
