import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  DummyDoctor1,
  DummyDoctor2,
  DummyDoctor3,
  DummyDoctor4,
  DummyDoctor5,
} from '../../assets';
import {List} from '../../components';
import {colors, fonts} from '../../utils';

export default function Messages({navigation}) {
  const [data] = useState([
    {
      id: 1,
      name: 'Ganyu Putri',
      image: DummyDoctor3,
      desc: 'Baik pak, terima kasih banyak atas wakt...',
      onPress: () => navigation.navigate('Chatting'),
    },
    {
      id: 2,
      name: 'Alok Gunawan',
      image: DummyDoctor1,
      desc: 'Baik pak, terima kasih banyak atas wakt...',
    },
    {
      id: 3,
      name: 'Chrono Ronald',
      image: DummyDoctor2,
      desc: 'Baik pak, terima kasih banyak atas wakt...',
    },
    {
      id: 4,
      name: 'Dasha Keqing',
      image: DummyDoctor4,
      desc: 'Baik pak, terima kasih banyak atas wakt...',
    },
    {
      id: 5,
      name: 'Steve Diluc',
      image: DummyDoctor5,
      desc: 'Baik pak, terima kasih banyak atas wakt...',
    },
  ]);
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}>Pesan</Text>
        {data.map(item => (
          <List
            key={item.id}
            title={item.name}
            desc={item.desc}
            image={item.image}
            onPress={item.onPress}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 22,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginHorizontal: 16,
  },
});
