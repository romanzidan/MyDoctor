import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {colors, fonts} from '../../../utils';
import BtnIconSend from './BtnIconSend';
import IconOnly from './IconOnly';

export default function Button({type, title, onPress, icon, disable}) {
  if (type === 'btn-icon-send') {
    return <BtnIconSend disable={disable} />;
  }
  if (type === 'icon-only') {
    return <IconOnly icon={icon} onPress={onPress} />;
  }
  if (disable) {
    return (
      <View style={styles.disableBg}>
        <Text style={styles.disableText}>{title}</Text>
      </View>
    );
  }
  return (
    <TouchableHighlight
      style={styles.container(type)}
      onPress={onPress}
      underlayColor={
        type === 'secondary'
          ? colors.button.secondary.underlay
          : colors.button.primary.underlay
      }>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: type => ({
    backgroundColor:
      type === 'secondary'
        ? colors.button.secondary.background
        : colors.button.primary.background,
    paddingVertical: 15,
    borderRadius: 10,
  }),
  disableBg: {
    backgroundColor: colors.button.disable.background,
    paddingVertical: 15,
    borderRadius: 10,
  },
  disableText: {
    fontSize: 18,
    fontFamily: fonts.primary[600],
    textAlign: 'center',
    color: colors.button.disable.text,
  },
  text: type => ({
    fontSize: 18,
    fontFamily: fonts.primary[600],
    textAlign: 'center',
    color:
      type === 'secondary'
        ? colors.button.secondary.text
        : colors.button.primary.text,
  }),
});
