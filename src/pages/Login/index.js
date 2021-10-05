import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILLogo} from '../../assets';
import {Button, Gap, Input, Link} from '../../components/atoms';

export default function Login() {
  return (
    <View style={styles.page}>
      <ILLogo />
      <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
      <Input label="Email Adress" />
      <Gap height={24} />
      <Input label="Password" />
      <Gap height={10} />
      <Link title="Lupa Password" size={13} />
      <Gap height={40} />
      <Button title="Masuk" />
      <Gap height={30} />
      <Link title="Daftar Akun Baru" size={16} align="center" />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {padding: 40, flex: 1, backgroundColor: 'white'},
  title: {
    fontSize: 22,
    fontFamily: 'Nunito-SemiBold',
    color: '#112340',
    marginVertical: 40,
    maxWidth: 170,
  },
});