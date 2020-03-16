import React, { Component } from 'react'
import posed from 'react-pose';
import UserConsumer from '../context'
var uniqid = require('uniqid');

const Animation = posed.div({
    visible : {
        opacity: 1,
        applyAtStart : {
            display : "block"
        }
    },
    hidden : {
        opacity: 0,
        applyAtEnd : {
            display : "none"
        }
    }
});
class AddUser extends Component {
    
    state = {
        visible: false,
        name: "",
        department: "",
        writer: ""
    }

    changeInput = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    // changeName = (e) => {
    //     this.setState({
    //         name : e.target.value
    //     })
    // }
    // changeDepartment = (e) => {
    //     this.setState({
    //         name : e.target.value
    //     })
    // }
    // changewriter = (e) => {
    //     this.setState({
    //         name : e.target.value
    //     })
    // }
    addUser = (dispatch,e) => {
        e.preventDefault();
        const {name,department,writer} =this.state;
        const newUser = {
            id: uniqid(),
            name: name,
            writer: writer,
            department: department
        }
        dispatch({type : "ADD_USER",payload: newUser});
        console.log(newUser);
    }

    changeVisibility = (e) => {
        this.setState({
            visible: !this.state.visible
        })
    }
    
    render() {
        const {name,department,writer,visible} = this.state;
        
       return  <UserConsumer>
            {
                value => {
                    const {dispatch} =value;

                    return (
            
                        <div className = "col-md-8 mb-4" >
                            <button onClick = {this.changeVisibility} className = "btn btn-dark btn-block mb-2">{visible ? "Formu kapat" : "Kitap Ekle"}</button>
                            <Animation pose = {visible ? "visible" : "hidden"}>
                            <div className = "card" >
                                <div className = "card-header">
                                    <h4>Kitap Ekleme Formu</h4>
                                </div>  
                                <div className = "card-body" style = {{backgroundColor : "#354d48" }}>
                                    <form onSubmit = {this.addUser.bind(this,dispatch)}>
                                        <div className = "form-group">
                                            <label htmlFor = "name" style ={{color: "white"}}>Eser Adı</label>
                                            <input
                                            type = "text"
                                            name = "name"
                                            id = "id"
                                            placeholder = "Eser Adı"
                                            className = "form-control"
                                            value = {name}
                                            onChange = {this.changeInput}
                                            />
                                        </div>
                                        
                                        <div className = "form-group">
                                            <label htmlFor = "department" style ={{color: "white"}}>Eser Türü</label>
                                            <input
                                            type = "text"
                                            name = "department"
                                            id = "department"
                                            placeholder = "Eser Türü"
                                            className = "form-control"
                                            value = {department}
                                            onChange = {this.changeInput}
                                            />
                                        </div>
            
                                        <div className = "form-group">
                                            <label htmlFor = "writer" style ={{color: "white"}}>Yazarı</label>
                                            <input
                                            type = "text"
                                            name = "writer"
                                            id = "writer"
                                            placeholder = "Yazarı"
                                            className = "form-control"
                                            value = {writer}
                                            onChange = {this.changeInput}
                                            />
                                        </div>
                                    <button className = "btn btn-danger btn-block" type = "submit">Eser Ekle</button>
            
                                    </form>
                                </div>
                            
                            </div>
                            </Animation>
                                                  </div>
                    )

                }
            }

            
        </UserConsumer>
        
    }
}
export default AddUser