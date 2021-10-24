import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ILNullPhoto} from '../../assets';
import {
  DoctorCategory,
  DoctorCategoryPlaceholder,
  Gap,
  HomeProfile,
  NewsItem,
  RatedDoctor,
  RatedDoctorPlaceholder,
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
  const [topDoctor, setTopDoctor] = useState([]);

  useEffect(() => {
    navigation.addListener('focus', () => {
      getUserData();
    });
    getCategoryDoctor();
    getTopRatedDoctor();
    getNews();
  }, [navigation]);

  const getUserData = () => {
    getData('user').then(res => {
      const data = res;
      data.photo = res?.photo?.length > 1 ? {uri: res.photo} : ILNullPhoto;
      setProfile(data);
    });
  };

  const getTopRatedDoctor = () => {
    Firebase.database()
      .ref('doctors/')
      .orderByChild('rate')
      .limitToLast(3)
      .once('value')
      .then(res => {
        if (res.val()) {
          const oldData = res.val();
          //parse to array
          const data = [];
          Object.keys(oldData).map(key => {
            data.push({
              id: key,
              data: oldData[key],
            });
          });
          setTopDoctor(data);
        }
      })
      .catch(err => {
        showError(err.message);
      });
  };

  const getCategoryDoctor = () => {
    Firebase.database()
      .ref('category_doc/')
      .once('value')
      .then(res => {
        if (res.val()) {
          const data = res.val();
          const filterData = data.filter(el => el !== null);
          setCategoryDoctor(filterData);
        }
      })
      .catch(err => {
        showError(err.message);
      });
  };

  const getNews = () => {
    Firebase.database()
      .ref('news/')
      .once('value')
      .then(res => {
        if (res.val()) {
          const data = res.val();
          const filterData = data.filter(el => el !== null);
          setNews(filterData);
        }
      })
      .catch(err => {
        showError(err.message);
      });
  };
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
                  {categoryDoctor.length !== 0 ? (
                    categoryDoctor.map(item => {
                      return (
                        <DoctorCategory
                          key={`category-${item.id}`}
                          category={item.category}
                          onPress={() =>
                            navigation.navigate('ChooseDoctor', item)
                          }
                        />
                      );
                    })
                  ) : (
                    <DoctorCategoryPlaceholder />
                  )}
                  <Gap width={6} />
                </View>
              </ScrollView>
            </View>
            <Text style={styles.sectionLabel}>Dokter Terbaik</Text>
            <Gap height={8} />
            {topDoctor.length !== 0 ? (
              topDoctor.map(item => {
                return (
                  <RatedDoctor
                    key={item.id}
                    rate={item.data.rate}
                    name={item.data.fullName}
                    category={item.data.profession}
                    avatar={{uri: item.data.photo}}
                    onPress={() =>
                      navigation.navigate('DoctorProfile', item.data)
                    }
                  />
                );
              })
            ) : (
              <RatedDoctorPlaceholder />
            )}
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
