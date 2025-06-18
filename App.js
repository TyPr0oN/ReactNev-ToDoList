import React, { useState } from 'react';
import {StyleSheet, Button, View, Text,TextInput,FlatList, Alert} from 'react-native';
import {SafeAreaView} from 'react-native';

const App = () => {
  const [toDoItems, setToDoItems] = useState([
    { id: '1', task: 'Buy1' },
    { id: '2', task: 'Buy2' },
    { id: '3', task: 'Buy3' }
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleAddItem = () => {
    if (inputValue.trim()) {
      const newItem = {
        id: Date.now().toString(), 
        task: inputValue,
      };
      setToDoItems(prevItems => [newItem, ...prevItems]);
      setInputValue('');
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.task}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>To-Do List</Text>

      <FlatList
        data={toDoItems}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.list}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add new task"
          value={inputValue}
          onChangeText={setInputValue}
        />
        <Button title="Add" onPress={handleAddItem} />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'center'
  },
  list: {
    flex: 1,
    marginBottom: 20
  },
  item: {
    padding: 15,
    backgroundColor: '#EEE',
    borderRadius: 8,
    marginBottom: 10
  },
  inputContainer: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center'
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 40
  },
});

