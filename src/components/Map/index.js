import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react'

import { setEletronics, setEletronic } from '../../redux/modules/eletronics'

export const MapContainer = props => {
  const dispatch = useDispatch()
  const { eletronics } = useSelector(state => state.eletronics)
  const [map, setMap] = useState(null)
  const { google, query, placeId } = props

  useEffect(() => {
    if (query) {
      searchByQuery(query)
    }
  }, [query])

  useEffect(() => {
    if (placeId) {
      getEletronicById(placeId)
    }
  }, [placeId])

  function getEletronicById(placeId) {
    const service = new google.maps.places.PlacesService(map)
    dispatch(setEletronic(null))
    const request = {
      placeId,
      fields: [
        'name',
        'opening_hours',
        'formatted_address',
        'formatted_phone_number'
      ]
    }

    service.getDetails(request, (place, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK)
        dispatch(setEletronic(place))
    })
  }

  function searchByQuery(query) {
    const service = new google.maps.places.PlacesService(map)
    dispatch(setEletronics([]))

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
    dispatch(setEletronics([]))

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
      {...props}
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
