import React, { Component } from 'react';
import Unsplash, { toJson } from 'unsplash-js';


const ACCESSKEY = 'cp2mgkJSVuPMqG1ufvl_dmdImfc3K8KjE5Z4HtBDFbw';

const unsplash = new Unsplash({ accessKey: ACCESSKEY });

class App extends Component{
  constructor(){
    super();
    this.state = {
      picture : "https://images.unsplash.com/photo-1540783329546-80b728bf7bf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1275&q=80"
    }
  }

  catchErr = () => {
    unsplash.users.profile("naoufal")
    .catch(err => {
      console.log("err", err)
    });
  }

  // photos.getRandomPhoto({ query, username, featured })
  getRandomPhoto = () => {
    unsplash.photos.getRandomPhoto({ username: "naoufal" })
    .then(toJson)
    .then(json => {
      console.log("json", json.links.html)
      this.setState({picture : json.links.html})
    });
  }

  componentDidMount(){
    this.getRandomPhoto();
  }


  // 怎麼顯示抓回來的圖
  render(){
    return(<img src={this.state.picture}></img>)
  }
}



export default App;
