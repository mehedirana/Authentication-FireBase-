import React from 'react';
import { View, Text } from 'react-native';
import { Item, Input, Label } from 'native-base';

const SignUpScreen =()=>{
   return(
       <View style={{padding: 10}}>
           <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item> 

       </View>
   )
}

export default SignUpScreen;