import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {DummyUser} from '../../../assets';
import {colors, fonts} from '../../../utils';

export default function HomeProfile({onPress}) {
  return (
    <Pressable
      android_ripple={{color: colors.rippleWhite}}
      style={styles.container}
      onPress={onPress}>
      <Image source={DummyUser} style={styles.avatar} />
      <View>
        <Text style={styles.name}>Roman Zidan Ramadhan</Text>
        <Text style={styles.profession}>Mahasiswa</Text>
      </View>
    </Pressable>
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
