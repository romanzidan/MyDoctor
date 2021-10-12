import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {IconRemovePhoto} from '../../../assets';
import {colors, fonts} from '../../../utils';

export default function Profile({isRemove, name, avatar, desc}) {
  return (
    <View style={styles.container}>
      <View style={styles.borderAvatar}>
        <Image source={avatar} style={styles.avatar} />
        {isRemove && <IconRemovePhoto style={styles.icon} />}
      </View>
      {name && <Text style={styles.name}>{name}</Text>}
      {desc && <Text style={styles.desc}>{desc}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
  },
  borderAvatar: {
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 16,
  },
  desc: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.secondary,
    marginTop: 2,
  },
  icon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});