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
        tempForm: {
            "id": 1,
            "title": "",
            "body": ""
        },
        album: [],
        isEdit: false
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

    handleChangeForm = (event) => {
        let newForm = {...this.state.tempForm}

        // tempForm: {
        //     "id": 1,
        //     "title": "",
        //     "body": ""
        // }
        // console.log("before", newForm)
        if(this.state.isEdit == false){
            newForm["id"] = Date.now();
        }

        newForm[event.target.name] = event.target.value

        // tempForm: {
        //     "id": 1,
        //     "title": "a",
        //     "body": ""
        // }
        // console.log("after", newForm)

        this.setState({tempForm: newForm}, () => {
            // console.log(this.state.tempForm)
        })

        // console.log(event.target.value)
        // console.log(event.target)
    }

    getDataToAPI = () => {
        console.log("Ambil API GET")

        axios.get("http://localhost:3004/blog?_sort=id&_order=desc").then(res => {
            // console.log(res)

            this.setState({album : res.data})
        })
    }

    // Delete
    deleteDataToAPI = (id) => {
        axios.delete(`http://localhost:3004/blog/${id}`).then(res => {
            // console.log(res)
            this.getDataToAPI()
        })
    }

    handleButtonDelete = (id) => {
        this.deleteDataToAPI(id)
    }

    // Post
    postDataToAPI = () => {
        // let payload = this.state.tempForm
        axios.post('http://localhost:3004/blog', this.state.tempForm).then(res => {
            // console.log(res)
            this.getDataToAPI()
            this.state.tempForm = {
                "id": 1,
                "title": "",
                "body": ""
            }
        })
    }

    handleButtonPost = () => {
        this.postDataToAPI()
    }

    // Put
    putDataToAPI = (id) => {
        axios.put(`http://localhost:3004/blog/${id}`, this.state.tempForm).then(res => {
            console.log(res)
            this.getDataToAPI()
            this.state.isEdit = false
            this.state.tempForm = {
                "id": 1,
                "title": "",
                "body": ""
            }
        })
    }

    handleButtonPut = (id) => {
        this.putDataToAPI(id)
    }

    changeStatusEdit = (data) => {
        this.setState({isEdit: true})
        this.setState({tempForm: data})
    }

    handleButtonChangeStatus = (data) => {
        this.changeStatusEdit(data)
    }

    render(){
        return(
            <React.Fragment>
                <Container>
                    <FormBlog handleButtonPut={this.handleButtonPut} tempForm={this.state.tempForm} isEdit={this.state.isEdit} handleButtonPost={this.handleButtonPost} handleChangeForm={this.handleChangeForm} onClickSubmit={this.clickSubmit} />
                    <AlbumBlog handleButtonChangeStatus={this.handleButtonChangeStatus} handleButtonDelete={this.handleButtonDelete} album={this.state.album} />
                    {/* <LearnState /> */}
                </Container>
            </React.Fragment>
        )
    }
}

ReactDOM.render( <App />, document.querySelector("#root"));