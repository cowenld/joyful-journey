import React, { useEffect } from "react"
import { Image, ImageStyle } from "react-native"
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated"

const welcomeLogo = require("../../../assets/images/logoNew.png")

export function AnimatedLogo() {
  // Shared values for animation
  const posX = useSharedValue(0)
  const posY = useSharedValue(0)

  // Circular motion animation
  const moveLogo = () => {
    // Random position within a range (adjust range as needed)
    posX.value = withTiming(Math.random() * 20, { duration: 9000, easing: Easing.linear })
    posY.value = withTiming(Math.random() * 20, { duration: 9000, easing: Easing.linear })

    // Schedule the next move
    setTimeout(moveLogo, 1000)
  }

  // Start the animation when the component mounts
  useEffect(() => {
    moveLogo()
  }, [])

  // Animated styles
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: posX.value }, { translateY: posY.value }],
    }
  })

  return (
    <Animated.View style={[animatedStyle, $welcomeLogo]}>
      <Image style={$welcomeLogo} source={welcomeLogo} resizeMode="contain" />
    </Animated.View>
  )
}

const $welcomeLogo: ImageStyle = {
  height: 300,
  width: "100%",
}
