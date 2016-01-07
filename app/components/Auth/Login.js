import React from 'react';
import {Link} from 'react-router';
import {_} from 'underscore';

class Login extends React.Component {
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

            <form action="/login" method="post">
                <div class="form-group">
                    <label>Email</label>
                    <input type="text" class="form-control" name="email" />
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" class="form-control" name="password" />
                </div>

                <button type="submit" class="btn btn-warning btn-lg">Login</button>
            </form>

            <hr />

            <p>Need an account?
              <a href="/signup">Signup</a>
            </p>
            <p>Or go
              <a href="/">home</a>.
            </p>

        </div>
      </div>
    );
  }
}

export default Login;
