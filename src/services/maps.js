let gMapsPromise;
const loadGoogleMapsAPI = () => {
  if (!gMapsPromise) {
    gMapsPromise = new Promise((resolve, reject) => {
      const tag = document.createElement('script');
      tag.src = `https://maps.googleapis.com/maps/api/js?key=${
        process.env.REACT_APP_GMAPS_API_KEY
      }`;
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      tag.onload = () => initSuccess();
      tag.onreadystatechange = () => {
        if (this.readyState === 'complete') {
          initSuccess();
        }
      };
      tag.onerror = e => initError(e);

      function initError(e) {
        console.log('Error loading maps', e);
        reject(e);
      }

      function initSuccess() {
        resolve();
      }
    });
  }
  return gMapsPromise;
};

export const setGoogleMapsMarker = async (el, position) => {
  await loadGoogleMapsAPI();
  const map = new window.google.maps.Map(el, {
    center: position,
    zoom: 14
  });
  new window.google.maps.Marker({ position: position, map: map });
};
