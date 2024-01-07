import React, { useEffect } from "react"
import { Image, ImageStyle, View, ViewStyle } from "react-native"
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated"

const world = require("../../../assets/images/world.png")

export function AnimatedWorld() {
  const rotation = useSharedValue(0)

  // Start the rotation animation when the component mounts
  useEffect(() => {
    rotation.value = withRepeat(
      withTiming(360, { duration: 18000, easing: Easing.linear }),
      -1,
      false,
    )
  }, [])

  // Animated styles for rotation
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotateZ: `${rotation.value}deg` }],
      alignItems: "center",
      justifyContent: "center",
    }
  })

  return (
    <View style={$viewStyle}>
      <Animated.View style={animatedStyle}>
        <Image style={$world} source={world} resizeMode="contain" />
      </Animated.View>
    </View>
  )
}

const $viewStyle: ViewStyle = {
  marginBottom: -75,
}

const $world: ImageStyle = {
  height: 200,
  width: "100%",
}
