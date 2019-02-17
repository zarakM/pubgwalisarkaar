import React, { Component } from 'react';
import "./css/register.css"
import * as firebase from "firebase";

class SignUp extends Component {
    constructor() {
        super()
        this.state = {
            
        }
        
    }

    signup= e =>{
        e.preventDefault();
        console.log(this.email.value+" "+this.password.value);
        firebase.auth().createUserWithEmailAndPassword(this.email.value, this.password.value).then(()=>{
            this.props.history.push("/")
        })
        .catch(function(error) {
            alert(error)
    });
    }
    render() {
        return (
            <div class="wrapper fadeInDown">
                <div id="formContent">

                    <div className="fadeIn first">
                        <img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon" />
                    </div>

                    <form onSubmit={this.signup}>
                        <input type="text" id="login" className="fadeIn second" name="login" placeholder="login" ref={em => (this.email = em)}/>
                        <input type="text" id="password" className="fadeIn third" name="login" placeholder="password" ref={em => (this.password = em)}/>
                        <input type="submit" className="fadeIn fourth" value="Register" />
                    </form>
                </div>
            </div>
        );
    }
}

export default SignUp;