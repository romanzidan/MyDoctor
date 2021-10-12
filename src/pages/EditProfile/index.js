import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {DummyUser} from '../../assets';
import {Button, Gap, Header, Input, Profile} from '../../components';
import {colors} from '../../utils';

export default function EditProfile({navigation}) {
  return (
    <View style={styles.page}>
      <Header title="Edit Profile" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Profile avatar={DummyUser} isRemove />
        <Gap height={26} />
        <View style={styles.content}>
          <Input label="Nama Lengkap" />
          <Gap height={10} />
          <Input label="Pekerjaan" />
          <Gap height={10} />
          <Input label="Email" />
          <Gap height={10} />
          <Input label="Password" />
          <Gap height={40} />
          <Button title="Simpan Profile" />
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
