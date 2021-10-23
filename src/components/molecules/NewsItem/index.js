import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';

export default function NewsItem({title, image, date}) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>{title}</Text>
          <Text>{date}</Text>
        </View>
        <Image source={{uri: image}} style={styles.image} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingBottom: 12,
    paddingTop: 16,
    marginHorizontal: -16,
  },
  content: {
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  titleWrapper: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    maxWidth: '90%',
    marginBottom: 2,
  },
  date: {
    fontSize: 12,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginTop: 4,
  },
  image: {
    width: 80,
    height: 60,
    borderRadius: 10,
  },
});
