import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DummyDoctor3} from '../../assets';
import {Button, Gap, Header, Profile, ProfileItem} from '../../components';
import {colors} from '../../utils';

export default function DoctorProfile({navigation}) {
  return (
    <View style={styles.page}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <Profile
        avatar={DummyDoctor3}
        name="Ganyu Putri"
        desc="Psikiater Genshin"
      />
      <Gap height={10} />
      <ProfileItem label="Alumnus" value="Stanford University, 2020" />
      <ProfileItem
        label="Tempat Praktik"
        value="Rumah Sakit Jiwa, Banjarbaru"
      />
      <ProfileItem label="No. STR" value="0000116622081996" />
      <View style={styles.content}>
        <Button title="Mulai Konsultasi" />
      </View>
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
    marginTop: 40,
  },
});
