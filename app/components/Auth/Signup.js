import React from 'react';
import {Link} from 'react-router';
import {_} from 'underscore';

class Signup extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }
  componentWillUnmount() {

  }


  render() {
    return (
      <div className="container">
        <div className="col-sm-6 col-sm-offset-3">
            <h1><span className="fa fa-sign-in"></span> Signup</h1>

            <form action="/signup" method="post">
              <div className="form-group">
                  <label>First Name</label>
                  <input type="text" className="form-control" name="firstName" />
              </div>
              <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" className="form-control" name="lastName" />
              </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" className="form-control" name="email" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" name="password" />
                </div>

                <button type="submit" className="btn btn-warning btn-lg">Signup</button>

            </form>

            <hr />

            <p>Already have an account?
              <a href="/login">Login</a>
            </p>
            <p>Or go
              <a href="/">home</a>.
            </p>

        </div>
      </div>
    );
  }
}

export default Signup;
