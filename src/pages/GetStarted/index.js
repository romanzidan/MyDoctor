import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {ILGetStarted, ILLogo} from '../../assets';
import Button from '../../components/atoms/Button';

export default function GetStarted() {
  return (
    <ImageBackground source={ILGetStarted} style={styles.page}>
      <View>
        <ILLogo />
        <Text style={styles.title}>
          Konsultasi dengan dokter jadi lebih mudah & fleksibel
        </Text>
      </View>
      <View>
        <Button title="Memulai" />
        <View style={styles.distanceBox} />
        <Button type="secondary" title="Masuk" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 40,
    justifyContent: 'space-between',
    flex: 1,
  },
  title: {
    fontWeight: '600',
    fontSize: 28,
    marginTop: 90,
    color: '#FFFFFF',
    lineHeight: 34,
  },
  distanceBox: {
    height: 16,
  },
});
