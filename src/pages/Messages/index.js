import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {List} from '../../components';
import {Firebase} from '../../config';
import {colors, fonts, getData} from '../../utils';

export default function Messages({navigation}) {
  const [user, setUser] = useState({});
  const [historyChat, setHistoryChat] = useState([]);

  useEffect(() => {
    getDataUserFromLocal();
    const rootDB = Firebase.database().ref();
    const urlHistory = `messages/${user.uid}`;
    const messagesDB = rootDB.child(urlHistory);

    messagesDB.on('value', async snapshot => {
      if (snapshot.val()) {
        const oldData = snapshot.val();
        const data = [];

        const promises = await Object.keys(oldData).map(async key => {
          const urlUidDoctor = `doctors/${oldData[key].uidPartner}`;
          const detailDoctor = await rootDB.child(urlUidDoctor).once('value');

          data.push({
            id: key,
            detailDoctor: detailDoctor.val(),
            ...oldData[key],
          });
        });

        await Promise.all(promises);
        setHistoryChat(data);
      }
    });
  }, [user.uid]);

  const getDataUserFromLocal = () => {
    getData('user').then(res => {
      setUser(res);
    });
  };

  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}>Pesan</Text>
        {historyChat.map(item => (
          <List
            key={item.id}
            title={item.detailDoctor.fullName}
            desc={item.lastContentChat}
            image={{uri: item.detailDoctor.photo}}
            onPress={() => navigation.navigate('Chatting')}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 22,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginHorizontal: 16,
  },
});
