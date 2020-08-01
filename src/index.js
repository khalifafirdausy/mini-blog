import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import {Container, Col } from 'reactstrap'

import FormBlog from './formBlog'
import AlbumBlog from './albumBlog'

class App extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Container>
                    <FormBlog />
                    <AlbumBlog />
                </Container>
            </React.Fragment>
        )
    }
}

ReactDOM.render( <App />, document.querySelector("#root"));