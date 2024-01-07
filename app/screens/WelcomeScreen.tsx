import MaskedView from "@react-native-masked-view/masked-view"
import { AnimatedLogo } from "app/components/WelcomeScreen/AnimatedLogo"
import { AnimatedWorld } from "app/components/WelcomeScreen/AnimatedWorld"
import { LinearGradient } from "expo-linear-gradient"
import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { Text, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import { AppStackScreenProps } from "../navigators"

import { typography } from "../theme"

interface WelcomeScreenProps extends AppStackScreenProps<"Welcome"> {}

export const WelcomeScreen: FC<WelcomeScreenProps> = observer(function WelcomeScreen(_props) {
  return (
    <View style={$container}>
      <LinearGradient
        colors={["rgba(0,236,253,255)", "rgba(1,186,255,255)", "rgba(0,236,253,255)"]}
        style={$gradientBg}
      />
      <View style={$topContainer}>
        <AnimatedLogo />
        <AnimatedWorld />
        <MaskedView style={$maskedContainer} maskElement={<View style={$bottomContainer}></View>}>
          <LinearGradient
            colors={["rgba(255,230,51,255)", "rgba(251,162,2,255)"]}
            style={$bottomGradientBg}
          />
          <TouchableOpacity
            style={$touchAble}
            onPress={() => {
              _props.navigation.navigate("Home")
            }}
          >
            <Text style={$buttonTextStyle}>Let's Go</Text>
          </TouchableOpacity>
        </MaskedView>
      </View>
    </View>
  )
})

const $container: ViewStyle = {
  flex: 1,
}

const $gradientBg: ViewStyle = {
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
}

const $topContainer: ViewStyle = {
  flex: 1,
  justifyContent: "space-between",
}

const $bottomContainer: ViewStyle = {
  backgroundColor: "red",
  width: "100%",
  height: 200,
  paddingLeft: 50,
  paddingRight: 50,
  borderTopLeftRadius: 30,
  borderTopStartRadius: 200,
  borderTopRightRadius: 30,
  borderTopEndRadius: 200,
  position: "relative",
  overflow: "hidden",
  paddingBottom: 50,
  display: "flex",
  justifyContent: "center",
}

const $maskedContainer: ViewStyle = {
  width: "100%",
  height: 125,
  paddingTop: 50,
}

const $bottomGradientBg: ViewStyle = {
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
}

const $buttonTextStyle: TextStyle = {
  color: "#fff",
  fontSize: 21,
  lineHeight: 28,
  fontFamily: typography.primary.medium,
  padding: 10,
}

const $touchAble: ViewStyle = {
  backgroundColor: "rgba(0,182,252,255)", // Example color; use the exact hex color from the image
  borderRadius: 100, // Adjust as needed to match the button's curvature
  shadowColor: "rgba(1,94,227,255)", // Example shadow color
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 1,
  shadowRadius: 4,
  elevation: 5,
  alignItems: "center", // Center the text inside the button
  justifyContent: "center", // Center the text vertically
  borderWidth: 0,
  padding: 0,
  margin: 0,
  width: "60%",
  marginLeft: "20%",
}
