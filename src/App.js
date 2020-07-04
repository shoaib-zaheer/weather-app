import React from 'react';
import Titles from './components/Titles.js'
import Form from './components/Form.js'
import Weather from './components/Weather.js'
// API is made in openweathermap.org page
const API_KEY = 'dc99351dfcb175a3f1977a687c118bdd'; 
class App extends React.Component{
  // creating a state to show in the viewer the information, can be changed once user click the button
  state = {
    temperature: undefined,
    city:undefined,
    country:undefined,
    humidity:undefined,
    description:undefined,
    error:undefined
  }
  // to stop reload or refreshing the page we give (e) arrangement and set is to prevent default act

 // async way is a way to call for http call
  getWeather = async (e) => {
    e.preventDefault();
    // now we have to change the name of city and country to the user value which types in form
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    // await is calling for matted 
    // fetch is new way to call API from server
    // in fetch we use template string (``), it allow you to inject the variable in your file what you define
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`);
    // date await will get all the date from api_call and using json to convert it to readable format for use
    const data = await api_call.json();
    console.log(data);
    // to sent the value of your state objects use below meted
    this.setState({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error:""
    });

  }

  render(){

    return(
      <div>

        <Titles />
        {/* props are like HTML attribute to set props, we will be able to access it back in our form.js file */}
        {/*this in here refer to APP and then function which is inside app*/}
        <Form getWeather = {this.getWeather}/>
        <Weather 
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
          />

      </div>
    );
  }
}
export default App;
