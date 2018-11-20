import React, { Component } from 'react';
import './App.css';
import PhoneFrom from './components/PhoneFrom';
import PhoneinfoList from './components/PhoneinfoList';


class App extends Component {
  
  
  id = 3;
  state = {
    information: [
      {
        id:0,
        name: '홍길동',
        phone: '010-0000-0001'
      },
      {
        id:1,
        name: '람머스',
        phone: '010-0000-0002' 
      },
      {
        id:2,
        name: '얍얍이',
        phone: '010-0000-0003'
      },
     
    ],
    keyword:'',
  }

  handleChange = (e)=>{
    this.setState({
      keyword: e.target.value,
    })
  }
  
  handleCreate = (data) =>{
    const {information} = this.state
    this.setState({
      information: information.concat({
        ...data,
        id : this.id++
      })
    })
  }
  handleRemove = (id)=>{
    const {information} = this.state;
    this.setState({
      information: information.filter(info=> info.id !== id)
    })
  }

  handleUpdate = (id, data)=>{
    const {information} = this.state
    this.setState({
        information: information.map(info => {
            if (info.id === id){
              return {
                id,
                ...data,
              };
            }
            return info;
          })
    })
  }
   

  render() {
    return (
      <div className="App">
        <PhoneFrom onCreate={this.handleCreate}/>
        <input
          value={this.state.keyword}
          onChange={this.handleChange}
          placeholder="검색..."
        />
        <PhoneinfoList 
          data={this.state.information.filter(
            info => info.name.indexOf(this.state.keyword) > -1
          )}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default App;
