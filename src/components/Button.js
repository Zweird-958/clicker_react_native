import { styled } from "nativewind";
import { Pressable, Text, Animated } from "react-native";
const StyledText = styled(Animated.Text);
const StyledPressable = styled(Pressable);

const MainButton = (props) => {
  // Initiation de la valeur
  const animatedButtonScale = new Animated.Value(1);

  // Button pressé
  const onPressIn = () => {
    Animated.spring(animatedButtonScale, {
      toValue: 1.5,
      useNativeDriver: true,
    }).start();
  };

  // Button non pressé
  const onPressOut = () => {
    Animated.spring(animatedButtonScale, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  // CSS de l'animation
  const animatedScaleStyle = {
    transform: [{ scale: animatedButtonScale }],
  };

  return (
    <StyledPressable
      className={`px-4 py-2 rounded-lg ${props.className} m-5`}
      onPress={props.onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
     

    >
      <StyledText
        className="text-white text-xl uppercase"
        style={animatedScaleStyle}
        
      >
        {props.children}
      </StyledText>
    </StyledPressable>
  );
};

export default MainButton;
