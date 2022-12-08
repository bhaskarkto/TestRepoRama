import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { useFormik } from 'formik';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import AppFetch from './Fetch/AppFetch';
import AppFetchGH from './Fetch/AppFetchGH';
import AppUseEffct from './useEffect/AppUseEffect';
import Top from './useEffect/AppUseEffect2';
import ThreeCounts from './useEffect/useEffectonStateChange';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode> <ThreeCounts /> </React.StrictMode> );

//root.render(<React.StrictMode> <Top /> </React.StrictMode> );

// root.render(<React.StrictMode> <AppUseEffct /> </React.StrictMode> );
/*Fetch Example */
// root.render(<React.StrictMode> <AppFetchGH /></React.StrictMode> );

/* - First Mechanism */
// root.render(
//   <React.StrictMode>
//     <App />  
//   </React.StrictMode>
// );

//--------------------------Second inline Mechanism - type 1 ------------------------------
// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world! - Second inline Mechanism - type 1 </h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   root.render(element);
// } 
// setInterval(tick, 1000);

/*Second inline Mechanism - type 2 - as a Function & Props
function Clock(props) {
  return(
    <div>
      <h1>Hello, world! - type 2 - as a Function & Props</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  )
}

function tick() {
  root.render(<Clock date={new Date()}/>);
} 
setInterval(tick, 1000);
*/

/*------------------ Second inline Mechanism - type 3 - as a Class & Props -----------------*/ 
//     class Clock extends React.Component {
//       constructor(props) {
//         super(props);
//         this.state = {
//           date: new Date(),
//           posts: [],
//           comments: []
//         };
//       }

//       componentDidMount() {
//         this.timerID = setInterval(
//           () => this.tick(),
//           1000
//         );
//       }

//       componentWillUnmount() {
//         clearInterval(this.timerID);
//       }

//       tick() {
//         this.setState({
//           date: new Date()
//         });
//         /*
//         //or you can set the state for multiple properties this way
//         this.setState(function(state, props) {
//           return {
//             counter: state.counter + props.increment
//           };
//         });
//         //or using arrow functions
//         this.setState((state, props) => ({
//           counter: state.counter + props.increment
//         }));
//         */

//         /* set state for array type
//           fetchPosts().then(response => {
//           this.setState({
//             posts: response.posts
//           });
//         });

//         fetchComments().then(response => {
//           this.setState({
//             comments: response.comments
//           });
//         });
//         */ 
//       }

//       render(){
//         return(
//           <div>
//             <h1>Hello, world! - type 3 - as a Class & Props </h1>
//             <h2>It is State: {this.state.date.toLocaleTimeString()}.</h2>
//           </div>
//         )
//       }
//     }

//     function App2() {
//       return (
//         <div>
//           <Clock />
//           <Clock />
//           <Clock />
//         </div>
//       );
//     }
//     root.render(<App2/>);
/*------------------------Third using props and functions------------------------------ */
/*
function formatDate(date) {
  return date.toLocaleDateString();
}

function Avatar(props) {
  return (
    <img className="Avatar"
         src={props.user.avatarUrl}
         alt={props.user.name} />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

function Comment2(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.user.author} />
      <div className="Comment-text">
        {props.user.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.user.date)}
      </div>
    </div>
  );
}
 
const comment = [
    {
      date: new Date(),
      text: 'I hope you enjoy learning React!-1',
      author: {
        name: 'Hello Kitty1',
        avatarUrl: 'http://placekitten.com/g/64/64'
      }
    },
    {
      date: new Date(),
      text: 'I hope you enjoy learning React!-2',
      author: {
        name: 'Hello Kitty2',
        avatarUrl: 'http://placekitten.com/g/64/64'
      }
    }
];

root.render(
  <Comment  
    date={comment[1].date}
    text={comment[1].text}
    author={comment[1].author} />
);
*/

/*--------------Third using props and functions----Passinglist item--------------- */

// function formatDate(date) {
//   return date.toLocaleDateString();
// }

// function Avatar(props) {
//   return (
//     <img className="Avatar"
//          src={props.user.avatarUrl}
//          alt={props.user.name} />
//   );
// }

// function UserInfo(props) {
//   return (
//     <div className="UserInfo">
//       <Avatar user={props.user} />
//       <div className="UserInfo-name">
//         {props.user.name}
//       </div>
//     </div>
//   );
// }

// function Comment(props) {
//   return (
//     <div className="Comment">
//       <UserInfo user={props.orig.author} />
//       <div className="Comment-text">
//         {props.orig.text}
//       </div>
//       <div className="Comment-date">
//         {formatDate(props.orig.date)}
//       </div>
//     </div>
//   );
// }

// const comment = [
//     {
//       date: new Date(),
//       text: 'I hope you enjoy learning React!-1',
//       author: {
//         name: 'Hello Kitty1',
//         avatarUrl: 'http://placekitten.com/g/64/64'
//       }
//     },
//     {
//       date: new Date(),
//       text: 'I hope you enjoy learning React!-2',
//       author: {
//         name: 'Hello Kitty2',
//         avatarUrl: 'http://placekitten.com/g/64/64'
//       }
//     }
// ];

//   function App3() {
//     return (
//       <div> 
//         <Comment 
//           orig={comment[0]}
//         />
//         <Comment orig = {comment[1]} />
//       </div>
//     );
//   }
//   root.render(<App3/>);

/*------------ EVENTS   --------------------*/
/*
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}> 
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

root.render(<Toggle />);
*/
//--------------------- Conditional Rendering -----------------------

// function UserGreeting(props) {
//   return <h1>Welcome back!</h1>;
// }

// function GuestGreeting(props) {
//   return <h1>Please sign up.</h1>;
// }
// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn) {
//     return <UserGreeting />;
//   }
//   return <GuestGreeting />;
// }
// function LoginButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Login
//     </button>
//   );
// }

// function LogoutButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Logout
//     </button>
//   );
// }
// class LoginControl extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleLoginClick = this.handleLoginClick.bind(this);
//     this.handleLogoutClick = this.handleLogoutClick.bind(this);
//     this.state = {isLoggedIn: false};
//   }

//   handleLoginClick() {
//     this.setState({isLoggedIn: true});
//   }

//   handleLogoutClick() {
//     this.setState({isLoggedIn: false});
//   }

//   render() {
//     const isLoggedIn = this.state.isLoggedIn;
//     let button;
//     if (isLoggedIn) {
//       button = <LogoutButton onClick={this.handleLogoutClick} />;
//     } else {
//       button = <LoginButton onClick={this.handleLoginClick} />;
//     }

//     return (
//       <div>
//         <Greeting isLoggedIn={isLoggedIn} />
//         {button}
//       </div>
//     );
//   }
// }
// root.render(<LoginControl />);

/*-------------------- --------------------*/
// function Mailbox(props) {
//   const unreadMessages = props.unreadMessages;
//   return (
//     <div>
//       <h1>Hello!</h1>
//       {unreadMessages.length > 0 &&
//         <h2>
//           You have {unreadMessages.length} unread messages.
//         </h2>
//       }
//     </div>
//   );
// }

// const messages = ['React', 'Re: React', 'Re:Re: React'];
// root.render(<Mailbox unreadMessages={messages} />);

/*------------------map & usage----------------------------------------*/
// //map() function to take an array of numbers and double their values
// //const numbers = [1, 2, 3, 4, 5];
// //const doubled = numbers.map((number) => number * 2);
// //console.log(doubled);

// function ListItem(props) {
//   // Correct! There is no need to specify the key here:
//   return <li>{props.value}</li>;
// }

// function NumberList(props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map((number) =>
//     // Correct! Key should be specified inside the array.
//     <ListItem key={number.toString()} value={number} />
//   );
//   return (
//     <ul>
//       {listItems}
//     </ul>
//   );
// }

// const numbers = [1, 2, 3, 4, 5];
// root.render(<NumberList numbers={numbers} />);

/*------------ Passing list object as props -------------*/
// function Blog(props) {
//   const sidebar = (
//     <ul>
//       {props.posts.map((post) =>
//         <li key={post.id}>
//           {post.title}
//         </li>
//       )}
//     </ul>
//   );
//   const content = props.posts.map((post) =>
//     <div key={post.id}>
//       <h3>{post.title}</h3>
//       <p>{post.content}</p>
//     </div>
//   );
//   return (
//     <div>
//       {sidebar}
//       <hr />
//       {content}
//     </div>
//   );
// }

// const posts = [
//   {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
//   {id: 2, title: 'Installation', content: 'You can install React from npm.'}
// ];

// root.render(<Blog posts={posts} />);
/*-------------- Form - text box submit ----------------*/
// class NameForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: ''};

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }

//   handleSubmit(event) {
//     alert('A name was submitted: ' + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <input type="text" value={this.state.value} onChange={this.handleChange} />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }

// root.render(<NameForm />);

/*------------------Form Select submit ----------------------*/
// class FlavorForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: 'coconut'};

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }

//   handleSubmit(event) {
//     alert('Your favorite flavor is: ' + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Pick your favorite flavor:
//           <select value={this.state.value} onChange={this.handleChange}>
//             <option value="grapefruit">Grapefruit</option>
//             <option value="lime">Lime</option>
//             <option value="coconut">Coconut</option>
//             <option value="mango">Mango</option>
//           </select>
//         </label>
//         <input type="submit" value="Submit" />
//         <input type="file" />
//       </form>
//     );
//   }
// }

// root.render(<FlavorForm />);

/*-----------------Handling Multiple Inputs -----------------------*/
// class Reservation extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isGoing: true,
//       numberOfGuests: 2
//     };

//     this.handleInputChange = this.handleInputChange.bind(this);
//   }

//   handleInputChange(event) {
//     const target = event.target;
//     const value = target.type === 'checkbox' ? target.checked : target.value;
//     const name = target.name;

//     this.setState({
//       [name]: value
//     });
//   }

//   render() {
//     return (
//       <form>
//         <label>
//           Is going:
//           <input
//             name="isGoing"
//             type="checkbox"
//             checked={this.state.isGoing}
//             onChange={this.handleInputChange} />
//         </label>
//         <br />
//         <label>
//           Number of guests:
//           <input
//             name="numberOfGuests"
//             type="number"
//             value={this.state.numberOfGuests}
//             onChange={this.handleInputChange} />
//         </label>
//       </form>
//     );
//   }
// }
// root.render(<Reservation />);
/*-------------Formik Signup form ------------------*/
//  const SignupForm = () => {
//    // Pass the useFormik() hook initial form values and a submit function that will
//    // be called when the form is submitted
//    const formik = useFormik({
//      initialValues: {
//        email: '',
//      },
//      onSubmit: values => {
//        alert(JSON.stringify(values, null, 2));
//      },
//    });
//    return (
//      <form onSubmit={formik.handleSubmit}>
//        <label htmlFor="email">Email Address</label>
//        <input
//          id="email"
//          name="email"
//          type="email"
//          onChange={formik.handleChange}
//          value={formik.values.email}
//        />
 
//        <button type="submit">Submit</button>
//      </form>
//    );
//  };
//  root.render(<SignupForm />);
/*-------------------Second form of Sign up ------------------*/
// const SignupForm = () => {
//   // Note that we have to initialize ALL of fields with values. These
//   // could come from props, but since we don’t want to prefill this form,
//   // we just use an empty string. If we don’t do this, React will yell
//   // at us.
//   const formik = useFormik({
//     initialValues: {
//       firstName: '',
//       lastName: '',
//       email: '',
//     },
//     onSubmit: values => {
//       alert(JSON.stringify(values, null, 2));
//     },
//   });
//   return (
//     <form onSubmit={formik.handleSubmit}>
//       <label htmlFor="firstName">First Name</label>
//       <input
//         id="firstName"
//         name="firstName"
//         type="text"
//         onChange={formik.handleChange}
//         value={formik.values.firstName}
//       />

//       <label htmlFor="lastName">Last Name</label>
//       <input
//         id="lastName"
//         name="lastName"
//         type="text"
//         onChange={formik.handleChange}
//         value={formik.values.lastName}
//       />

//       <label htmlFor="email">Email Address</label>
//       <input
//         id="email"
//         name="email"
//         type="email"
//         onChange={formik.handleChange}
//         value={formik.values.email}
//       />

//       <button type="submit">Submit</button>
//     </form>
//   );
// };
// root.render(<SignupForm />);
/*--------------Formik Validation form control --------------*/
 // A custom validation function. This must return an object
 // which keys are symmetrical to our values/initialValues
//  const validate = values => {
//    const errors = {};
//    if (!values.firstName) {
//      errors.firstName = 'Required';
//    } else if (values.firstName.length > 15) {
//      errors.firstName = 'Must be 15 characters or less';
//    }
 
//    if (!values.lastName) {
//      errors.lastName = 'Required';
//    } else if (values.lastName.length > 20) {
//      errors.lastName = 'Must be 20 characters or less';
//    }
 
//    if (!values.email) {
//      errors.email = 'Required';
//    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//      errors.email = 'Invalid email address';
//    }
 
//    return errors;
//  };
 
//  const SignupForm = () => {
//    // Pass the useFormik() hook initial form values, a validate function that will be called when
//    // form values change or fields are blurred, and a submit function that will
//    // be called when the form is submitted
//    const formik = useFormik({
//      initialValues: {
//        firstName: '',
//        lastName: '',
//        email: '',
//      },
//      validate,
//      onSubmit: values => {
//        alert(JSON.stringify(values, null, 2));
//      },
//    });
//    return (
//      <form onSubmit={formik.handleSubmit}>
//        <label htmlFor="firstName">First Name</label>
//        <input
//          id="firstName"
//          name="firstName"
//          type="text"
//          onChange={formik.handleChange}
//          value={formik.values.firstName}
//        />
//        {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
 
//        <label htmlFor="lastName">Last Name</label>
//        <input
//          id="lastName"
//          name="lastName"
//          type="text"
//          onChange={formik.handleChange}
//          value={formik.values.lastName}
//        />
//        {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
 
//        <label htmlFor="email">Email Address</label>
//        <input
//          id="email"
//          name="email"
//          type="email"
//          onChange={formik.handleChange}
//          value={formik.values.email}
//        />
//        {formik.errors.email ? <div>{formik.errors.email}</div> : null}
 
//        <button type="submit">Submit</button>
//      </form>
//    );
//  };
// root.render(<SignupForm />);
/*------------------Formik Visited fields and touched -------*/
// const validate = values => {
//   const errors = {};

//   if (!values.firstName) {
//     errors.firstName = 'Required';
//   } else if (values.firstName.length > 15) {
//     errors.firstName = 'Must be 15 characters or less';
//   }

//   if (!values.lastName) {
//     errors.lastName = 'Required';
//   } else if (values.lastName.length > 20) {
//     errors.lastName = 'Must be 20 characters or less';
//   }

//   if (!values.email) {
//     errors.email = 'Required';
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = 'Invalid email address';
//   }

//   return errors;
// };

// const SignupForm = () => {
//   const formik = useFormik({
//     initialValues: {
//       firstName: '',
//       lastName: '',
//       email: '',
//     },
//     validate,
//     onSubmit: values => {
//       alert(JSON.stringify(values, null, 2));
//     },
//   });
//   return (
//     <form onSubmit={formik.handleSubmit}>
//       <label htmlFor="firstName">First Name</label>
//       <input
//         id="firstName"
//         name="firstName"
//         type="text"
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         value={formik.values.firstName}
//       />
//       {formik.touched.firstName && formik.errors.firstName ? (
//         <div>{formik.errors.firstName}</div>
//       ) : null}

//       <label htmlFor="lastName">Last Name</label>
//       <input
//         id="lastName"
//         name="lastName"
//         type="text"
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         value={formik.values.lastName}
//       />
//       {formik.touched.lastName && formik.errors.lastName ? (
//         <div>{formik.errors.lastName}</div>
//       ) : null}

//       <label htmlFor="email">Email Address</label>
//       <input
//         id="email"
//         name="email"
//         type="email"
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         value={formik.values.email}
//       />
//       {formik.touched.email && formik.errors.email ? (
//         <div>{formik.errors.email}</div>
//       ) : null}

//       <button type="submit">Submit</button>
//     </form>
//   );
// };
// root.render(<SignupForm />);
/*------------------Formik form controls - Schema Validation with Yup-----------*/
// import {FormikHelpers } from 'formik';

// interface Values {
//   firstName: string;
//   lastName: string;
//   email: string;
// }

// const App = () => {
//   return (
//     <div>
//       <h1>Signup</h1>
//       <Formik
//         initialValues={{
//           firstName: '',
//           lastName: '',
//           email: '',
//         }}
//         onSubmit={(
//           values: Values,
//           { setSubmitting }: FormikHelpers<Values>
//         ) => {
//           setTimeout(() => {
//             alert(JSON.stringify(values, null, 2));
//             setSubmitting(false);
//           }, 500);
//         }}
//       >
//         <Form>
//           <label htmlFor="firstName">First Name</label>
//           <Field id="firstName" name="firstName" placeholder="John" />

//           <label htmlFor="lastName">Last Name</label>
//           <Field id="lastName" name="lastName" placeholder="Doe" />

//           <label htmlFor="email">Email</label>
//           <Field
//             id="email"
//             name="email"
//             placeholder="john@acme.com"
//             type="email"
//           />

//           <button type="submit">Submit</button>
//         </Form>
//       </Formik>
//     </div>
//   );
// };

// root.render(<App />);
/*-------------------Formik form controls -------------------*/
// const Basic = () => (
//   <div>
//     <h1>Anywhere in your app!</h1>
//     <Formik
//       initialValues={{ email: '', password: '' }}
//       validate={values => {
//         const errors = {};
//         if (!values.email) {
//           errors.email = 'Required';
//         } else if (
//           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//         ) {
//           errors.email = 'Invalid email address';
//         }
//         return errors;
//       }}
//       onSubmit={(values, { setSubmitting }) => {
//         setTimeout(() => {
//           alert(JSON.stringify(values, null, 2));
//           setSubmitting(false);
//         }, 400);
//       }}
//     >
//       {({
//         values,
//         errors,
//         touched,
//         handleChange,
//         handleBlur,
//         handleSubmit,
//         isSubmitting,
//         /* and other goodies */
//       }) => (
//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             name="email"
//             onChange={handleChange}
//             onBlur={handleBlur}
//             value={values.email}
//           />
//           {errors.email && touched.email && errors.email}
//           <input
//             type="password"
//             name="password"
//             onChange={handleChange}
//             onBlur={handleBlur}
//             value={values.password}
//           />
//           {errors.password && touched.password && errors.password}
//           <button type="submit" disabled={isSubmitting}>
//             Submit
//           </button>
//         </form>
//       )}
//     </Formik>
//   </div>
// );
// root.render(<Basic />);
// //export default Basic;

/*------------lifting the state up -----calc temp---------------*/

// function toCelsius(fahrenheit) {
//   return (fahrenheit - 32) * 5 / 9;
// }
// function toFahrenheit(celsius) {
//   return (celsius * 9 / 5) + 32;
// }
// function tryConvert(temperature, convert) {
//   const input = parseFloat(temperature);
//   if (Number.isNaN(input)) {
//     return '';
//   }
//   const output = convert(input);
//   const rounded = Math.round(output * 1000) / 1000;
//   return rounded.toString();
// }
// //---
// const scaleNames = {
//   c: 'Celsius',
//   f: 'Fahrenheit'
// };
// class TemperatureInput extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//     this.state = {temperature: ''};
//   }

//   handleChange(e) {
//     //this.setState({temperature: e.target.value});
//     this.props.onTemperatureChange(e.target.value);
//   }

//   render() {
//     const temperature =  this.props.temperature;  //this.state.temperature;
//     const scale = this.props.scale;
//     return (
//       <fieldset>
//         <legend>Enter temperature in {scaleNames[scale]}:</legend>
//         <input value={temperature}
//                onChange={this.handleChange} />
//       </fieldset>
//     );
//   }
// }
// //---
// function BoilingVerdict(props) {
//   if (props.celsius >= 100) {
//     return <p>The water would boil.</p>;
//   }
//   return <p>The water would not boil.</p>;
// }
// class Calculator extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
//     this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
//     this.state = {temperature: '', scale: 'c'};
//   }

//   handleCelsiusChange(temperature) {
//     this.setState({scale: 'c', temperature});
//   }

//   handleFahrenheitChange(temperature) {
//     this.setState({scale: 'f', temperature});
//   }


// render() {
//   const scale = this.state.scale;
//   const temperature = this.state.temperature;
//   const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
//   const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
//     return (
//       <div>
//          <TemperatureInput
//           scale="c"
//           temperature={celsius}
//           onTemperatureChange={this.handleCelsiusChange} />
//         <TemperatureInput
//           scale="f"
//           temperature={fahrenheit}
//           onTemperatureChange={this.handleFahrenheitChange} />
//         <BoilingVerdict
//           celsius={parseFloat(celsius)} />
//       </div>
//     );
//   }
// }
// root.render(<Calculator/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
