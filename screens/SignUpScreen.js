import React from 'react';
import { View, Text, KeyboardAvoidingView } from 'react-native';
import { Item, Input, Label, Button, Header, Left, Icon, Body, Title, Right } from 'native-base';

const SignUpScreen = () => {
  return (
    <KeyboardAvoidingView >
      <Header span>
        <Left>
        </Left>
        <Body>
          <Title style={{ fontSize: 18, fontWeight:'bold'}}>Create Account</Title>
        </Body>
        <Right />
      </Header>

      <View style={{flexDirection:"column", padding:15}}>

        <Item floatingLabel style={{borderBottomColor:'blue', padding:5}}>
          <Label>Username</Label>
          <Input />
        </Item>

        <Item floatingLabel style={{borderBottomColor:'blue', padding:5}} >
          <Label>Password</Label>
          <Input />
        </Item>

        <Button block  style={{ justifyContent: 'center',}}>
          <Text style={{color:'white', fontWeight:'bold'}}>sign up</Text>
        </Button>

      </View>
    </KeyboardAvoidingView>
  )
}

export default SignUpScreen;