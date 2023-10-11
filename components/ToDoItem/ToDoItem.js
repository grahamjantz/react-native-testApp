// import CheckBox from '@react-native-community/checkbox'
import React, { useState } from 'react'
import { View, Text, Pressable } from 'react-native'
import BouncyCheckbox from 'react-native-bouncy-checkbox'

const ToDoItem = ({
  styles,
  title,
  index,
  handleDeleteToDo,
}) => {

  const [isCompleted, setIsCompleted] = useState(false)


  return (
    <View style={styles.item}>
      {/* <CheckBox 
        disabled={false}
        value={isCompleted}
        onValueChange={() => setIsCompleted(!isCompleted)}
      /> */}
      <BouncyCheckbox 
        style={{width: '80%'}}
        onPress={() => setIsCompleted(!isCompleted)} 
        text={title}
        textStyle={styles.text}   
        fillColor='green'  
      />
      <Pressable 
        style={styles.deleteButton}
        onPress={() => handleDeleteToDo(index)}
      >
        <Text>X</Text>
      </Pressable>
    </View>
  )
}

export default ToDoItem