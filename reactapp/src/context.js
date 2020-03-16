import React, { Component } from 'react'
import axios from "axios";
const UserContext = React.createContext();
const reducer = (state, action) => {

    switch (action.type) {
        case "DELETE_USER":
            axios.delete('http://localhost:3004/users/' + action.payload)
                .then((response) => {
                    console.log(response.data);

                });
            return {
                ...state,
                users: state.users.filter(user => action.payload !== user.id)
            }



        case "ADD_USER":

            axios.post("http://localhost:3004/users", { name: action.payload.name, department: action.payload.department, writer: action.payload.writer }, { responseType: "POST" })
                .then((response) => {
                    console.log(response);
                });

                return {
                ...state,
                users: [...state.users, action.payload]
            }


        default:
            return state

    }
}

export class UserProvider extends Component {

    state = {
        users: [],
        dispatch: action => {
            this.setState(state => reducer(state, action))
        }
    }

    componentDidMount = async () => {
        const response = await axios.get("http://localhost:3004/users");

        //AXIOS POST
        // axios.post("http://localhost:3004/users", { name: "Furkan", department: "Sanat", writer: "4000" }, { responseType: "POST" })
        //     .then((response) => {
        //         console.log(response);
        //     })

        // AXIOS PUT
        // axios.put("http://localhost:3004/users/Dzp3N50", { name: "Halime Yıldız", department: "Sağlık", writer: "7000" }, { responseType: "PUT" })
        //     .then((response) => {
        //         console.log(response.data);
        //     })

        this.setState({
            users: response.data
        })
        console.log(response);
    }


    render() {
        return (
            <UserContext.Provider value={this.state}>
                {this.props.children}
            </UserContext.Provider>

        )
    }
}
const UserConsumer = UserContext.Consumer;
export default UserConsumer;