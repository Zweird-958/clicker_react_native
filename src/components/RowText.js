import { styled } from "nativewind";
import React from "react";
import { Text } from "react-native";
const StyledText = styled(Text);

const RowText = (props) => {
  return (
    <StyledText className="text-center border-2 w-80 flex-1 self-stretch">
      {props.children}
    </StyledText>
  );
};
export default RowText;