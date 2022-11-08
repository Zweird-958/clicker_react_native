import React, { useContext } from "react";
import { styled } from "nativewind";
import { View, Text } from "react-native";
import RowText from "./RowText";
import MainButton from "./Button";
import { StateContext } from "../contexts/StateContext";
const StyledText = styled(Text);
const StyledView = styled(View);

const RowBody = (props) => {
  const items = props.items;

  const { buyItem } = useContext(StateContext);

  return (
    <StyledView className="self-stretch flex-1 flex-row">
      <RowText>{items.name}</RowText>
      <RowText>{items.cps}</RowText>
      <RowText>{items.cpc}</RowText>
      <RowText>{items.price}</RowText>
      <RowText>{items.owned}</RowText>
      <RowText>
        <MainButton
          className="bg-green-500"
          onPress={() => {
            buyItem(props.index);
          }}
        >
          BUY
        </MainButton>
      </RowText>
      {/* </>
      ))} */}
    </StyledView>
  );
};
export default RowBody;
