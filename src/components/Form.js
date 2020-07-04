import React from 'react';

const Form = props =>(

      <form onSubmit = {props.getWeather}>
          <input type="text" name="city" placeholder="City..." />
          <input type="text" name="country" placeholder="Country..." />
          <button>Get Weather!</button>
      </form>
);


// class Form extends React.Component{
//   render(){
//     return(
//       // here we can access our prop by passing function in form
//       <form onSubmit = {this.props.getWeather}>
//         <input type="text" name="city" placeholder="City..." />
//         <input type="text" name="country" placeholder="Country..." />
//           <button>Get Weather!</button>
//       </form>
//     );
//   }
// }
export default Form;