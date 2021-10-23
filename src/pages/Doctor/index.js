import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ILNullPhoto} from '../../assets';
import {
  DoctorCategory,
  Gap,
  HomeProfile,
  NewsItem,
  RatedDoctor,
} from '../../components';
import {Firebase} from '../../config';
import {colors, fonts, getData, showError} from '../../utils';

export default function Doctor({navigation}) {
  const [profile, setProfile] = useState({
    fullName: '',
    profession: '',
    photo: ILNullPhoto,
  });
  const [news, setNews] = useState([]);
  const [categoryDoctor, setCategoryDoctor] = useState([]);

  useEffect(() => {
    getData('user').then(res => {
      const data = res;
      if (data.photo) {
        data.photo = {uri: res.photo};
      } else {
        data.photo = ILNullPhoto;
      }
      setProfile(data);
    });

    Firebase.database()
      .ref('news/')
      .once('value')
      .then(res => {
        console.log('data: ', res.val());
        if (res.val()) {
          setNews(res.val());
        }
      })
      .catch(err => {
        showError(err.message);
      });

    Firebase.database()
      .ref('category_doc/')
      .once('value')
      .then(res => {
        console.log('data: ', res.val());
        if (res.val()) {
          setCategoryDoctor(res.val());
        }
      })
      .catch(err => {
        showError(err.message);
      });
  }, []);
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            <Gap height={20} />
            <HomeProfile
              onPress={() => navigation.navigate('UserProfile')}
              profile={profile}
            />
            <Text style={styles.welcome}>
              Mau konsultasi dengan siapa hari ini?
            </Text>
            <View style={styles.wrapperScroll}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.category}>
                  <Gap width={16} />
                  {categoryDoctor.map(item => {
                    return (
                      <DoctorCategory
                        key={item.id}
                        category={item.category}
                        onPress={() => navigation.navigate('ChooseDoctor')}
                      />
                    );
                  })}
                  <Gap width={6} />
                </View>
              </ScrollView>
            </View>
            <Text style={styles.sectionLabel}>Dokter Terbaik</Text>
            <Gap height={8} />
            <RatedDoctor onPress={() => navigation.navigate('DoctorProfile')} />
            <RatedDoctor />
            <RatedDoctor />
            <Text style={styles.sectionLabel}>Berita Terbaru</Text>
            {news.map(item => {
              return (
                <NewsItem
                  key={item.id}
                  title={item.title}
                  date={item.date}
                  image={item.image}
                />
              );
            })}
            <Gap height={30} />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  container: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    overflow: 'hidden',
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    paddingHorizontal: 16,
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
