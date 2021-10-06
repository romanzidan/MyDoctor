import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  DoctorCategory,
  HomeProfile,
  NewsItem,
  RatedDoctor,
} from '../../components';
import {colors, fonts} from '../../utils';

export default function Doctor() {
  return (
    <View style={styles.page}>
      <HomeProfile />
      <Text style={styles.welcome}>Mau konsultasi dengan siapa hari ini?</Text>
      <DoctorCategory />
      <DoctorCategory />
      <DoctorCategory />
      <DoctorCategory />
      <Text>Dokter Terbaik</Text>
      <RatedDoctor />
      <RatedDoctor />
      <RatedDoctor />
      <Text>Berita Terbaru</Text>
      <NewsItem />
      <NewsItem />
      <NewsItem />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    paddingVertical: 30,
    paddingHorizontal: 16,
    backgroundColor: colors.white,
    flex: 1,
  },
  welcome: {
    fontSize: 22,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 20,
    marginBottom: 16,
    maxWidth: 230,
  },
});
