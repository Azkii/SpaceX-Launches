import React from 'react'
import { gql, useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

const LAUNCH_QUERY = gql`
    query LaunchQuery($flight_number: Int!) {
        launch(flight_number: $flight_number) {
            flight_number
            mission_name
            launch_year
            launch_date_local
            launch_success
            rocket {
                rocket_id
                rocket_name
                rocket_type
            }
        }
    }
`;

function Launch(props) {
    let { flight_number } = props.match.params;
    flight_number = parseInt(flight_number);
    const { loading, error, data } = useQuery(LAUNCH_QUERY, {
        variables: {flight_number : flight_number}
    });
    if (error) return `Error! ${error}`;
    if (loading) return 'Loading...';
    const { mission_name,launch_year,launch_date_local,launch_success,rocket:{rocket_id,rocket_name,rocket_type} } = data.launch;

    if (data) return (
        <div style={{width:"80%",margin: "auto"}}>
            <h1 className="display-4 my-3">
                <span className="text-dark">Mission: </span>
                {mission_name}
            </h1>
            <h4 className="my-3">Launch details</h4>
            <ul className="list-group">
                <li className="list-group-item">Flight number: {flight_number}</li>
                <li className="list-group-item">launch year: {launch_year}</li>
                <li className="list-group-item">launch date: {launch_date_local}</li>
                <li className="list-group-item">launch success: {launch_success === null ?
                    <span>No informations</span>
                    : 
                    launch_success ?
                        <span style={{color: "green"}}>completed</span>
                        :
                        <span style={{color: "red"}}>failed</span>
                    }
                </li>
            </ul>
            <h4 className="my-3">Rocket details</h4>
            <ul className="list-group">
                <li className="list-group-item">rocket name: {rocket_name}</li>
                <li className="list-group-item">rocket type: {rocket_type}</li>
            </ul>
            <br />
            <Link className="btn btn-secondary" to={"/"} >Back</Link>
        </div>
    )
}

export default Launch
