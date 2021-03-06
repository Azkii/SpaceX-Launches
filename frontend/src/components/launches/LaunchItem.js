import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
function LaunchItem({launch:{flight_number,mission_name,launch_date_local,launch_success}}) {
    return (
        <div className="card card-body mb-3">
            <div className="row">
                <div className="col-md-9">
                    <h4 style={launch_success === null ? {color:'gray'} : launch_success ? {color:"green"} : {color:"red"}} >Mission: {mission_name}</h4>
                    <p><Moment format="YYYY-MM-DD HH:MM">{launch_date_local}</Moment></p>
                </div>
                <div className="col-md-3">
                    <Link to={`/launch/${flight_number}`} className="btn btn-secondary">Launch details</Link>
                </div>
            </div>
        </div>
    )
}

export default LaunchItem
