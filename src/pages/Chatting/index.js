import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ChatItem, Header, InputChat} from '../../components';
import {Firebase} from '../../config';
import {
  colors,
  fonts,
  getChatTime,
  getData,
  setDateChat,
  showError,
} from '../../utils';

export default function Chatting({navigation, route}) {
  const dataDoctor = route.params;
  const [chatContent, setChatContent] = useState('');
  const [user, setUser] = useState({});
  const [chatData, setChatData] = useState([]);

  useEffect(() => {
    getDataUserFromLocal();
    const chatID = `${user.uid}_${dataDoctor.uid}`;
    const urlFirebase = `chatting/${chatID}/allChat/`;
    Firebase.database()
      .ref(urlFirebase)
      .on('value', snapshot => {
        if (snapshot.val()) {
          const dataSnapshot = snapshot.val();
          const allDataChat = [];
          Object.keys(dataSnapshot).map(key => {
            const dataChat = dataSnapshot[key];
            const newDataChat = [];

            Object.keys(dataChat).map(itemChat => {
              newDataChat.push({
                id: itemChat,
                data: dataChat[itemChat],
              });
            });

            allDataChat.push({
              id: key,
              data: newDataChat,
            });
          });
          setChatData(allDataChat);
          console.log('data chat: ', allDataChat);
        }
      });
  }, [dataDoctor.uid, user.uid]);

  const getDataUserFromLocal = () => {
    getData('user').then(res => {
      setUser(res);
    });
  };

  const chatSend = () => {
    const today = new Date();

    const data = {
      sendBy: user.uid,
      chatDate: today.getTime(),
      chatTime: getChatTime(today),
      chatContent: chatContent,
    };
    const chatID = `${user.uid}_${dataDoctor.uid}`;

    const urlFirebase = `chatting/${chatID}/allChat/${setDateChat(today)}`;
    const urlMessageUser = `messages/${user.uid}/${chatID}`;
    const urlMessageDoctor = `messages/${dataDoctor.uid}/${chatID}`;

    const dataHistoryChatForUser = {
      lastContentChat: chatContent,
      lastChatDate: today.getTime(),
      uidPartner: dataDoctor.uid,
    };
    const dataHistoryChatForDoctor = {
      lastContentChat: chatContent,
      lastChatDate: today.getTime(),
      uidPartner: user.uid,
    };

    // send to database
    Firebase.database()
      .ref(urlFirebase)
      .push(data)
      .then(() => {
        setChatContent('');
        //set history for user
        Firebase.database().ref(urlMessageUser).set(dataHistoryChatForUser);
        //sethistory for doctor
        Firebase.database().ref(urlMessageDoctor).set(dataHistoryChatForDoctor);
      })
      .catch(err => {
        showError(err.message);
      });
  };

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
          {chatData.map(chat => {
            return (
              <View key={chat.id}>
                <Text style={styles.chatDate}>{chat.id}</Text>
                {chat.data.map(itemChat => {
                  const isMe = itemChat.data.sendBy === user.uid;
                  return (
                    <ChatItem
                      key={itemChat.id}
                      isMe={isMe}
                      text={itemChat.data.chatContent}
                      date={itemChat.data.chatTime}
                      avatar={isMe ? null : {uri: dataDoctor.photo}}
                    />
                  );
                })}
              </View>
            );
          })}
        </View>
      </ScrollView>
      <InputChat
        value={chatContent}
        onChangeText={value => setChatContent(value)}
        onButtonSend={chatSend}
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
