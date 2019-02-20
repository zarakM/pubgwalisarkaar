import React, { Component } from 'react';
import Navbar from "./Navbar"
import Footer from "./Footer"

class Policies extends Component {
    state = {}
    render() {
        return (
            <div className="container">
                <Navbar />
                <br />
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" id="about-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="privacy-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Profile</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Contact</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="faq-tab" data-toggle="tab" href="#faq" role="tab" aria-controls="faq" aria-selected="false">FAQ</a>
                    </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="about-tab"><Navbar/></div>
                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="privacy-tab"><Footer/></div>
                    <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab"><Navbar/></div>
                    <div class="tab-pane fade" id="faq" role="tabpanel" aria-labelledby="faq-tab"><Footer/></div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Policies;