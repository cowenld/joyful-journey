import React, { FC, useEffect, useState } from "react"
import * as Location from "expo-location"
import { Text, View } from "react-native"
// import { useStores } from "app/models"

interface PermissionsProps {
  children: React.ReactNode
}

export const Permissions: FC<PermissionsProps> = ({ children }) => {
  const [locationStatus, setLocationStatus] = useState({
    hasCheckedLocationPermission: false,
    hasGivenLocationPermission: false,
  })

  useEffect(() => {
    ;(async () => {
      const { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== "granted") {
        setLocationStatus({
          hasCheckedLocationPermission: true,
          hasGivenLocationPermission: false,
        })
      } else {
        setLocationStatus({
          hasCheckedLocationPermission: true,
          hasGivenLocationPermission: true,
        })
      }
    })()
  }, [])

  return (
    <>
      {locationStatus.hasGivenLocationPermission ? children : <Text>Fetching Permissions...</Text>}
    </>
  )
}
