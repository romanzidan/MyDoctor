import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Gap, Header, Input, Profile} from '../../components';
import {colors, getData, storeData} from '../../utils';
import {Firebase} from '../../config';
import {showMessage} from 'react-native-flash-message';
import {launchImageLibrary} from 'react-native-image-picker';
import {ILNullPhoto} from '../../assets';

export default function EditProfile({navigation}) {
  const [profile, setProfile] = useState({
    fullName: '',
    profession: '',
    email: '',
    uid: '',
  });
  const [password, setPassword] = useState('');
  const [photo, setPhoto] = useState(ILNullPhoto);
  const [photoForDB, setPhotoForDB] = useState('');

  useEffect(() => {
    getData('user').then(res => {
      const data = res;
      setPhoto({uri: res.photo});
      setProfile(data);
    });
  }, []);

  const updateProfileHandle = () => {
    console.log(profile);
    const data = profile;
    data.photo = photoForDB;
    Firebase.database()
      .ref(`users/${profile.uid}/`)
      .update(data)
      .then(() => {
        storeData('user', data)
          .then(() => {
            console.log('Behasil Update');
          })
          .catch(() => {
            console.log('Terjadi Masalah');
          });
      })
      .catch(err => {
        showMessage({
          message: err.message,
        });
      });
  };

  const changeText = (key, value) => {
    setProfile({
      ...profile,
      [key]: value,
    });
  };

  const getImage = () => {
    launchImageLibrary(
      {
        saveToPhotos: true,
        includeBase64: true,
        mediaType: 'photo',
        maxWidth: 500,
        maxHeight: 500,
        quality: 1,
      },
      response => {
        if (response.didCancel || response.errorCode) {
          showMessage({
            message: 'Gagal Upload Foto',
            description: response.errorMessage,
            type: 'default',
            backgroundColor: colors.error,
            color: colors.white,
          });
        } else {
          const source = {uri: response.assets[0].uri};

          setPhotoForDB(
            `data:${response.assets[0].type};base64, ${response.assets[0].base64}`,
          );
          setPhoto(source);
        }
      },
    );
  };

  return (
    <View style={styles.page}>
      <Header title="Edit Profile" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Profile avatar={photo} isRemove onPress={getImage} />
        <Gap height={26} />
        <View style={styles.content}>
          <Input
            label="Nama Lengkap"
            value={profile.fullName}
            onChangeText={value => changeText('fullName', value)}
          />
          <Gap height={10} />
          <Input
            label="Pekerjaan"
            value={profile.profession}
            onChangeText={value => changeText('profession', value)}
          />
          <Gap height={10} />
          <Input label="Email" value={profile.email} disable />
          <Gap height={10} />
          <Input label="Password" value={password} />
          <Gap height={40} />
          <Button title="Simpan Profile" onPress={updateProfileHandle} />
          <Gap height={20} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    paddingHorizontal: 40,
  },
});
