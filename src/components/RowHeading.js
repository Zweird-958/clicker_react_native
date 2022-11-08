import React from "react";
import { styled } from "nativewind";
import { View, Text } from "react-native";
import RowText from "./RowText"
const StyledText = styled(Text);
const StyledView = styled(View);

const RowHeading = (props) => {
  return (
    <StyledView className="self-stretch flex-1 flex-row">
      {props.items.map((element) => (
        <RowText className="flex-1 self-stretch">{element}</RowText>
      ))}
    </StyledView>
  );
};
export default RowHeading;
