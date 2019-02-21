import React, { Component } from 'react';
import Navbar from "./Navbar"
import Footer from "./Footer"
import TermsofUse from './TermsofUse'
import About from './About'
import ContactUs from './ContactUs'
import Faq from './Faq'
import PrivacyPolicy from './PrivacyPolicy'
import WorkWithUs from './WorkWithUs'
import * as firebase from "firebase"

class Policies extends Component {
    state = {}

    componentDidMount(){
        let com = this
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
            
            }
            else {
                console.log("hoala")
                com.props.history.push("/starter")
            }
        })
    }
    render() {
        return (
            <div className="container">
                <Navbar />
                <br />
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" id="PrivacyPolicy-tab" data-toggle="tab" href="#PrivacyPolicy" role="tab" aria-controls="home" aria-selected="true">Privacy Policy</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="TermsofUse-tab" data-toggle="tab" href="#TermsofUse" role="tab" aria-controls="profile" aria-selected="false">Terms of Use</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="About-tab" data-toggle="tab" href="#About" role="tab" aria-controls="contact" aria-selected="false">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="Faq-tab" data-toggle="tab" href="#Faq" role="tab" aria-controls="faq" aria-selected="false">FAQ</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="ContactUs-tab" data-toggle="tab" href="#ContactUs" role="tab" aria-controls="faq" aria-selected="false">Contact Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="WorkWithUs-tab" data-toggle="tab" href="#WorkWithUs" role="tab" aria-controls="faq" aria-selected="false">Work With Us</a>
                    </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                <br/>
                    <div class="tab-pane fade show active" id="PrivacyPolicy" role="tabpanel" aria-labelledby="PrivacyPolicy-tab"><PrivacyPolicy/></div>
                    <div class="tab-pane fade" id="TermsofUse" role="tabpanel" aria-labelledby="TermsofUse-tab"><TermsofUse/></div>
                    <div class="tab-pane fade" id="About" role="tabpanel" aria-labelledby="About-tab"><About/></div>
                    <div class="tab-pane fade" id="Faq" role="tabpanel" aria-labelledby="Faq-tab"><Faq/></div>
                    <div class="tab-pane fade" id="ContactUs" role="tabpanel" aria-labelledby="ContactUs-tab"><ContactUs/></div>
                    <div class="tab-pane fade" id="WorkWithUs" role="tabpanel" aria-labelledby="WorkWithUs-tab"><WorkWithUs/></div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Policies;