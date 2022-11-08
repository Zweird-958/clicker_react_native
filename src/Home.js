import { styled } from "nativewind";
import React, { useContext, useState } from "react";
import { Animated, Button, Pressable, Text } from "react-native";
import MainButton from "./components/Button";
import InfoText from "./components/InfoText";
import Table from "./components/Table";
import { SHOP_HEADING } from "./config";
import { SHOP_ITEMS_BUYABLE } from "./config"
import { StoreContext } from "./contexts/StoreContext";
import { StateContext } from "./contexts/StateContext";

const StyledView = styled(Animated.View);
const StyledText = styled(Text);
const StyledButton = styled(Button);
const StyledPressable = styled(Pressable);



const Home = () => {
  
  const { state, upMoney, resetData, item } = useContext(StateContext);

  // const [item, setItem] = useState(SHOP_ITEMS_BUYABLE);


  const { toggleStore, store} = useContext(StoreContext);

  

  

  return (
    <StyledView>
      <StyledView className="flex justify-between w-full bg-blue-600 py-5 flex-row">
        <InfoText>CPC : {state.cpc}</InfoText>
        <InfoText>${state.money}</InfoText>
        <InfoText>CPS : {state.cps}</InfoText>
      </StyledView>
      <StyledView className="flex-1 items-center justify-center">
        <MainButton className="bg-blue-500" onPress={upMoney}>
          work
        </MainButton>
        <MainButton
          className="bg-green-500"
          onPress={toggleStore}
          style={[{ transform: [{ scale: 2 }] }]}
        >
          store
        </MainButton>


        <Table head={SHOP_HEADING} body={item}/>

        <MainButton className="bg-red-500" onPress={resetData}>
          reset
        </MainButton>
      </StyledView>
    </StyledView>
  );
};

// This demo is using a external compiler that will only work in Expo Snacks.
// You may see flashes of unstyled content, this will not occur under normal use!
// Please see the documentation to setup your Homelication
export default Home;
