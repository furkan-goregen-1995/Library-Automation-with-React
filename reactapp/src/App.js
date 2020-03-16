import React, { Component } from 'react';
import './App.css';
import Users from './components/Users'
import AddUser from './components/AddUser'
import Test from './components/Test';

class App extends Component{
  
 render() {
  return (
    <div className="container">
      <h4> Kütüphane Otomasyon Sistemi </h4>
      <hr/>
      <AddUser/>
      <hr/>
      <Users />
      <Test />
    </div>
  );
}
}

export default App;



// const test = 34;
  // const isAuth = false;

/* <h1>{1+1}</h1>
      <h4>{"murat".toUpperCase()}</h4>
      <h4>{test}</h4>
      <div>
        {
          isAuth ? <p>Kullanıcı Kayıtlı</p>
          : null
        }
      </div> */