import { Component } from "react"
import { Label, Input } from "./Filter.styled";
export default class Filter extends Component{
    state={
        message: ''
    }
    handleFilter= e =>{
        this.setState({ message: e.currentTarget.value})
        this.props.onChange(this.state.message)
    }

    render(){
    return (
        <Label>
            Find contacts by name
            <Input type="text" onChange={this.handleFilter}/>
        </Label>
    )
    }
}
