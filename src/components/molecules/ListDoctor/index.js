import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {DummyDoctor1, IconNext} from '../../../assets';
import {colors, fonts} from '../../../utils';

export default function ListDoctor({desc, type, onPress}) {
  return (
    <Pressable
      onPress={onPress}
      style={styles.container}
      android_ripple={{color: colors.rippleWhite, borderless: false}}>
      <Image source={DummyDoctor1} style={styles.avatar} />
      <View style={styles.content}>
        <Text style={styles.name}>Alok Gunawan</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
      {type === 'next' && <IconNext />}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
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
  desc: {
    fontSize: 13,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
  },
});
