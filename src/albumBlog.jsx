import React from 'react'
import {Card, Button, CardImg, CardTitle, CardText, CardDeck, CardBody, Col } from 'reactstrap';
import gambarku from './gambarku.jpg'

class AlbumBlog extends React.Component{
    render(){
        return(
            <React.Fragment>
                <CardDeck>
                <Col md="3">
                    <Card>
                        <CardImg top width="100%" src={gambarku} />
                        <CardBody>
                            <CardTitle>Title</CardTitle>
                            <CardText>Ini Body</CardText>
                            <Button color="primary">Edit</Button>{' '}
                            <Button color="danger">Delete</Button>
                        </CardBody>
                    </Card>
                </Col>

                <Col md="3">
                    <Card>
                        <CardImg top width="100%" src={gambarku} />
                        <CardBody>
                            <CardTitle>Title</CardTitle>
                            <CardText>Ini Body</CardText>
                            <Button color="primary">Edit</Button>{' '}
                            <Button color="danger">Delete</Button>
                        </CardBody>
                    </Card>
                </Col>

                <Col md="3">
                    <Card>
                        <CardImg top width="100%" src={gambarku} />
                        <CardBody>
                            <CardTitle>Title</CardTitle>
                            <CardText>Ini Body</CardText>
                            <Button color="primary">Edit</Button>{' '}
                            <Button color="danger">Delete</Button>
                        </CardBody>
                    </Card>
                </Col>

                <Col md="3">
                    <Card>
                        <CardImg top width="100%" src={gambarku} />
                        <CardBody>
                            <CardTitle>Title</CardTitle>
                            <CardText>Ini Body</CardText>
                            <Button color="primary">Edit</Button>{' '}
                            <Button color="danger">Delete</Button>
                        </CardBody>
                    </Card>
                </Col>

                </CardDeck>

                
            </React.Fragment>
        )
    }
}

export default AlbumBlog