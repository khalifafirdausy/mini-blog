import React from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'

class FormBlog extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Form>
                    <FormGroup>
                        <Label>Title</Label>
                        <Input type="text" placeholder="title" />
                    </FormGroup>

                    <FormGroup>
                        <Label>Body</Label>
                        <Input type="text" placeholder="body" />
                    </FormGroup>

                    <FormGroup>
                        <Button color="primary" onClick={() => this.props.onClickSubmit()} >Submit</Button>
                    </FormGroup>
                </Form>
            </React.Fragment>
        )
    }
}

export default FormBlog