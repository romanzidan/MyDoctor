import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  DummyDoctor1,
  DummyDoctor2,
  DummyDoctor3,
  DummyDoctor4,
  DummyDoctor5,
} from '../../assets';
import {Gap, Header, List} from '../../components';
import {colors} from '../../utils';

export default function ChooseDoctor({navigation}) {
  const [data] = useState([
    {
      id: 1,
      name: 'Ganyu Putri',
      image: DummyDoctor3,
      desc: 'Wanita',
    },
    {
      id: 2,
      name: 'Alok Gunawan',
      image: DummyDoctor1,
      desc: 'Pria',
    },
    {
      id: 3,
      name: 'Chrono Ronald',
      image: DummyDoctor2,
      desc: 'Pria',
    },
    {
      id: 4,
      name: 'Dasha Keqing',
      image: DummyDoctor4,
      desc: 'Wanita',
    },
    {
      id: 5,
      name: 'Steve Diluc',
      image: DummyDoctor5,
      desc: 'Pria',
    },
  ]);
  return (
    <View style={styles.page}>
      <Header
        title="Pilih Dokter Psikiater"
        type="dark"
        onPress={() => navigation.goBack()}
      />
      <Gap height={4} />
      {data.map(item => (
        <List
          key={item.id}
          type="next"
          title={item.name}
          desc={item.desc}
          image={item.image}
          onPress={() => navigation.navigate('Chatting')}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
