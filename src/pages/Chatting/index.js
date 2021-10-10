import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ChatItem, Header, InputChat} from '../../components';

export default function Chatting({navigation}) {
  return (
    <View>
      <Header
        type="dark"
        title="Ganyu Putri"
        onPress={() => navigation.goBack()}
      />
      <Text>Senin, 21 Maret, 2020</Text>
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <InputChat />
    </View>
  );
}

const styles = StyleSheet.create({});
