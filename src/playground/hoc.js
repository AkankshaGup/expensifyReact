/*import React from 'react';
import ReactDOM from 'react-dom';

const Info=(props)=>(
  <div>
  <h1>info:</h1>
  <p>The info is: {props.info}</p>
  </div>
)
const withAdminWarning=(WrappedComponent)=>{
return (props)=>(
  <div>
  {props.isAdmin && <p>This is private info. Please dont share!</p>}
  <WrappedComponent {...props}/>
  </div>
)
}

const AdminInfo=withAdminWarning(Info);
const requireAuthenticatin=(WrappedComponent)=>{
return (props)=>(
  <div>
  {props.isAuthenticated ?<WrappedComponent {...props} />
  : <p>Please login to view info!</p>}
  
  </div>
)
}
const AuthInfo=requireAuthenticatin(Info)
//ReactDOM.render(  <AdminInfo isAdmin={true} info="There are the detail"/>,document.getElementById('root'));
ReactDOM.render(
  <AuthInfo isAuthenticated={true} info="There are the detail"/>,
document.getElementById('root')
);*/
