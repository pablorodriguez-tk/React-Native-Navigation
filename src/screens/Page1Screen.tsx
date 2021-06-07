import React from 'react';
import {Button, Text, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {styles} from '../theme/appTheme';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface Props extends StackScreenProps<any, any> {}

export const Page1Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page1Screen</Text>
      <Button
        title="Go Page 2"
        onPress={() => navigation.navigate('Page2Screen')}
      />

      <Text>Navigate with arguments</Text>

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
