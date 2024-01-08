import React, { FC, useEffect, useRef } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, StyleSheet, View } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Screen } from "app/components"
import MapView, { Camera, Marker } from "react-native-maps"
import * as Location from "expo-location"
import { Permissions } from "app/guards/permissions"
import { Character } from "app/components/Character"
// import { useStores } from "app/models"

interface HomeScreenProps extends AppStackScreenProps<"Home"> {}

export const HomeScreen: FC<HomeScreenProps> = observer(function HomeScreen() {
  const mapRef = useRef<MapView>(null)
  const [camera, setCameraLocation] = React.useState<Camera | null>(null)

  useEffect(() => {
    const setCamera = async () => {
      const location = await Location.getCurrentPositionAsync({})

      const camera: Camera = {
        center: {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        },
        pitch: 75,
        heading: 0,
        altitude: 500,
        zoom: 18,
      }

      setCameraLocation(camera)
    }

    setCamera()
  }, [])

  useEffect(() => {
    if (camera && mapRef.current) {
      mapRef.current.animateCamera(camera, { duration: 2000 })
    }
  }, [camera])

  return (
    <Permissions>
      <Screen style={$root}>
        <MapView ref={mapRef} style={styles.map}>
          {camera && (
            <Marker
              coordinate={{
                latitude: camera.center.latitude,
                longitude: camera.center.longitude,
              }}
            >
              <Character />
            </Marker>
          )}
        </MapView>
      </Screen>
    </Permissions>
  )
})

const $root: ViewStyle = {
  flex: 1,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "125%",
  },
})
