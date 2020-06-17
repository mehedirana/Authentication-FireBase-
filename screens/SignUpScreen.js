import React from 'react';
import { View, Text } from 'react-native';
import { Item, Input, Label, Button } from 'native-base';

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
            <Button rounded>
            <Text>Primary</Text>
          </Button> 

       </View>
   )
}

export default SignUpScreen;