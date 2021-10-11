import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyDoctor3, IconRate} from '../../../assets';
import {colors, fonts} from '../../../utils';

export default function RatedDoctor() {
  return (
    <View style={styles.container}>
      <Image source={DummyDoctor3} style={styles.avatar} />
      <View style={styles.profile}>
        <Text style={styles.name}>Ganyu Putri</Text>
        <Text style={styles.category}>Psikiater</Text>
      </View>
      <View style={styles.rate}>
        <IconRate />
        <IconRate />
        <IconRate />
        <IconRate />
        <IconRate />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 16,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    marginRight: 12,
  },
  rate: {
    flexDirection: 'row',
  },
  profile: {flex: 1},
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  category: {
    fontSize: 13,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginTop: 2,
  },
});
