import React, {useState} from 'react';
import {View, TextInput, Text, FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import TodoItem from '../../Components/TodoItem';
import Styles from '../SecondScreen/Style';

const MainScreen = () => {
  const [Items, setItems] = useState([]);
  const [Input, setInput] = useState('');

  const add = (val) => {
    setInput(val);
  };

  const showAdded = (Input) => {
    if (Input) {
      setItems((prevToDo) => {
        return [{text: Input, key: Math.random().toString()}, ...prevToDo];
      });
      setInput('');
    } else {
      alert('Please Add Some Task to Add in this List ');
    }
  };
  const del = (key) => {
    setItems((prevToDo) => {
      return prevToDo.filter((Items) => Items.key != key);
    });
  };

  return (
    <View style={{flex: 1, backgroundColor: '#E4DBDA'}}>
      <View>
        <Text style={Styles.heading}>TASK-LIST</Text>
      </View>
      <View style={Styles.scrcontent}>
        <TextInput
          style={Styles.textinput}
          placeholder="Enter Your Tasks Here "
          onChangeText={add}
        />
        <TouchableOpacity
          style={Styles.button}
          onPress={() => showAdded(Input)}>
          <Text style={Styles.buttonIcon}>ADD</Text>
        </TouchableOpacity>
      </View>

      <View style={Styles.list}>
        <FlatList
          data={Items}
          renderItem={({item}) => <TodoItem item={item} del={del} />}
        />
      </View>
    </View>
  );
};

export default MainScreen;
