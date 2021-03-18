import React, { useRef, useEffect, useState } from "react"
import mapboxgl from "mapbox-gl"
import "mapbox-gl/dist/mapbox-gl.css"
import styled from "styled-components"
import { Container } from "../../layoutComponents"

const mapContainerStyle = {
  width: "100%",
  height: "400px",
}


const ProjectMap = ({lat,lon, name,mapPointImage}) => {
  const mapContainerRef = useRef(null)
  
  const [map, setMap] = useState(null)
  

  useEffect(() => {
    if (typeof window !== `undefined`) {
      setTimeout(function(){
        const map = new mapboxgl.Map({
          container: mapContainerRef.current,
          accessToken: process.env.MAPBOX_TOKEN,
          style: "mapbox://styles/mapbox/light-v10",
          // Empire State Building [lng, lat]
          center: [lon, lat],
          zoom: 10,
        })
        map.addControl(new mapboxgl.NavigationControl(), "top-right")
        var el = document.createElement('div');
        el.className = 'marker';
        setMap(map)
        new mapboxgl.Marker(el)
          .setLngLat([lon, lat])
          .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
          .setHTML(`<img src=${mapPointImage.src}></img><span>` + name + `</span>`))
          .addTo(map);
        return () => map.remove()
      },2000)
    }
    
    
  }, [])
 

  return (
    <Container>
      <MapContainer ref={mapContainerRef} style={mapContainerStyle} />
    </Container>
  )
   
}

export default ProjectMap

const MapContainer = styled.div`
  max-width:70%;
  margin-bottom:32px;
  .marker {
    background-image: url('/mapbox-icon.png');
    background-size: cover;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
  }
  .mapboxgl-popup-content {
    padding:16px !important;
    display:flex;
    flex-direction:column;
    font-family:Lato;
    img {
      margin-bottom:12px !important;
    }
    .mapboxgl-popup-close-button {
      outline:none !important;
      border:none !important;
      :hover {
        background-color:white !important;
      }
    }
  }
  
`



