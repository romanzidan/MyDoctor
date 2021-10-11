import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DummyUser} from '../../assets';
import {Gap, Header, List, Profile} from '../../components';
import {colors} from '../../utils';

export default function UserProfile({navigation}) {
  const [data] = useState([
    {
      id: 1,
      title: 'Edit Profile',
      desc: 'Terakhir diperbarui kemarin',
      icon: 'edit-profile',
    },
    {
      id: 2,
      title: 'Bahasa',
      desc: 'Tersedia 12 bahasa',
      icon: 'language',
    },
    {
      id: 3,
      title: 'Beri Kami Nilai',
      desc: 'Di Google Play Store',
      icon: 'rate',
    },
    {
      id: 4,
      title: 'Pusat Bantuan',
      desc: 'Baca pedoman ',
      icon: 'help',
    },
  ]);
  return (
    <View style={styles.page}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <Profile name="Roman Zidan" profession="Mahasiswa" avatar={DummyUser} />
      <Gap height={30} />
      {data.map(item => (
        <List
          key={item.id}
          title={item.title}
          desc={item.desc}
          icon={item.icon}
          type="next"
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
