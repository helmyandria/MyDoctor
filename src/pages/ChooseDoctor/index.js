import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  DummyDoctor4,
  DummyDoctor5,
  DummyDoctor6,
  DummyDoctor7,
  DummyDoctor8,
} from '../../assets';
import {Header, List} from '../../components';
import {colors} from '../../utils';

const ChooseDoctor = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title="Pilih Dokter Anak"
        type="dark"
        onPress={() => navigation.goBack()}
      />
      <List
        type="next"
        profile={DummyDoctor4}
        name="Alexander Jannie"
        desc="Wanita"
        onPress={() => navigation.navigate('Chatting')}
      />
      <List
        type="next"
        profile={DummyDoctor5}
        name="John McParker Steve"
        desc="Pria"
      />
      <List
        type="next"
        profile={DummyDoctor6}
        name="Nairobi Putri Hayza"
        desc="Wanita"
      />
      <List
        type="next"
        profile={DummyDoctor7}
        name="James Rivillia"
        desc="Pria"
      />
      <List
        type="next"
        profile={DummyDoctor8}
        name="Liu Yue Tian Park"
        desc="Wanita"
      />
    </View>
  );
};

export default ChooseDoctor;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
