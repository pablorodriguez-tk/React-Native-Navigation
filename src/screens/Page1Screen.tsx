import React, {useEffect} from 'react';
import {Button, Text, View, TouchableOpacity} from 'react-native';
// import {StackScreenProps} from '@react-navigation/stack';
import {styles} from '../theme/appTheme';
import {DrawerScreenProps} from '@react-navigation/drawer';

// interface Props extends StackScreenProps<any, any> {}
interface Props extends DrawerScreenProps<any, any> {}

export const Page1Screen = ({navigation}: Props) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button title="Menu" onPress={() => navigation.toggleDrawer()} />
      ),
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page1Screen</Text>
      <Button
        title="Go Page 2"
        onPress={() => navigation.navigate('Page2Screen')}
      />

      <Text style={{marginVertical: 20, fontSize: 20}}>
        Navigate with arguments
      </Text>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{...styles.BigButton, backgroundColor: '#5856D6'}}
          onPress={() =>
            navigation.navigate('PersonScreen', {id: 1, name: 'Pedro'})
          }>
          <Text style={styles.BigButtonText}>Pedro</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{...styles.BigButton, backgroundColor: '#FF9427'}}
          onPress={() =>
            navigation.navigate('PersonScreen', {id: 2, name: 'Maria'})
          }>
          <Text style={styles.BigButtonText}>Maria</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
