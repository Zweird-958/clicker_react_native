import React from 'react';
import { withExpoSnack } from 'nativewind';

import { Text, View } from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View)
const StyledText = styled(Text)

const ITEMS = [
  {title: "Adresse", value: "23 rue henri barbusse"},
  {title: "Tel", value: "06 05 88 05 08"},
]

const Home = () => {
  for (let userObject of ITEMS) {
    console.log(userObject);
  }
  return (
    <><StyledView className="h-1/3 bg-blue-300 flex-1 items-center justify-center">
        <StyledView className="w-32 h-32 bg-red-600 rounded-full"></StyledView>
        <StyledText className="text-center mt-5 text-white text-lg">HAMEL Julien</StyledText>
    </StyledView>
    <StyledView className="h-2/3 bg-slate-600">
      <StyledView className="m-10">
        {ITEMS.map(element => 
            <>
            <StyledText className="text-white text-xl font-bold w-fit border-b-2 self-start border-blue-500">{element.title}</StyledText>
            <StyledText className="text-white text-sm">{element.value}</StyledText>
            </> 
          )
        }  
      </StyledView>  
    </StyledView></>
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
