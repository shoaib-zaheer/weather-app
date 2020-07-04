import React from 'react';

class Weather extends React.Component{
  render(){
    return(
      <div>
        {/* if this.props.temperature and if this.props.country and if <p>Location:{this.props.city}, {this.props.country} is true print below line */}
        {this.props.temperature && this.props.country && <p>Location: {this.props.city}, {this.props.country}</p>}
        {this.props.temperature && <p>Temperature: {this.props.temperature}</p>}
        {this.props.humidity &&<p>Humidity:{this.props.humidity}</p>}
        {this.props.description &&<p>Conditions:{this.props.description}</p>}

      </div>
    );
  }
}
export default Weather;