import React from 'react';
import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  heading: {fontSize: 20, marginLeft: 20, fontWeight: 'bold', marginTop: 10},
  secondView: {flex: 1, flexDirection: 'row', marginTop: 18, marginLeft: 20},

  textinput: {
    height: 40,
    borderWidth: 1,
    width: 300,
    color: 'black',
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: 'white',
    fontSize: 17,
  },
  button: {
    marginLeft: 10,
    marginRight: 30,
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: '#098A1A',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#098A1A',
    marginLeft: 25,
    marginTop: 5,
  },
  buttonIcon: {
    fontSize: 20,
    alignItems: 'center',
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 1,
    paddingBottom: 0,
    color: 'white',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },

  scrcontent: {
    marginTop: 10,
    marginLeft: 20,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    height: 50,
    justifyContent: 'space-around',
    alignSelf: 'center',
  },

  list: {
    flex: 1,
    margin: 20,
  },
});

export default Styles;
