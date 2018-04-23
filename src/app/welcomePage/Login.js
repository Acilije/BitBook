import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const LoginForm = (props) => {
    const handleChange = (event) => {
        props.sendInput(event);
    }

  return (
    <Tabs className="col m11 offset-m1">
      <TabList className="row">
        <Tab className="col m6 btn blue darken-4">Login</Tab>
        <Tab className="col m6 btn blue darken-3">Register</Tab>
      </TabList>

      <TabPanel>
        <div className="input-field">
          <span className="prefix"><i className="material-icons blue-grey-text text-darken-4">person</i></span>
          <input name="loginEmail" onChange={handleChange} placeholder="name" type="text" className="validate" />
       
          <br/>
          <span className="prefix"><i className="material-icons blue-grey-text text-darken-4">lock_outline</i></span>
          <input placeholder="password" onChange={handleChange} name="loginPassword" type="password" className="validate" />
          <p className="waves-effect waves-light btn col m12  light-green darken-3" onClick={props.login}>Login</p>
        </div>
      </TabPanel>

      <TabPanel>
        <div className="input-field">
          <span className="prefix"><i className="material-icons blue-grey-text text-darken-4">person</i></span>
          <input onChange={handleChange} name="personName" placeholder="name" type="text" className="validate" />
          <br/>
          <span className="prefix"><i className="material-icons blue-grey-text text-darken-4">email</i></span>
          <input onChange={handleChange} name="registerEmail" placeholder="email" type="email" className="validate" />
          <br/>
          <span className="prefix"><i className="material-icons blue-grey-text text-darken-4">lock_outline</i></span>
          <input onChange={handleChange} name="registerPassword" placeholder="password" type="password" className="validate" />
          <p className="waves-effect waves-light btn col m12 blue darken-3" onClick={props.register}>Register</p>
        </div>
      </TabPanel>
    </Tabs>
  );
};

export default LoginForm;
