import React, { Component } from 'react';
import Header from '../header/header'
import List from '../list/list'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Counter from '../list/list'



export default class App extends Component {



    constructor() {
        super();

 
    }



   


    render() {
        return (
            <div className='app' >
               <Router>
                   <Header/>
                   <Route path='/Header' component={Header}/>
                   <Route path='/List' component={List}/>
                   <Counter/>
                   
                   </Router>
            </div>
        )
    }
}

