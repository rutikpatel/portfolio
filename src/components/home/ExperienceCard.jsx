import React from 'react';

import { 
    Col,
    Card,
    Row
 } from "react-bootstrap";
const ExperienceCard = ({data}) => {
    return ( 
        <Col style={{justifyContent:'space-between'}}>
            <div className="pb-5 text-center">
                <p className='h4'>{data.name}</p>
                <p className="lead">
                    {data.role}
                    <br/>
                    {data.date}
                </p>
                
            </div>
        </Col>
     );
}
 
export default ExperienceCard;