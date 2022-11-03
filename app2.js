import React from 'react';
import { withExpoSnack } from 'nativewind';

import { Text, View } from 'react-native';
import { styled } from 'nativewind';

import Home from "./src/Home.js"

const StyledView = styled(View)
const StyledText = styled(Text)

const ITEMS = [
  {title: "Adresse", value: "23 rue henri barbusse"},
  {title: "Tel", value: "06 05 88 05 08"},
]



const App = () => {
  return (
    <Home />
  );
}

// const styles = StyleSheet.create({
//   .wFit{
//     width: 'fit-content',
//   }
// })

// This demo is using a external compiler that will only work in Expo Snacks.
// You may see flashes of unstyled content, this will not occur under normal use!
// Please see the documentation to setup your application
export default withExpoSnack(App);
