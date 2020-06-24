import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Notes from './screens/Notes/Notes';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#202225"/>
      <View style={styles.header}>
        <Text style={styles.headerText}>DisNote</Text>
      </View>
      <Notes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#202225',
    padding: 16
  },
  headerText: {
    color: 'white',
    fontWeight: "500",
    fontSize: 16
  }
});
