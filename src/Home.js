import React, { useState } from 'react';
import { withExpoSnack } from 'nativewind';

import { Button, Pressable, Text, View } from 'react-native';
import { styled } from 'nativewind';
import MainButton from './components/Button';

const StyledView = styled(View)
const StyledText = styled(Text)
const StyledButton = styled(Button)
const StyledPressable = styled(Pressable)

const INITIAL_STATE = {
  money: 0,
  cps: 0,
  cpc: 1
};

const Home = () => {
  const [state, setState] = useState(INITIAL_STATE);
  const upMoney = () => {
    setState({...state, money: state.money + 1});
  }

  const [store, setStore] = useState(false);
  const toggleStore = () => {
    setStore(!store)
  }
 
  return (
    <>
    <StyledView className="flex-1 items-center justify-center">
      <StyledText>{state.money}</StyledText>
      <StyledText>{state.cpc}</StyledText>
      <StyledText>{state.cps}</StyledText>
    </StyledView>
    <StyledView className="flex-1 items-center justify-center">
      <MainButton className="bg-blue-500" onPress={upMoney}>work</MainButton>
      <MainButton className="bg-green-500" onPress={toggleStore}>store</MainButton>

      <StyledView className={`${store ? "" : "hidden"}`}>
        <StyledText>STORE</StyledText>
      </StyledView>

      <MainButton className="bg-red-500">reset</MainButton>
    </StyledView>
    </>
  );
}

// const styles = StyleSheet.create({
//   .wFit{
//     width: 'fit-content',
//   }
// })

// This demo is using a external compiler that will only work in Expo Snacks.
// You may see flashes of unstyled content, this will not occur under normal use!
// Please see the documentation to setup your Homelication
export default withExpoSnack(Home);
