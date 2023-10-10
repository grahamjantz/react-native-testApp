import { useState } from 'react';
import { Button, FlatList, StyleSheet, Switch, Text, View } from 'react-native';
import { TextInput } from 'react-native-web';
import ToDoItem from './components/ToDoItem/ToDoItem';

export default function App() {

  const [name, setName] = useState('')
  const [item, setItem] = useState({key: ''})
  const [list, setList] = useState([])
  const [isEnabled, setIsEnabled] = useState(false)
  const [theme, setTheme] = useState({
    backgroundColor: 'grey',
    color: 'black',
  })

  console.log(list)

  const styles = StyleSheet.create({
    masterContainer: {
      height: 'fit-content',
      display: 'flex',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
      backgroundColor: theme.backgroundColor,
      padding: '20px',
      transition: '1s',
    },
    container: {
      width: '50%',
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
    },
    input: {
      backgroundColor: '#fff',
      border: '1px solid black',
      borderRadius: '10px',
      padding: '10px',
    }
  });
  return (
    <View style={styles.masterContainer}>
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
          data={list}
          renderItem={({item}) => {
            return (
              <ToDoItem 
                styles={styles}
                title={item.key}
              />
            )
          }}
        />
        <TextInput 
          onChange={(e) => setItem({key: e.target.value})}
          style={styles.input}
          value={item.key}
        />
        <Button 
          title='Add To-Do'
          onPress={() => {
            setList([...list, item])
            setItem({key: ''})
          }}
        />

      </View>
      <View style={styles.container}>
        <Text style={styles.text}>Toggle {isEnabled ? 'Dark' : 'Light'} Mode</Text>
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
    </View>
  );
}

