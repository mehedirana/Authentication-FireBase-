import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';

const SignUpScreen =()=>{
   return(
       <View>
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