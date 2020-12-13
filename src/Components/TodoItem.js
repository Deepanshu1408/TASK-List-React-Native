import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const TodoItem = ({item, del}) => {
  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      <Text style={Styles.item}>{item.text}</Text>
      <TouchableOpacity
        style={{
          marginLeft: 30,
          marginTop: 20,
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 5,
          paddingBottom: 5,
          backgroundColor: '#E92626',
          borderRadius: 20,
          borderWidth: 2,
          borderColor: '#E92626',
          marginLeft: 25,
        }}
        onPress={() => del(item.key)}>
        <Text style={{fontSize: 21, fontWeight: 'bold'}}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoItem;

const Styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 10,
    borderColor: '#bbb',
    borderWidth: 1,
    borderRadius: 20,
    fontSize: 19,
    fontWeight: 'bold',
    backgroundColor: '#4DA9AE',
    width: 300,
  },
});
