import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {ILNullPhoto} from '../../assets';
import {Gap, Header, List, Profile, ProfilePlaceholder} from '../../components';
import {colors, getData} from '../../utils';

export default function UserProfile({navigation}) {
  const [listItem] = useState([
    {
      id: 1,
      title: 'Edit Profile',
      desc: 'Terakhir diperbarui kemarin',
      icon: 'edit-profile',
      onPress: () => navigation.navigate('EditProfile'),
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
      title: 'Logout',
      desc: 'Keluar dari akun ini',
      icon: 'logout',
    },
  ]);

  const [profile, setProfile] = useState({
    fullName: '',
    profession: '',
    photo: ILNullPhoto,
  });

  useEffect(() => {
    getData('user').then(res => {
      const data = res;
      data.photo = {uri: res.photo};
      setProfile(data);
    });
  }, []);

  return (
    <View style={styles.page}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      {profile.fullName.length > 0 ? (
        <Profile
          name={profile.fullName}
          desc={profile.profession}
          avatar={profile.photo}
        />
      ) : (
        <ProfilePlaceholder />
      )}

      <Gap height={30} />
      {listItem.map(item => (
        <List
          key={item.id}
          title={item.title}
          desc={item.desc}
          icon={item.icon}
          type="next"
          onPress={item.onPress}
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
