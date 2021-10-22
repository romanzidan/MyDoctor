import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {Button, Gap, Header, Input} from '../../components';
import {Firebase} from '../../config';
import {colors, showError, storeData, useForm} from '../../utils';

export default function Register({navigation}) {
  const dispatch = useDispatch();
  const [form, setForm] = useForm({
    fullName: '',
    profession: '',
    email: '',
    password: '',
  });

  const onContinue = () => {
    if (!form.fullName || !form.profession || !form.email || !form.password) {
      showError('Daftar Akun Gagal', 'Semua data wajib diisi.');
    } else {
      // Register Handle
      dispatch({type: 'SET_LOADING', value: true});
      Firebase.auth()
        .createUserWithEmailAndPassword(form.email, form.password)
        .then(userCredential => {
          dispatch({type: 'SET_LOADING', value: false});
          setForm('reset');
          // Signed in
          const user = userCredential.user;
          const data = {
            fullName: form.fullName,
            profession: form.profession,
            email: form.email,
            uid: user.uid,
          };
          Firebase.database()
            .ref('users/' + user.uid + '/')
            .set(data);

          storeData('user', data);
          // succes register
          navigation.navigate('UploadPhoto', data);
        })
        .catch(error => {
          const errorCode = error.code.split('auth/')[1];
          let errorMessage;
          switch (errorCode) {
            case 'invalid-email':
              errorMessage = 'Email tidak valid !';
              break;
            case 'weak-password':
              errorMessage = 'Password minimal 6 karakter !';
              break;
            case 'email-already-in-use':
              errorMessage = 'Email sudah terdaftar';
              break;
            default:
              errorMessage = error.message;
              break;
          }
          dispatch({type: 'SET_LOADING', value: false});
          showError('Daftar Akun Gagal', errorMessage);
        });
    }
  };
  return (
    <>
      <View style={styles.page}>
        <Header title="Daftar Akun" onPress={() => navigation.goBack()} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Gap height={10} />
          <View style={styles.content}>
            <Input
              label="Nama Lengkap"
              value={form.fullName}
              onChangeText={value => setForm('fullName', value)}
            />
            <Gap height={24} />
            <Input
              label="Pekerjaan"
              value={form.profession}
              onChangeText={value => setForm('profession', value)}
            />
            <Gap height={24} />
            <Input
              label="Email"
              value={form.email}
              onChangeText={value => setForm('email', value)}
              type="email"
            />
            <Gap height={24} />
            <Input
              label="Password"
              value={form.password}
              type="password"
              onChangeText={value => setForm('password', value)}
            />
            <Gap height={40} />
            <Button title="Lanjutkan" onPress={onContinue} />
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
  content: {paddingHorizontal: 40, paddingBottom: 20},
});
