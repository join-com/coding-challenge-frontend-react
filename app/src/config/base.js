// settings configured here will be merged into the final config object.
export default {
  endpoint: 'https://bikewise.org:443/api/v2/',
  mapbox: {
    accessToken:
      'pk.eyJ1Ijoic2hhaHphaWJhbGlraGFuIiwiYSI6ImNqcXR0b25vejBkZHo0MnJ4ZzZhbnpqNHgifQ.XP6QCkFS4OFbRVMi72t1fw',
    containerStyle: {
      height: '300px',
      width: '40%'
    },
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 15
  }
}
