import React from 'react'
import {Card, Button, CardImg, CardTitle, CardText, CardDeck, CardBody, Col } from 'reactstrap';
import gambarku from './gambarku.jpg'

class AlbumBlog extends React.Component{
    render(){
        console.log(this.props)
        return(
            <React.Fragment>
                <CardDeck>
                {this.props.album.map(data => {
                    return(
                        <Col md="3">
                            <Card>
                                <CardImg top width="100%" src={gambarku} />
                                <CardBody>
                                    <CardTitle><h6>{data.title}</h6></CardTitle>
                                    <CardText>{data.body}</CardText>
                                    <Button color="primary">Edit</Button>{' '}
                                    <Button onClick={() => this.props.handleButtonDelete(data.id)} color="danger">Delete</Button>
                                </CardBody>
                            </Card>
                        </Col>
                    )
                })}
                
                </CardDeck>

                
            </React.Fragment>
        )
    }
}

export default AlbumBlog