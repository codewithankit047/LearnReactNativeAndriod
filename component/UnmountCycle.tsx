import React, { useEffect, useState } from 'react'
import { Button, Text, View } from 'react-native'

const UnmountCycle = () => {
    const [show, setshow] = useState(true)
    const OnToggle =()=>{
        setshow(!show)
    }

  return (
  <>
  <View> 

    <Text style={{fontSize:35,textAlign:'center'}}>UeEffect For Unmount Componenet</Text>
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

export default UnmountCycle;
const User=()=>{

    useEffect(() => {
   return()=>{
    console.warn("useEffect called")
   }
    }, [])
    return(
        <View>
            <Text style={{fontSize:35,textAlign:'center'}} >User Component</Text>
        </View>
    )
}