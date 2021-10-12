import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ILLogo} from '../../assets';
import {Button, Gap, Input, Link} from '../../components/atoms';
import {colors, fonts} from '../../utils';

export default function Login({navigation}) {
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ILLogo />
        <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
        <Input label="Email Adress" />
        <Gap height={24} />
        <Input label="Password" type="password" />
        <Gap height={10} />
        <Link title="Lupa Password" size={13} />
        <Gap height={40} />
        <Button title="Masuk" onPress={() => navigation.replace('MainApp')} />
        <Gap height={30} />
        <Link
          title="Daftar Akun Baru"
          size={16}
          align="center"
          onPress={() => navigation.navigate('Register')}
        />
      </ScrollView>
    </View>
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
