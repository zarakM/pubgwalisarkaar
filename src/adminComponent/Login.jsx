import React, { Component } from 'react';
import { withRouter } from "react-router-dom"


class Login extends Component {
    state = {  }

    signin=e=>{
        e.preventDefault()
        if(this.email.value==="admin" && this.password.value==="admin123" ){
            this.props.history.push("/dashboard_admin");
        }
    }
    render() { 
        return ( 
            <div>
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
            </div>
         );
    }
}
 
export default Login;