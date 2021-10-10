import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  DoctorCategory,
  Gap,
  HomeProfile,
  NewsItem,
  RatedDoctor,
} from '../../components';
import {colors, fonts} from '../../utils';

export default function Doctor({navigation}) {
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Gap height={30} />
          <HomeProfile />
          <Text style={styles.welcome}>
            Mau konsultasi dengan siapa hari ini?
          </Text>
          <View style={styles.wrapperScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.category}>
                <Gap width={16} />
                <DoctorCategory
                  onPress={() => navigation.navigate('ChooseDoctor')}
                />
                <DoctorCategory />
                <DoctorCategory />
                <DoctorCategory />
                <Gap width={6} />
              </View>
            </ScrollView>
          </View>
          <Text style={styles.sectionLabel}>Dokter Terbaik</Text>
          <RatedDoctor />
          <RatedDoctor />
          <RatedDoctor />
          <Text style={styles.sectionLabel}>Berita Terbaru</Text>
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <Gap height={30} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  welcome: {
    fontSize: 22,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 20,
    marginBottom: 16,
    maxWidth: 230,
  },
  category: {
    flexDirection: 'row',
  },
  wrapperScroll: {
    marginHorizontal: -16,
  },
  sectionLabel: {
    fontSize: 18,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
  },
});
