import React, { Component } from 'react'
import './App.css'
import axios from 'axios'

class App extends Component {
  constructor(){
    super();
    this.state = {
      recipeName:'nards',
      recipeStyle:'',
      recipeStyleList:['Hefeweizen','Amber Ale','American Pale Ale','Porter','Gruit','Gose','Helles Bock'],
      isExtract:true,
      hops:[]
    }
    this.submitHandler = this.submitHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({[event.target.name]: event.target.value});
  }

  submitHandler(event) {
    // alert(this.state['recipeName']);
    console.info(this.state);
    // axios.get('https://api.github.com/users/jacktavitt')
    // .then(response => this.setState({username:response.data.name}));
  }
  recipeStyleList=['Hefeweizen','Amber Ale','American Pale Ale','Porter','Gruit','Gose','Helles Bock'];
  listOptions = this.recipeStyleList.map((item) => {
      <option value={item}>{item}</option>
  });

  render () {
    return (
      <form onSubmit={this.submitHandler}>
        <label>Recipe Form
        <TextField name='recipeName' 
                  defaultText='what do you call it?'
                  onChange={this.handleChange}
                  label='Recipe Name' >
        </TextField><br/>
        <DropDown name='recipeStyle'
                  onChange={this.handleChange}
                  label='Recipe Style'
                  options={this.state.recipeStyleList}
                  value=''>
        </DropDown><br/>
        <YesNoButton name='isExtract'
                  onChange={this.handleChange}
                  label='Extract-Only?'
                  yesItem='Extract Only'
                  noItem='Whole Grain'>
        </YesNoButton><br/>
        </label><br/>
        <button type="submit" name='Submit'>SUBMIT TO ME MORTAL</button>
      </form>
    )
  }
}

function ConditionalGuy(props) {
  return (
    <p name={props.name} >{props.name} Is Not Yet Implemented</p>
  );
}

class YesNoButton extends Component {
  constructor(props){
    super(props);
    this.state={
      name:this.props.name,
      label:this.props.label,
      flag:true,
      yesItem:this.props.yesItem,
      noItem:this.props.noItem
    }
    this.handleChange=this.props.onChange.bind(this);
  }

  render(){

    return(
      <label>{this.state.label}
      <input type='radio' name='choice' value='yes' checked />{this.state.yesItem}
      <input type='radio'  name='choice' value='no' />{this.state.noItem}
      </label>
    );
  }
}

function OptionList(props) {
  const optionItems = props.options.map((option) =>
    <option key={option} value={option}>{option}</option>
  );
  return (
    <select onChange={props.onChange} name={props.name}>
    {optionItems}
    </select>
  );
}

class DropDown extends Component {
  constructor(props){
    super(props);
    this.state={
      name:this.props.name,
      label:this.props.label,
      optionsList:this.props.options,
      value:this.props.value
    }
    this.handleChange=this.props.onChange.bind(this);
  }

  render(){
    return(
      <label>{this.state.label}
      <OptionList options={this.state.optionsList}
                  name={this.state.name}
                  onChange={this.handleChange}
                  value={this.state.value}>
      </OptionList>
      </label>
    );
  }
}

class TextField extends Component {
  constructor(props){
    super(props);
    this.state={
      pHText:this.props.defaultText,
      enteredText:null,
      name:this.props.name,
      label:this.props.label
    }
    this.handleChange=this.props.onChange.bind(this);
  }
  render(){
    return(
      <label>{this.state.label}
      <input type='text' name={this.state.name} placeholder={this.state.pHText} onChange={this.handleChange}></input>
      </label>
    );
  }
}

class Dummy extends Component {
  constructor(props){
    super(props);
    this.state={
      name:this.props.name,
      label:this.props.label
    }
    this.handleChange=this.props.onChange.bind(this);
  }
  render(){
    return(
      <label>{this.state.label}
      <p>{this.state.name} Not Yet Implemented</p>
      </label>
    );
  }
}

export default App