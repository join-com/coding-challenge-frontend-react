import { useState, useEffect } from "react";
import GoogleMapsApiLoader from "google-maps-api-loader";

const useGoogleMap = apiKey => {
  const [googleMap, setGoogleMap] = useState(null);
  useEffect(() => {
    GoogleMapsApiLoader({ apiKey }).then(google => {
      setGoogleMap(google);
    });
  }, []);
  return googleMap;
};

const useMap = ({ googleMap, mapContainerRef, initialConfig }) => {
  const [map, setMap] = useState(null);
  useEffect(
    () => {
      if (!googleMap || !mapContainerRef.current) {
        return;
      }
      const map = new googleMap.maps.Map(
        mapContainerRef.current,
        initialConfig
      );
      const marker = new googleMap.maps.Marker({
        position: initialConfig.center,
        map: map
      });
      const InfoWindow = new googleMap.maps.InfoWindow({
        content: `<div id="content">
                    <button id="onBtn" class="btn btn-sm">
                      test
                    </button>
                  </div>`
      });
      marker.addListener("click", () => {
        InfoWindow.open(map, marker);
      });
      setMap(map);
    },
    [googleMap, mapContainerRef]
  );
  return map;
};

export { useGoogleMap, useMap };
