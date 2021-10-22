import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {useDispatch} from 'react-redux';
import {ILNullPhoto} from '../../assets';
import {Button, Gap, Header, Input, Profile} from '../../components';
import {Firebase} from '../../config';
import {colors, getData, showError, showSuccess, storeData} from '../../utils';

export default function EditProfile({navigation}) {
  const dispatch = useDispatch();
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
      if (res.photo) {
        setPhoto({uri: res.photo});
      }
      setProfile(data);
    });
  }, []);

  const updateProfileHandle = () => {
    if (password.length > 0) {
      if (password.length < 6) {
        showError('Password minimal 6 karakter');
      } else {
        dispatch({type: 'SET_LOADING', value: true});
        updatePassword();
        updateProfileData();
        navigation.replace('MainApp');
        dispatch({type: 'SET_LOADING', value: false});
      }
    } else {
      dispatch({type: 'SET_LOADING', value: true});
      updateProfileData();
      navigation.replace('MainApp');
      dispatch({type: 'SET_LOADING', value: false});
    }
  };

  const updatePassword = () => {
    Firebase.auth().onAuthStateChanged(user => {
      if (user) {
        user
          .updatePassword(password)
          .then(() => {
            showSuccess('Berhasil Update', 'Password berhasil diubah');
            setPassword('');
          })
          .catch(err => {
            showError(err.message);
          });
      }
    });
  };

  const updateProfileData = () => {
    const data = profile;
    if (photoForDB.length > 0) {
      data.photo = photoForDB;
    }
    Firebase.database()
      .ref(`users/${profile.uid}/`)
      .update(data)
      .then(() => {
        storeData('user', data)
          .then(() => {
            showSuccess('Berhasil Update', 'Data Profile Berhasil di Update');
          })
          .catch(() => {
            showError('Gagal Update', 'Terjadi Masalah');
          });
      })
      .catch(err => {
        showError('Gagal Update', err.message);
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
        includeBase64: true,
        mediaType: 'photo',
        maxWidth: 500,
        maxHeight: 500,
        quality: 1,
      },
      response => {
        if (response.didCancel || response.errorCode) {
          showError('Gagal Upload Photo', response.errorMessage);
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
          <Input
            label="Password"
            value={password}
            onChangeText={value => setPassword(value)}
            type="password"
          />
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
