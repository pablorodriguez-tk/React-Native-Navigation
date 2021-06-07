import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../theme/appTheme';

export const Page2Screen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({title: 'Hola Mundo', headerBackTitle: 'Go Back'});
  }, [navigation]);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page2Screen</Text>
      <Button
        title="Go Page 3"
        onPress={() => navigation.navigate('Page3Screen')}
      />
    </View>
  );
};
