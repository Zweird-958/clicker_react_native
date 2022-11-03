import { Button, Pressable, Text, View } from "react-native";
import { styled } from "nativewind";
const StyledText = styled(Text);

const InfoText = (props) => {
    return(
        <StyledText style={{color: "white"}} className="mt-5 mx-5 px-3">{props.children}</StyledText>
    )

};

export default InfoText;