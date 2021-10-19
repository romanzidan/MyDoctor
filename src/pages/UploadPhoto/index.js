import React, {useState} from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {IconAddPhoto, IconRemovePhoto, ILNullPhoto} from '../../assets';
import {Button, Gap, Header, Link} from '../../components';
import {colors, fonts} from '../../utils';
import {launchImageLibrary} from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message';
export default function UploadPhoto({navigation}) {
  const [hasPhoto, setHasPhoto] = useState(false);
  const [photo, setPhoto] = useState(ILNullPhoto);
  const getImage = () => {
    launchImageLibrary(
      {saveToPhotos: true, mediaType: 'photo', maxWidth: 800, maxHeight: 800},
      response => {
        if (response.didCancel || response.errorCode) {
          showMessage({
            message: 'Gagal Upload Foto',
            description: response.errorMessage,
            type: 'default',
            backgroundColor: colors.error,
            color: colors.white,
          });
        } else {
          const source = {uri: response.assets[0].uri};
          setPhoto(source);
          setHasPhoto(true);
        }
      },
    );
  };
  return (
    <View style={styles.page}>
      <Header title="Upload Photo" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <View style={styles.profile}>
          <View>
            <TouchableOpacity
              style={styles.avatarWrapper}
              onPress={getImage}
              activeOpacity={0.9}>
              <Image source={photo} style={styles.avatar} />
            </TouchableOpacity>
            {hasPhoto && <IconRemovePhoto style={styles.addPhoto} />}
            {!hasPhoto && <IconAddPhoto style={styles.addPhoto} />}
          </View>
          <Text style={styles.name}>Roman Zidan Ramadhan</Text>
          <Text style={styles.profession}>Mahasiswa</Text>
        </View>
        <View>
          <Button title="Upload dan Lanjutkan" disable={!hasPhoto} />
          <Gap height={30} />
          <Link title="Lewati" align="center" size={16} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    flex: 1,
    paddingHorizontal: 40,
    paddingBottom: 64,
    justifyContent: 'space-between',
  },
  profile: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
  },
  avatarWrapper: {
    width: 130,
    height: 130,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 130 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  addPhoto: {
    position: 'absolute',
    bottom: 20,
    right: 5,
  },
  name: {
    fontSize: 24,
    color: colors.text.primary,
    fontFamily: fonts.primary[600],
    textAlign: 'center',
  },
  profession: {
    fontSize: 18,
    fontFamily: fonts.primary.normal,
    textAlign: 'center',
    color: colors.text.secondary,
  },
});
