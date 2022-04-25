import React from 'react';
import ExperienceCard from "./ExperienceCard";
import {
    Container,
    Row,
    Jumbotron
} from "react-bootstrap";

const Experience = ({experiences}) => {
    return (  
        <div id="experiences">
                <hr/>
            <section  className='d-flex justify-content-center'>
                <Container className="text-center bg-white">
                    <Jumbotron fluid className='card'>
                        <h2 className="display-4 mb-5 text-center">
                            {experiences.heading}
                        </h2>
                        <Row>
                            {
                                experiences.data.map(data => {
                                    return <ExperienceCard key={data.company} data={data} />
                                })
                            }
                        </Row>
                    </Jumbotron>
                </Container>

            </section> 
        </div>
    );
}
 
export default Experience;