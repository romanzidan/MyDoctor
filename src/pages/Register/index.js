import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Gap, Header, Input} from '../../components';
import {colors, useForm} from '../../utils';
import {firebaseConfig} from '../../config';

//firebase
import {initializeApp} from 'firebase/app';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';

export default function Register({navigation}) {
  //initial firebase
  initializeApp(firebaseConfig);

  const [form, setForm] = useForm({
    fullName: '',
    profession: '',
    email: '',
    password: '',
  });

  const onContinue = () => {
    // navigation.navigate('UploadPhoto');
    console.log(form);
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;
        console.log('register success', user);
        // ...
      })
      .catch(error => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        console.log('error ', errorMessage);
        // ..
      });
  };
  return (
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
  );
}

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
  content: {paddingHorizontal: 40, paddingBottom: 20},
});
