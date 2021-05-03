import React, { Component } from 'react';
import '../list/list.css'
import ListService from '../service/service'

export default class List extends Component {
    list = new ListService();
    peoples = [];
    elements = [];
  

    state = {
        persons: [],

    }

    newId=this.state.persons.length;
    componentDidMount() {
        this.list.getList().then((data) => this.setState(
            {
                persons: data
            }
        ))
        this.makeItem();
    }


deleteItem=(event)=>{
    this.setState(({persons})=>{
        const idx = persons.findIndex((el)=> el.id==event.target.id)
        const before = persons.slice(0, idx)
        const after = persons.slice(idx+1)
        const newArr = [...before, ...after]
        return {
            persons: newArr
        }

    })
}

addItem =(text)=>{
    const newPerson = {
        id: this.newId++,
        firstName: text.substring(0, text.indexOf(' ')),
        lastName: text.substring(text.indexOf(' ')),


    }

    this.setState(({persons})=>{
        const newArr = [...persons, newPerson]

        return {
            persons: newArr
        }

    })
}

    makeItem() {
        this.elements = this.state.persons.map((item) => {
             
               return( 
                   <div className="itemBlock" >
               <li key={item.id} id={item.id}> <button key={item.id+20} id={item.id} onClick={this.deleteItem} >X</button> {item.id} {item.firstName} {item.lastName}  </li>
               
               </div>
                )
            
        })
        return this.elements;

    }
   
    onSubmit = (event) =>{
        event.preventDefault();
this.newId = this.state.persons.length+1
this.addItem(this.state.label)
console.log(this.state.persons.length+1)

    }
    onLabelChange =(e)=>{
        this.setState({label: e.target.value})
    }
    render() {
        return (
            <div>
            <ul >
                {this.makeItem()}
            </ul>
            <div className='addITem'>
                <form id="addName" className='item-add-form d-flex' onSubmit={this.onSubmit}>
                    <input  onChange = {this.onLabelChange} type='text'  className='formControl' form="addName"/>
                    <button  className='btn btn-outline-secondary'>Add Person</button>
                </form>
               
            </div>
            </div>
        )
    }


}