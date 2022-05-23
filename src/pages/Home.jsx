import React from 'react';
import { Container, Row, Col, Button, Figure } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import imageMain from '../img/man-with-magnifying-glass-over-white-background.jpg';

const Home = () => {
    return (
        <div>
            <Container className="common-container">
                <Row>
                    <Col>
                        <h2>Encuentre su proximo empleo</h2>
                        <p className="secondary-container">
                            Sabemos porque esta aquí, y lo ayudaremos a ello.
                        </p>
                        <Link to={'/trabajos'} className="btn btn-primary" variant="info">
                            Ofertas disponibles
                        </Link>
                    </Col>
                    <Col>
                        <Container className="mx-auto my-auto">
                            <Figure>
                                <Figure.Image
                                    className="center-block"
                                    width={400}
                                    height={400}
                                    alt="171x180"
                                    src={imageMain}
                                />
                            </Figure>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;
