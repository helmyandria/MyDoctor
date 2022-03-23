import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../utils';
import {ILLogo} from './../../assets';
import {Fire} from '../../config';

const Splash = ({navigation}) => {
  useEffect(() => {
    const unsubsribe = Fire.auth().onAuthStateChanged(user => {
      setTimeout(() => {
        if (user) {
          console.log('user : ', user);
          navigation.replace('MainApp');
        } else {
          navigation.replace('GetStarted');
        }
      }, 3000);
    });
    return () => unsubsribe();
  }, [navigation]);

  return (
    <View style={styles.page}>
      <ILLogo />
      <Text style={styles.title}>My Doctor</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 20,
  },
});
