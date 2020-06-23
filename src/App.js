import React from 'react';
import Titles from './components/Titles.js'
import Form from './components/Form.js'
import Weather from './components/Weather.js'
// API is made in openweathermap.org page
const API_EKY = 'dc99351dfcb175a3f1977a687c118bdd'; 
class App extends React.Component{
 // async way is a way to call for http call
  getWeather = async () => {
    // await is calling for matted 
    // fetch is new way to call API from server
    // in tetch we use templete string (``), it allow you to inject the variable in your file what you define
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${API_KEY}`);
    // date await will get all the date from api_call and using json to convert it to readable format for use
    const date = await api_call.json();
    console.log(date);
  }

  render(){

    return(
      <div>

        <Titles />
        <Form />
        <Weather />

      </div>
    );
  }
}
export default App;
