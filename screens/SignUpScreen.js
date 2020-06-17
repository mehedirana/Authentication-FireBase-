import React from 'react';
import { View, Text, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import { Item, Input, Label, Button, Header, Left, Body, Title, Right } from 'native-base';

const SignUpScreen = ({ navigation }) => {
  return (
    <KeyboardAvoidingView >
      <Header span>
        <Left>
        </Left>
        <Body>
          <Title >Create Account</Title>
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
          <Text style={{color:'white', }}>sign up</Text>
        </Button>

        <TouchableOpacity
        onPress={()=>{navigation.navigate('SignInScreen')}}
        >
          <Text style={{textAlign:'center', padding:10,  fontWeight:'bold'}}>already have an account?</Text>
        </TouchableOpacity>

      </View>
    </KeyboardAvoidingView>
  )
}

export default SignUpScreen;