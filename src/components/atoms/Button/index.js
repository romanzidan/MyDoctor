import React from 'react';
import {StyleSheet, Text, TouchableHighlight} from 'react-native';

export default function Button({type, title, onPress}) {
  return (
    <TouchableHighlight
      style={styles.container(type)}
      onPress={onPress}
      underlayColor={type === 'secondary' ? '#F3F3F3' : '#24BBDD'}>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: type => ({
    backgroundColor: type === 'secondary' ? '#FFFFFF' : '#1EA0BD',
    paddingVertical: 15,
    borderRadius: 10,
  }),
  text: type => ({
    fontSize: 18,
    fontFamily: 'Nunito-SemiBold',
    fontWeight: '600',
    textAlign: 'center',
    color: type === 'secondary' ? '#112340' : '#FFFFFF',
  }),
});
