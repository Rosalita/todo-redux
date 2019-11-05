import React from 'react';
import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants'
import TaskList from './components/taskList'
import TaskInput from './components/taskInput'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from './redux/reducer'

const store = createStore(reducer)

export default function App() {
  return (
    <Provider store={store}>
    <View style={styles.container}>
    <TaskInput/>
    <TaskList/>
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
