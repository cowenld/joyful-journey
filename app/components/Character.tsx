import React from "react"
import { Image, ImageStyle, View, ViewStyle } from "react-native"
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  useAnimatedReaction,
} from "react-native-reanimated"

const world = require("../../assets/images/world.png")

export const Character = () => {
  const rotation = useSharedValue(0)

  useAnimatedReaction(
    () => true,
    () => {
      rotation.value = withRepeat(withTiming(360, { duration: 2000 }), -1, true)
    },
    [],
  )

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
  width: 50,
  height: 50,
}

const $world: ImageStyle = {
  height: 50,
  width: 50,
}
