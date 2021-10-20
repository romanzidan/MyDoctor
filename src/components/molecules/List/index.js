import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {
  IconNext,
  IconEditProfile,
  IconLanguage,
  IconStar,
  IconHelp,
  IconLogout,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

export default function List({image, icon, title, desc, type, onPress}) {
  const Icon = () => {
    if (icon === 'edit-profile') {
      return <IconEditProfile />;
    }
    if (icon === 'language') {
      return <IconLanguage />;
    }
    if (icon === 'rate') {
      return <IconStar />;
    }
    if (icon === 'help') {
      return <IconHelp />;
    }
    if (icon === 'logout') {
      return <IconLogout />;
    }
    return <IconEditProfile />;
  };
  return (
    <Pressable
      onPress={onPress}
      style={styles.container}
      android_ripple={{color: colors.rippleWhite, borderless: false}}>
      {icon ? <Icon /> : <Image source={image} style={styles.avatar} />}
      <View style={styles.content}>
        <Text style={styles.name}>{title}</Text>
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
    marginLeft: 16,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
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
