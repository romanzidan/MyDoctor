import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ChatItem, Header, InputChat} from '../../components';
import {colors, fonts} from '../../utils';

export default function Chatting({navigation, route}) {
  const dataDoctor = route.params;
  return (
    <View style={styles.page}>
      <Header
        type="dark-profile"
        title={dataDoctor.fullName}
        desc={dataDoctor.profession}
        avatar={dataDoctor.photo}
        onPress={() => navigation.goBack()}
      />
      <ScrollView>
        <View style={styles.content}>
          <Text style={styles.chatDate}>Senin, 21 Maret, 2020</Text>
          <ChatItem isMe />
          <ChatItem />
          <ChatItem isMe />
        </View>
      </ScrollView>
      <InputChat
        value=""
        onChangeText={() => alert('sad')}
        onButtonSend={() => alert('asd')}
        placeholder={`Tulis pesan untuk ${dataDoctor.fullName}`}
      />
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
    padding: 16,
  },
  chatDate: {
    fontSize: 12,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    textAlign: 'center',
    marginBottom: 20,
  },
});
