import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {colors, fonts} from '../../../utils';

export default function Input({label, type, value, onChangeText, disable}) {
  const [border, setBorder] = useState(colors.border);
  const [labelColor, setLabelColor] = useState(colors.text.secondary);
  const onFocusForm = () => {
    setBorder(colors.borderActive);
    setLabelColor(colors.text.active);
  };
  const onBlurForm = () => {
    setBorder(colors.border);
    setLabelColor(colors.text.secondary);
  };
  return (
    <View>
      <Text style={styles.label(labelColor)}>{label}</Text>
      <TextInput
        onFocus={onFocusForm}
        onBlur={onBlurForm}
        style={styles.input(border)}
        secureTextEntry={type === 'password' ? true : false}
        autoCorrect={type === 'password' ? false : true}
        onChangeText={onChangeText}
        value={value}
        keyboardType={type === 'email' ? 'email-address' : 'default'}
        editable={!disable}
        selectTextOnFocus={!disable}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: border => ({
    borderWidth: 1,
    borderRadius: 10,
    borderColor: border,
    padding: 12,
    fontSize: 16,
  }),
  label: labelColor => ({
    fontSize: 16,
    color: labelColor,
    marginBottom: 6,
    fontFamily: fonts.primary[400],
  }),
});
