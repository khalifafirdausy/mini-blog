import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import {Container, Col } from 'reactstrap'

import FormBlog from './formBlog'
import AlbumBlog from './albumBlog'
import LearnState from './learnState'

class App extends React.Component{
    state = {
        album: []
    }

    componentDidMount(){
        this.setState({
            album: [
                {
                    id: 1,
                    title: "Title 1",
                    body: "Ini Body 1342"
                }, {
                    id: 2,
                    title: "Title 2",
                    body: "Ini Body 1234"
                }, {
                    id: 3,
                    title: "Title 3",
                    body: "Ini Body 1234"
                }, {
                    id: 4,
                    title: "Title 4",
                    body: "Ini Body 1234123"
                },
            ]
        })
    }

    clickSubmit = () => {
        console.log("clicked!!!")
    }

    render(){
        return(
            <React.Fragment>
                <Container>
                    <FormBlog onClickSubmit={this.clickSubmit} />
                    <AlbumBlog album={this.state.album} />
                    {/* <LearnState /> */}
                </Container>
            </React.Fragment>
        )
    }
}

ReactDOM.render( <App />, document.querySelector("#root"));