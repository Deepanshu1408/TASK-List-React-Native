import React from 'react';
import {View, Text, Button} from 'react-native';
import Styles from './styles';

const FirstScreen = (props) => {
  return (
    <View style={Styles.FirstView}>
      <Text style={{fontSize: 25, marginBottom: 10, fontWeight: 'bold'}}>
        Welcome to My Todo List Project
      </Text>
      <View style={{elevation: 10}}>
        <Button
          title="Click On Me To Navigate"
          onPress={() => {
            props.navigation.navigate('Main Screen');
          }}
        />
      </View>
    </View>
  );
};

export default FirstScreen;
