// import CheckBox from '@react-native-community/checkbox'
import React, { useState } from 'react'
import { View } from 'react-native'
import BouncyCheckbox from 'react-native-bouncy-checkbox'

const ToDoItem = ({
  styles,
  title,
}) => {
  console.log(title)

  const [isCompleted, setIsCompleted] = useState(false)

  return (
    <View>
      {/* <CheckBox 
        disabled={false}
        value={isCompleted}
        onValueChange={() => setIsCompleted(!isCompleted)}
      /> */}
      <BouncyCheckbox 
        onPress={() => setIsCompleted(!isCompleted)}      
      />
      <Text style={styles.text}>todo</Text>
    </View>
  )
}

export default ToDoItem