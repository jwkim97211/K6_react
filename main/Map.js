import React from 'react'
import { useEffect } from 'react'

export default function Map() {

  const { kakao } = window;

  useEffect(() => {
    const container = document.getElementById('map');
    const options = { center: new kakao.maps.LatLng(35.15774, 129.059084), level: 4 };
    const map = new kakao.maps.Map(container, options);
    var markerPosition = new kakao.maps.LatLng(35.15774, 129.059084)
    var marker = new kakao.maps.Marker({
      position: markerPosition
    });
    marker.setMap(map);
  }, [])

  return (
    <div className='w-1/6'>
      <div id="map" className="w-full h-full rounded-xl"></div>
    </div>
  )
}
