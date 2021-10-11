import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {DummyDoctor3, IconRate} from '../../../assets';
import {colors, fonts} from '../../../utils';

export default function RatedDoctor({onPress}) {
  return (
    <Pressable
      style={styles.container}
      android_ripple={{color: colors.rippleWhite}}
      onPress={onPress}>
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
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    marginHorizontal: -16,
    paddingHorizontal: 16,
    alignItems: 'center',
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
