import React from 'react';
import Titles from './components/Titles.js'
import Form from './components/Form.js'
import Weather from './components/Weather.js'
// API is made in openweathermap.org page
const API_KEY = 'dc99351dfcb175a3f1977a687c118bdd'; 
class App extends React.Component{
  // to stop reload or refreshing the page we give (e) arrangement and set is to prevent default act

 // async way is a way to call for http call
  getWeather = async (e) => {
    e.preventDefault();
    // await is calling for matted 
    // fetch is new way to call API from server
    // in fetch we use template string (``), it allow you to inject the variable in your file what you define
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Kabul,af&APPID=${API_KEY}`);
    // date await will get all the date from api_call and using json to convert it to readable format for use
    const date = await api_call.json();
    console.log(date);
  }

  render(){

    return(
      <div>

        <Titles />
        {/* props are like HTML attribute to set props, we will be able to access it back in our form.js file */}
        {/*this in here refer to APP and then function which is inside app*/}
        <Form getWeather = {this.getWeather}/>
        <Weather />

      </div>
    );
  }
}
export default App;
