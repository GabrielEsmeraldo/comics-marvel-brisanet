import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'
import { GoogleMapsContainer } from '../styles/GoogleMaps'
import { Marker } from '@react-google-maps/api';

export function GoogleMaps() {

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyD4342M7Ws-3hGAfI-5_7WPpSKrQerduNk"
  })

  return (
    <GoogleMapsContainer >
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '100%' }}
          center={{
            lat: -7.220936637730521,
            lng: -39.32836552190287
          }}
          zoom={20}
        >
          <Marker position={{ lat: -7.220936637730521, lng: -39.32836552190287 }} draggable={true} />
        </GoogleMap>
      ) : <></>}
    </GoogleMapsContainer>
  )
}