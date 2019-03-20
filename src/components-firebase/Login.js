import React, { Component } from 'react';
import fire from './Fire';

class Login extends Component {
    constructor(props) {
      super(props);
      this.login = this.login.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
          email: '',
          password: '',

      }
    }
    login(event){
      event.preventDefault();
      fire.auth().signInWithEmailAndPassword(this.state.email , this.state.password).then((u)=>{
      }).catch((error) => {
        console.log(error);
      });
    }
  
    handleChange(event) {
      this.setState({ [event.target.name]: event.target.value });
    }
  
    render() {
      return (
        <div className="container">
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input value={this.state.email} onChange={this.handleChange} type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input value={this.state.password} onChange={this.handleChange} type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <button type="submit" onClick={this.login} class="btn btn-primary">Login</button>
          </form>
        
        </div>
    );
  }
}
export default Login;