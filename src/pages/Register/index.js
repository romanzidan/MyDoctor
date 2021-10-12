import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Gap, Header, Input} from '../../components';
import {colors} from '../../utils';

export default function Register({navigation}) {
  const [fullName, setFullName] = useState('');
  const [profession, setProfession] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onContinue = () => {
    // navigation.navigate('UploadPhoto');
    console.log(fullName, profession, email, password);
  };
  return (
    <View style={styles.page}>
      <Header title="Daftar Akun" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Gap height={10} />
        <View style={styles.content}>
          <Input
            label="Nama Lengkap"
            value={fullName}
            onChangeText={value => setFullName(value)}
          />
          <Gap height={24} />
          <Input
            label="Pekerjaan"
            value={profession}
            onChangeText={value => setProfession(value)}
          />
          <Gap height={24} />
          <Input
            label="Email"
            value={email}
            onChangeText={value => setEmail(value)}
            type="email"
          />
          <Gap height={24} />
          <Input
            label="Password"
            value={password}
            type="password"
            onChangeText={value => setPassword(value)}
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
