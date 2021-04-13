import React from 'react'
import { gql, useQuery } from '@apollo/client';
import LaunchItem from './LaunchItem';


const LAUNCHES_QUERY = gql`
    query LaunchesQuery {
        launches {
            flight_number
            mission_name
            launch_date_local
            launch_success
        }
    }
`;

function Launches() {
    const { loading, error, data } = useQuery(LAUNCHES_QUERY);
    if (error) return `Error! ${error}`;
    if (loading) return 'Loading...';
    return (
        <div style={{width:"80%",margin: "auto"}}>
            <h1 className="display-4 my-3">Launches</h1>
            {data.launches?.map((launch,index) => {
                return <LaunchItem key={`${launch.flight_number}-${index}`} launch={launch} />
            })}
        </div>
    )
}

export default Launches
