import React from 'react';
import { View, Text } from 'react-native';
import { Item, Input, Label, Button, Header, Left, Icon, Body, Title, Right } from 'native-base';

const SignUpScreen =()=>{
   return(
       <View style={{padding: 0}}>
         <Header span>
          <Left>
          </Left>
          <Body>
            <Title>Create Account</Title>
          </Body>
          <Right />
        </Header>
           <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input />
            </Item>
            <Button block style={{justifyContent:'center', padding:20}}>
            <Text>Primary</Text>
          </Button> 

       </View>
   )
}

export default SignUpScreen;