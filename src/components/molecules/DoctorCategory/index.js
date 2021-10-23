import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {ILCatAnak, ILCatObat, ILCatPsikiater, ILCatUmum} from '../../../assets';
import {colors, fonts} from '../../../utils';

export default function DoctorCategory({category, onPress}) {
  const Icon = () => {
    if (category === 'umum') {
      return <ILCatUmum style={styles.illustration} />;
    }
    if (category === 'psikiater') {
      return <ILCatPsikiater style={styles.illustration} />;
    }
    if (category === 'obat') {
      return <ILCatObat style={styles.illustration} />;
    }
    if (category === 'anak') {
      return <ILCatAnak style={styles.illustration} />;
    }
    return <ILCatUmum style={styles.illustration} />;
  };
  return (
    <View style={styles.container}>
      <Pressable
        onPress={onPress}
        style={styles.pressable}
        android_ripple={{color: colors.cardRipple, borderless: false}}>
        <Icon />
        <Text style={styles.label}>Saya butuh</Text>
        <Text style={styles.category}>{category}</Text>
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
    width: 110,
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
    textTransform: 'capitalize',
  },
});
