import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react'

import { setEletronics } from '../../redux/modules/eletronics'

export const MapContainer = props => {
  const dispatch = useDispatch()
  const { eletronics } = useSelector(state => state.eletronics)
  const [map, setMap] = useState(null)
  const { google, query } = props

  useEffect(() => {
    if (query) {
      searchByQuery(query)
    }
  }, [query])

  function searchByQuery(query) {
    const service = new google.maps.places.PlacesService(map)
    const request = {
      location: map.center,
      radius: '2000',
      type: ['electronics_store'],
      query
    }

    service.textSearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK)
        dispatch(setEletronics(results))
    })
  }

  function searchNearby(map, center) {
    const service = new google.maps.places.PlacesService(map)

    const request = {
      location: center,
      radius: '5000',
      type: ['electronics_store']
    }

    service.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK)
        dispatch(setEletronics(results))
    })
  }

  function onMapReady(_, map) {
    setMap(map)
    searchNearby(map, map.center)
  }

  return (
    <Map
      google={google}
      centerAroundCurrentLocation
      onReady={onMapReady}
      onRecenter={onMapReady}
    >
      {eletronics.map(eletronic => (
        <Marker
          key={eletronic.place_id}
          name={eletronic.name}
          position={{
            lat: eletronic.geometry.location.lat(),
            lng: eletronic.geometry.location.lng()
          }}
        />
      ))}
    </Map>
  )
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  language: 'pt-BR'
})(MapContainer)
