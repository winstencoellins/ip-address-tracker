import React from 'react'
import './Information.css'

function Information(props) {
  return (
    <div className="information">
        <div className="informationContainer">
            <div className="informationHolder">
                <p className="title">IP ADDRESS</p>
                <p className="content">{props.ip}</p>
            </div>
            <hr />
            <div className="informationHolder">
                <p className="title">LOCATION</p>
                <p className="content">{props.city}, {props.region} {props.zipCode}</p>
            </div>
            <hr />
            <div className="informationHolder">
                <p className="title">TIMEZONE</p>
                <p className="content">UTC {props.timezone}</p>
            </div>
            <hr />
            <div className="informationHolder">
                <p className="title">ISP</p>
                <p className="content">{props.isp}</p>
            </div>
        </div>
    </div>
  )
}

export default Information