import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import {Container, Col } from 'reactstrap'

import FormBlog from './formBlog'
import AlbumBlog from './albumBlog'
import LearnState from './learnState'

import axios from 'axios'

class App extends React.Component{
    state = {
        album: []
    }

    componentDidMount(){
        // this.setState({
        //     album: [
        //         {
        //             id: 1,
        //             title: "Title 1",
        //             body: "Ini Body 1342"
        //         }, {
        //             id: 2,
        //             title: "Title 2",
        //             body: "Ini Body 1234"
        //         }, {
        //             id: 3,
        //             title: "Title 3",
        //             body: "Ini Body 1234"
        //         }, {
        //             id: 4,
        //             title: "Title 4",
        //             body: "Ini Body 1234123"
        //         },
        //     ]
        // })

        this.getDataToAPI()
    }

    clickSubmit = () => {
        console.log("clicked!!!")
    }

    getDataToAPI = () => {
        console.log("Ambil API GET")

        axios.get("http://localhost:3004/blog").then(res => {
            // console.log(res)

            this.setState({album : res.data})
        })
    }

    // Delete
    deleteDataToAPI = (id) => {
        axios.delete(`http://localhost:3004/blog/${id}`).then(res => {
            console.log(res)
            this.getDataToAPI()
        })
    }

    handleButtonDelete = (id) => {
        this.deleteDataToAPI(id)
    }

    render(){
        return(
            <React.Fragment>
                <Container>
                    <FormBlog onClickSubmit={this.clickSubmit} />
                    <AlbumBlog handleButtonDelete={this.handleButtonDelete} album={this.state.album} />
                    {/* <LearnState /> */}
                </Container>
            </React.Fragment>
        )
    }
}

ReactDOM.render( <App />, document.querySelector("#root"));