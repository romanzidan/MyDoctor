import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ChatItem, Header, InputChat} from '../../components';
import {colors, fonts} from '../../utils';

export default function Chatting({navigation}) {
  return (
    <View style={styles.page}>
      <Header
        type="dark-profile"
        title="Ganyu Putri"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <Text style={styles.chatDate}>Senin, 21 Maret, 2020</Text>
        <ChatItem />
        <ChatItem />
        <ChatItem />
      </View>
      <InputChat />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    flex: 1,
  },
  chatDate: {
    fontSize: 12,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    textAlign: 'center',
    marginVertical: 20,
  },
});
