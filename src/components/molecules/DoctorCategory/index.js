import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {ILCatUmum} from '../../../assets';
import {colors, fonts} from '../../../utils';

export default function DoctorCategory({onPress}) {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={onPress}
        style={styles.pressable}
        android_ripple={{color: colors.cardRipple, borderless: false}}>
        <ILCatUmum style={styles.illustration} />
        <Text style={styles.label}>Saya butuh</Text>
        <Text style={styles.category}>Dokter umum</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    marginRight: 10,
    alignSelf: 'flex-start',
    overflow: 'hidden',
  },
  pressable: {
    padding: 12,
    backgroundColor: colors.cardLight,
  },
  illustration: {marginBottom: 28},
  label: {
    fontSize: 13,
    fontFamily: fonts.primary[300],
    color: colors.text.primary,
  },
  category: {
    fontSize: 13,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
});
