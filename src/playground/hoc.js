import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is :{props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>

            {props.isAdmin && <p>This is private info. Please dont share</p>}
            <WrappedComponent {...props}/>
        </div>
    )
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
        {props.isAuthenticated ? (<div><p>Welcome, User</p>
            <WrappedComponent {...props} /></div>) : <p>Please log-in</p>   
        }
        </div>

    )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);
//ReactDOM.render(    <AdminInfo isAdmin={false} info="This is the info"/>, document.getElementById('app'))
ReactDOM.render(    <AuthInfo isAuthenticated={true} info="This is the info"/>, document.getElementById('app'))