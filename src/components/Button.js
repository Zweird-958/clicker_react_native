import { Button, Pressable, Text, View } from 'react-native';
import { styled } from 'nativewind';
const StyledText = styled(Text)
const StyledPressable = styled(Pressable)

const MainButton =  (props) => {
    return(
        <StyledPressable className={`px-4 py-2 rounded-lg ${props.className} m-5`} onPress={props.onPress} >
            <StyledText className="text-white text-xl uppercase">{props.children}</StyledText>
        </StyledPressable >
    )
}

export default MainButton;