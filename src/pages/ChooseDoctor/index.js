import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Gap, Header, List} from '../../components';
import {Firebase} from '../../config';
import {colors, fonts} from '../../utils';

export default function ChooseDoctor({navigation, route}) {
  const itemCategory = route.params;
  const [listDoctor, setListDoctor] = useState([]);

  useEffect(() => {
    callDoctorByCategory(itemCategory.category);
  }, [itemCategory.category]);

  const callDoctorByCategory = category => {
    Firebase.database()
      .ref('doctors/')
      .orderByChild('category')
      .equalTo(category)
      .once('value')
      .then(res => {
        if (res.val()) {
          const oldData = res.val();
          const data = [];
          Object.keys(oldData).map(item => {
            data.push({
              id: item,
              data: oldData[item],
            });
          });
          setListDoctor(data);
        }
      });
  };

  return (
    <View style={styles.page}>
      <Header
        title={`Pilih ${itemCategory.category}`}
        type="dark"
        onPress={() => navigation.goBack()}
      />
      <Gap height={4} />
      {listDoctor.length !== 0 ? (
        listDoctor.map(item => (
          <List
            key={item.id}
            type="next"
            title={item.data.fullName}
            desc={item.data.gender}
            image={{uri: item.data.photo}}
            onPress={() => navigation.navigate('DoctorProfile', item.data)}
          />
        ))
      ) : (
        <Text style={styles.text}>Dokter Tidak Tersedia</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: fonts.primary[400],
    color: colors.text.primary,
    marginTop: 20,
  },
});
