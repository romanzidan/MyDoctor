import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Gap, Header, Profile, ProfileItem} from '../../components';
import {colors} from '../../utils';

export default function DoctorProfile({navigation, route}) {
  const dataDoctor = route.params;
  return (
    <View style={styles.page}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <Profile
        avatar={{uri: dataDoctor.photo}}
        name={dataDoctor.fullName}
        desc={dataDoctor.profession}
      />
      <Gap height={10} />
      <ProfileItem label="Alumnus" value={dataDoctor.university} />
      <ProfileItem label="Tempat Praktik" value={dataDoctor.hospital_address} />
      <ProfileItem label="No. STR" value={dataDoctor.str_number} />
      <View style={styles.content}>
        <Button
          title="Mulai Konsultasi"
          onPress={() => navigation.navigate('Chatting', dataDoctor)}
        />
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
