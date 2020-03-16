import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UserConsumer from "../context"
class User extends Component {
    
    state = {
        isVisible: false
    }
    onClickEvent = (e) =>{
        this.setState({
            isVisible: !this.state.isVisible
        })
       
    }
    onDeleteUser = (dispatch,e) => {
        const {id} = this.props;
        console.log(this.props);
        
        //Consumer Dispatch
        dispatch({type : "DELETE_USER", payload:id});
    }

    componentWillUnmount() {
        console.log("Componenet Will Unmount");
    }
    

    // constructor(props){
    //     super(props);

    //     this.state = {
    //         isVisible: false
    //     }
    // }
    render() {
        const {isVisible} = this.state;
        //Destructing
        const {name,department,writer}=this.props;
        return(
            <UserConsumer>
                {
                value => {
                    const {dispatch} = value;

                    return (
           <div className = "col-md-8 mb-4" style = {{backgroundColor : "#00203e" }}>
               <div className="card">
                   <div className="card-header d-flex justify-content-between">
                       <h4 className="d-inline" onClick = {this.onClickEvent.bind(this)}>{name}</h4>
                       
                       <i onClick = {this.onDeleteUser.bind(this,dispatch)} className="far fa-trash-alt" style = {{cursor: "pointer"}}></i>
                   
                   </div>
                   {
                   isVisible ? <div className="card-body">
                   <p className="card-text">Yazarı: {writer}</p>
                   <p className="card-text">Eser Türü: {department}</p>
                   </div>
                   
                     : null
                    }
            
                </div>

           </div>
               
        )

                }
            }
            </UserConsumer>
        )
        
        
    }
}

User.defaultProps = {
    name: "Bilgi Yok",
    department: "Bilgi Yok",
    writer: "Bilgi Yok"
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
    writer: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
}
export default User;