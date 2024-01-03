import React, { useState } from 'react'
import { Button, Text, View } from 'react-native'

export default function ShowHide() {
    const [show, setshow] = useState(true)
    const OnToggle =()=>{
        setshow(!show)
    }
  return (
   <>
   <View>

    <Text style={{fontSize:35,textAlign:'center'}}>Show Hide Component</Text>
    <Button onPress={()=>{OnToggle()}}  title='Click here'/>
    {
        show ?(<>
        <User/>
        </>) :(<>
        <Text style={{fontSize:35,textAlign:'center',color:'red'}}>Hide Component</Text>
        </>)
    }
   </View>
   </>
  )
}

const User=()=>{
    return(
        <View>
            <Text style={{fontSize:35,textAlign:'center'}} >User Component</Text>
        </View>
    )
}