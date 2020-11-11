import React from "react";
import ReactDOM from "react-dom";

/**
 * Higher Order Component (HOC) - componente (HOC) que renderiza outro componente
 * 
 * Rutilizar códigos;
 * Renderizar 'hijacking'
 * Manipulação de 'props' 
 * 'state' abstrado
 */

const Info = (props) => (
  <div>
    <h1>Info:</h1>
    <p>This info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      <p>This is private info. Please don't share!</p>
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (<WrappedComponent {...props} />) : (<p>Please login to view the info.</p>)}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAthentication(Info);

// ReactDOM.render(<AdminInfo info="This is details" />, document.getElementById("app"));
ReactDOM.render(<AuthInfo isAuthenticated={true} />, document.getElementById("app"));