import React from 'react';

// if your returning one element in function class you can write funciton as below

const Weather = props => (

          <div>
            {/* if this.props.temperature and if this.props.country and if <p>Location:{this.props.city}, {this.props.country} is true print below line */}
            {props.temperature && this.props.country && <p>Location: {this.props.city}, {this.props.country}</p>}
            {props.temperature && <p>Temperature: {props.temperature}</p>}
            {props.humidity &&<p>Humidity:{props.humidity}</p>}
            {props.description &&<p>Conditions:{props.description}</p>}
            {props.error && <p>{props.error}</p>
            }
          </div>
       );


// const Weather = (props) => {
//   return(
//           <div>
//             {/* if this.props.temperature and if this.props.country and if <p>Location:{this.props.city}, {this.props.country} is true print below line */}
//             {props.temperature && this.props.country && <p>Location: {this.props.city}, {this.props.country}</p>}
//             {props.temperature && <p>Temperature: {props.temperature}</p>}
//             {props.humidity &&<p>Humidity:{props.humidity}</p>}
//             {props.description &&<p>Conditions:{props.description}</p>}
//             {props.error && <p>{props.error}</p>
//             }
//           </div>
//         );
// }

// class Weather extends React.Component{
//   render(){
//     return(
//       <div>
//         {/* if this.props.temperature and if this.props.country and if <p>Location:{this.props.city}, {this.props.country} is true print below line */}
//         {this.props.temperature && this.props.country && <p>Location: {this.props.city}, {this.props.country}</p>}
//         {this.props.temperature && <p>Temperature: {this.props.temperature}</p>}
//         {this.props.humidity &&<p>Humidity:{this.props.humidity}</p>}
//         {this.props.description &&<p>Conditions:{this.props.description}</p>}
//         <div>{this.props.error && <p>{this.props.error}</p>
//         }</div>
//       </div>
//     );
//   }
// }
>>>>>>> weather
export default Weather;