import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {colors, fonts} from '../../../utils';

export default function Input({label, type}) {
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
      {type === 'password' ? (
        <TextInput
          onFocus={onFocusForm}
          onBlur={onBlurForm}
          style={styles.input(border)}
          secureTextEntry
          autoCorrect={false}
        />
      ) : (
        <TextInput
          onFocus={onFocusForm}
          onBlur={onBlurForm}
          style={styles.input(border)}
        />
      )}
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
    color: colors.text.primary,
  }),
  label: labelColor => ({
    fontSize: 16,
    color: labelColor,
    marginBottom: 6,
    fontFamily: fonts.primary[400],
  }),
});
