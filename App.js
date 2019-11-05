import React from 'react';
import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants'
import TaskList from './components/taskList'
import TaskInput from './components/taskInput'


export default function App() {
  return (
    <View style={styles.container}>
    <TaskInput/>
    <TaskList/>
    </View>
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
