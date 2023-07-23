import React,{Component} from 'react';
import './App.css';
import Folder from './component/folder';
import { Audio } from 'react-loader-spinner'

export default class App extends Component
{

constructor(props)
{
  super(props);
  this.state = {
    info:"",
    isloading:true
  }
}

async getIp()
{
  const response = await fetch('https://api.ipify.org?format=json')
  return (await response.json()).ip;
}
async getInfo()
{
  const ip = await this.getIp()
  const response = await fetch(`http://ipwhois.app/json/${ip}`)
  return await response.json()


}
componentDidMount(){
  this.getInfo().then(data => {
    this.setState({
      info:data,
      isloading:false
    })
  })
  
}


render()
{
 return(
  <>
  {this.state.isloading ?
  <div className='parent'>
  <Audio
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/>
</div>:
  <Folder data={this.state.info}></Folder>}
  </>
 )
}










}