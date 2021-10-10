import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Gap, Header, ListDoctor} from '../../components';
import {colors} from '../../utils';

export default function ChooseDoctor({navigation}) {
  return (
    <View style={styles.page}>
      <Header
        title="Pilih Dokter Psikiater"
        type="dark"
        onPress={() => navigation.goBack()}
      />
      <Gap height={4} />
      <ListDoctor type="next" desc="Pria" />
      <ListDoctor
        type="next"
        desc="Pria"
        onPress={() => navigation.navigate('Chatting')}
      />
      <ListDoctor type="next" desc="Pria" />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
