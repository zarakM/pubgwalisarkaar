import React, { Component } from 'react';
import * as firebase from "firebase";


class SignIn extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    
    signin=e=>{
        e.preventDefault()
        firebase.auth().signInWithEmailAndPassword(this.email.value, this.password.value).then(()=>{
            this.props.history.push("/")
        }).catch(function(error) {
            alert(error.message)
          });
    }
    render() {
        return (
            <div class="wrapper fadeInDown">
                <div id="formContent">

                    <div className="fadeIn first">
                        <img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon" />
                    </div>

                    <form onSubmit={this.signin}>
                        <input type="text" id="login" className="fadeIn second" name="login" placeholder="login" ref={em => (this.email = em)}/>
                        <input type="text" id="password" className="fadeIn third" name="login" placeholder="password" ref={em => (this.password = em)}/>
                        <input type="submit" className="fadeIn fourth" value="Log In" />
                    </form>
                </div>
            </div>
        );
    }
}

export default SignIn;