import React from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'

class FormBlog extends React.Component{
    render(){
        // console.log("props dari formBlog", this.props)
        return(
            <React.Fragment>
                <Form>
                    <FormGroup>
                        <Label>Title</Label>
                        <Input onChange={(event) => this.props.handleChangeForm(event)} name="title" type="text" placeholder="title" value={this.props.tempForm.title}/>
                    </FormGroup>

                    <FormGroup>
                        <Label>Body</Label>
                        <Input onChange={(event) => this.props.handleChangeForm(event)} name="body" type="text" placeholder="body" value={this.props.tempForm.body}/>
                    </FormGroup>

                    <FormGroup>
                        <Button color={this.props.isEdit ? "warning" : "primary"} onClick={this.props.isEdit ? () => this.props.handleButtonPut(this.props.tempForm.id) : () => this.props.handleButtonPost()} >{this.props.isEdit ? "Edit" : "Submit"}</Button>
                    </FormGroup>
                </Form>
            </React.Fragment>
        )
    }
}

export default FormBlog