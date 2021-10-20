import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Gap, Header, Input, Loading} from '../../components';
import {colors, getData, storeData, useForm} from '../../utils';
import {Firebase} from '../../config';
import {showMessage} from 'react-native-flash-message';

export default function Register({navigation}) {
  //initial firebase

  const [form, setForm] = useForm({
    fullName: '',
    profession: '',
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);

  const onContinue = () => {
    console.log(form);
    setLoading(true);

    if (!form.fullName || !form.profession || !form.email || !form.password) {
      setLoading(false);
      showMessage({
        message: 'Daftar Akun Gagal',
        description: 'Semua data wajib diisi.',
        type: 'default',
        backgroundColor: colors.error,
        color: colors.white,
      });
    } else {
      // Register Handle
      Firebase.auth()
        .createUserWithEmailAndPassword(form.email, form.password)
        .then(userCredential => {
          setLoading(false);
          setForm('reset');
          // Signed in
          const user = userCredential.user;
          console.log('register success', user);
          const data = {
            fullName: form.fullName,
            profession: form.profession,
            email: form.email,
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
              errorMessage = 'Daftar akun gagal !';
              break;
          }
          setLoading(false);
          showMessage({
            message: 'Daftar Akun Gagal',
            description: errorMessage,
            type: 'default',
            backgroundColor: colors.error,
            color: colors.white,
          });
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
      {loading && <Loading />}
    </>
  );
}

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
  content: {paddingHorizontal: 40, paddingBottom: 20},
});
