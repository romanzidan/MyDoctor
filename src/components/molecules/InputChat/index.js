import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {Button} from '../../atoms';
import {colors, fonts} from '../../../utils';

export default function InputChat({
  placeholder,
  value,
  onChangeText,
  onButtonSend,
}) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
      />
      <Button
        disable={value.length < 1}
        onPress={onButtonSend}
        title="Send"
        type="btn-icon-send"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    backgroundColor: colors.disable,
    padding: 14,
    borderRadius: 10,
    color: colors.text.primary,
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    flex: 1,
    marginRight: 10,
    maxHeight: 50,
  },
});
