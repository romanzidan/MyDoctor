import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyDoctor1} from '../../../assets';
import {colors, fonts} from '../../../utils';

export default function ListDoctor() {
  return (
    <View style={styles.container}>
      <Image source={DummyDoctor1} style={styles.avatar} />
      <View>
        <Text style={styles.name}>Alok Gunawan</Text>
        <Text style={styles.text}>
          Baik pak, terima kasih banyak atas wakt...
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    marginRight: 12,
  },
  name: {
    fontSize: 18,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
  },
  text: {
    fontSize: 13,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
  },
});
