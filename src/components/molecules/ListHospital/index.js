import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyHospital1} from '../../../assets';
import {colors, fonts} from '../../../utils';

export default function ListHospital() {
  return (
    <View style={styles.container}>
      <Image source={DummyHospital1} style={styles.picture} />
      <View>
        <Text style={styles.title}>Rumah Sakit Anak </Text>
        <Text style={styles.title}>Garena FreeFire</Text>
        <Text style={styles.address}>Jln. Bermuda 20</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    padding: 16,
    alignItems: 'center',
  },
  picture: {
    width: 100,
    height: 65,
    borderRadius: 10,
    marginRight: 16,
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
  },
  address: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
    marginTop: 6,
  },
});
