import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';
import {Button} from '../../atoms';

export default function DarkProfile({title, desc, avatar, onPress}) {
  return (
    <View style={styles.container}>
      <Button type="icon-only" icon="back-light" onPress={onPress} />
      <View style={styles.text}>
        <Text style={styles.name}>{title}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
      <Image source={{uri: avatar}} style={styles.avatar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 25,
    backgroundColor: colors.secondary,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  text: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    color: colors.white,
    fontFamily: fonts.primary[600],
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  desc: {
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    marginTop: 6,
    textAlign: 'center',
    color: colors.text.subTitle,
    textTransform: 'capitalize',
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
  },
});
