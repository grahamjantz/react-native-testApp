import { useState } from 'react';
import { Button, FlatList, Pressable, SafeAreaView, StyleSheet, Switch, Text, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-web';
import ToDoItem from './components/ToDoItem/ToDoItem';

export default function App() {

  const [name, setName] = useState('')
  const [item, setItem] = useState({text: ''})
  const [list, setList] = useState([
    {
      text: 'todo 1',
    },
    {
      text: 'todo 2',
    },
  ])
  const [isEnabled, setIsEnabled] = useState(false)
  const [theme, setTheme] = useState({
    backgroundColor: 'grey',
    color: 'black',
  })

  const handleAddToDo = () => {
    if (item.text !== '') {
      setList([...list, item])
      setItem({text: ''})
    }
  }

  const handleDeleteToDo = (index) => {
    const tempArr = [...list]
    tempArr.splice(index,1)
    setList(tempArr)
  }

  const styles = StyleSheet.create({
    masterContainer: {
      height: 'fit-content',
      minHeight: '100vh',
      display: 'flex',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
      backgroundColor: theme.backgroundColor,
      paddingVertical: 10,
      transition: '1s',
    },
    container: {
      width: '90%',
      minWidth: '50%',
      height: 'fit-content',
      display: 'flex',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
      backgroundColor: theme.backgroundColor,
      padding: '20px',
      transition: '1s',
      border: '1px solid rgb(173,0,0)',
      borderRadius: '10px',
    },
    text: {
      color: theme.color,
      width: '100%',
    },
    input: {
      backgroundColor: '#fff',
      border: '1px solid black',
      borderRadius: '10px',
      padding: '10px',
    },
    btn: {
      backgroundColor: '#fff',
      borderColor: '#fff',
      padding: '10px',
      borderRadius: '10px',
    },
    list: {
      width: '100%',
      height: 'fit-content',
    },
    item: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    deleteButton: {
      width: 30,
      height: 30,
      backgroundColor: 'rgb(100, 0, 0)',
      borderColor: 'rgb(200,0,0)',
      color: 'rgb(200,0,0)',
      borderWidth: 2,
      padding: '5px',
      borderRadius: '50px',
      justifyContent: 'center',
      alignItems: 'center',
    }
  });

  return (
    <SafeAreaView style={styles.masterContainer}>
      <View style={styles.container}>
        <Text style={styles.text} >Your name is: {name}</Text>
        <TextInput 
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>To-Do List:</Text>
        <FlatList 
          style={styles.list}
          data={list}
          renderItem={({item, index}) => {
            return (
              <ToDoItem 
                key={index}
                styles={styles}
                title={item.text}
                index={index}
                handleDeleteToDo={handleDeleteToDo}
              />
            )
          }}
        />
        <TextInput 
          onChange={(e) => setItem({text: e.target.value})}
          style={styles.input}
          value={item.text}
        />
        <Pressable 
          style={styles.btn}
          onPress={() => handleAddToDo()}
        >
          <Text>Add To-Do</Text>
        </Pressable>

      </View>
      <View style={styles.container}>
        <Text style={styles.text}>Toggle {!isEnabled ? 'Dark' : 'Light'} Mode</Text>
        <Switch 
          value={isEnabled}
          onValueChange={() => {
            setIsEnabled(!isEnabled)
            if (theme.backgroundColor === 'grey') {
              setTheme({...theme, backgroundColor: 'black', color: 'white'})
            } else {
              setTheme({...theme, backgroundColor: 'grey', color: 'black'})
            }
          }}
        />
      </View>
    </SafeAreaView>
  );
}

