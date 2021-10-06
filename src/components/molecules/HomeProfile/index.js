import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyUser} from '../../../assets';
import {colors, fonts} from '../../../utils';

export default function HomeProfile() {
  return (
    <View style={styles.container}>
      <Image source={DummyUser} style={styles.avatar} />
      <View>
        <Text style={styles.name}>Roman Zidan Ramadhan</Text>
        <Text style={styles.profession}>Mahasiswa</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flexDirection: 'row'},
  avatar: {
    width: 55,
    height: 55,
    borderRadius: 55 / 2,
    marginRight: 14,
  },
  name: {
    fontSize: 18,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  profession: {
    fontSize: 14,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
  },
});
