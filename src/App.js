import { useState } from 'react';
import './App.css';
import Map from './components/Map';
import Information from './components/Information';

function App() {

  const [input, setInput] = useState('')
  const [ip, setIp] = useState('8.8.8.8')
  const [region, setRegion] = useState('California')
  const [city, setCity] = useState('Mountain View')
  const [lat, setLat] = useState(37.40599)
  const [long, setLong] = useState(-122.078514)
  const [zipCode, setZipCode] = useState("94043")
  const [timezone, setTimezone] = useState("-07:00")
  const [isp, setIsp] = useState("Google LCC")

  let btnStr = ">"

  const getValue = (event) => {
    setInput(event.target.value)
  }

  const URL = 'https://geo.ipify.org/api/v2/country,city?apiKey=at_zh3nbWaCleGplxHkVnMMG6Qp4G3nK'

  const fetchAPI = () => {
    if (input === '') {
      fetch(URL)
        .then(response => response.json())
        .then(data => {
          setIp(data.ip)
          setIsp(data.isp)
          setCity(data.location.city)
          setLat(data.location.lat)
          setLong(data.location.lng)
          setZipCode(data.location.postalCode)
          setTimezone(data.location.timezone)
          setRegion(data.location.region)
        })
    } else {
      var url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_zh3nbWaCleGplxHkVnMMG6Qp4G3nK&ipAddress=${input}`

      fetch(url)
        .then(response => {
          if (response.ok) {
            return response.json()
          }
          throw response
        })
        .then(data => {
          setIp(data.ip)
          setIsp(data.isp)
          setCity(data.location.city)
          setLat(data.location.lat)
          setLong(data.location.lng)
          setZipCode(data.location.postalCode)
          setTimezone(data.location.timezone)
          setRegion(data.location.region)
        }).catch(err => {
          alert(`An error occured. Please enter a valid IPv4 or IPv6 address`);
        })
    }
  }

  return (
    <div className="app">
      {/* Searching */}
      <div className="search">
        <div className="searchContainer">
          <p className="searchTitle">IP Address Tracker</p>
          <div className='textBoxAndButton'>
            <input type="text" placeholder="Search for any IP address or domain" onChange={getValue} className="textbox" />
            <button className="btn" onClick={fetchAPI}>{btnStr}</button>
          </div>
        </div>
        <Information ip={ip} region={region} city={city} zipCode={zipCode} timezone={timezone} isp={isp} />
      </div>

      {/* Map */}
      <Map lat={lat} long={long}/>
    </div>
  );
}

export default App;
