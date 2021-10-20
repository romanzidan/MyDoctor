import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ILLogo} from '../../assets';
import {Button, Gap, Input, Link} from '../../components/atoms';
import {colors, fonts, storeData, useForm} from '../../utils';
import {Firebase} from '../../config';
import {showMessage} from 'react-native-flash-message';
import {Loading} from '../../components';

export default function Login({navigation}) {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });

  const loginHandle = () => {
    setLoading(true);
    Firebase.auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then(res => {
        console.log('success: ', res);
        const user = res.user;
        setLoading(false);
        Firebase.database()
          .ref(`users/${user.uid}/`)
          .once('value')
          .then(resDB => {
            if (resDB.val()) {
              storeData('user', resDB.val());
              navigation.replace('MainApp');
            }
          });
      })
      .catch(err => {
        console.log('error: ', err);
        setLoading(false);
        showMessage({
          message: 'Login Gagal.',
          description: err.message,
          type: 'default',
          backgroundColor: colors.error,
          color: colors.white,
        });
      });
  };

  return (
    <>
      <View style={styles.page}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ILLogo />
          <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
          <Input
            label="Email Adress"
            type="email"
            value={form.email}
            onChangeText={value => setForm('email', value)}
          />
          <Gap height={24} />
          <Input
            label="Password"
            type="password"
            value={form.password}
            onChangeText={value => setForm('password', value)}
          />
          <Gap height={10} />
          <Link title="Lupa Password" size={13} />
          <Gap height={40} />
          <Button title="Masuk" onPress={loginHandle} />
          <Gap height={30} />
          <Link
            title="Daftar Akun Baru"
            size={16}
            align="center"
            onPress={() => navigation.navigate('Register')}
          />
        </ScrollView>
      </View>
      {loading && <Loading />}
    </>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 40,
    flex: 1,
    paddingBottom: 10,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 22,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginVertical: 40,
    maxWidth: 170,
  },
});
