import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle';
import Navbar from "./Navbar"
import Footer from "./Footer"

class PrivacyPolicy extends Component {

    render() {
        return (
            <React.Fragment>
                <br />
                <Navbar />
                <div className="container epage" style={{ minHeight: "350px" }}>
                    <div className="row" >
                        <h3 className="epage-heading"> Privacy Policy</h3>
                        <p className="epage">This privacy policy explains our policy regarding the collection, use, disclosure and transfer of your information by Herpenza Technologies Pvt Ltd (hereafter to be referred as the "company"), on our platforms (referred to as “sites”) for delivery of information, products, offerings and content via any mobile or internet connected device. This Policy forms part and parcel of the “Terms of Use. This Privacy Policy is applicable to persons who aces, browse or use the services (“user”).
                
                The company respects the privacy of the users of the services and is committed to protect it in all respects. The information about the user as collected by the company is:
                
                (a) information supplied by users
                (b) information automatically tracked while navigation and
                
                INFORMATION RECEIVED, COLLECTED AND STORED BY THE COMPANY
                
                INFORMATION SUPPLIED BY USERS
                
                Registration data:
                When you register on the sites for the service, we ask that you to provide basic contact information such as your name, contact number, occupation, and email address game IDs etc. When you register using your other accounts like on Facebook, Twitter, Gmail etc. we shall retrieve information from such account to continue to interact with you and to continue providing the Services.
                
                Paid service data:
                When you choose any subscription or paid service provided as part of our Services, we or our payment gateway provider may collect your purchase, address or billing information, including your credit card number and expiration date etc.
                
                Voluntary information:
                We may collect additional information at other times, including but not limited to, when you provide feedback, comments, change your content or email preferences, respond to a survey, or any communications with us.
                
                B. INFORMATION AUTOMATICALLY COLLECTED/ TRACKED WHILE NAVIGATION
                Cookies
                To improve the responsiveness of the sites for our users, we may use cookies;, or similar electronic tools to collect Information to assign each visitor a unique ID.
                
                Log File Information
                We automatically collect limited information about your computer's connection to the Internet, mobile number, including your IP address, when you visit our site, application or service. Your IP address is a number that lets computers attached to the Internet know where to send you data such as the pages you view. We automatically receive and log information from your browser,including your IP address, your computer's name, your operating system, browser type and version, CPU speed, and connection speed.
                
                INFORMATION USE BY THE COMPANY
                
                The information as supplied by the users enables us to improve the services and provide you the most user-friendly experience. In some cases/provision of certain service(s) or utility(ies), we may require your contact address as well. Any personally identifiable information provided by you will not be considered as sensitive if it is freely available and / or accessible in the public domain like any comments, messages, blogs, scribbles available on social platforms like Facebook, twitter etc.
                
                INFORMATION SHARING
                
                The Company shares your Information with any third party without obtaining the prior consent of the User in the following limited circumstances:
                a) When it is requested or required by law or by any court or governmental agency or authority to disclose, for the purpose of verification of identity, or for the prevention, detection, investigation including but not limited to cyber incidents, or for prosecution and punishment of offences. These disclosures are made in good faith and belief that such disclosure is reasonably necessary for enforcing these Terms or for complying with the applicable laws and regulations.
                b) The Company proposes to share such Information to conduct its business and to share such Information within its group companies and officers and employees of such group companies for the purpose of processing personal information on its behalf. We also ensure that these recipients of such Information agree to process such information based on our instructions and in compliance with this Policy and any other appropriate confidentiality and security measures.
                c) The Company may present Information to our advertisers and third parties - to help them understand our audience and confirm the value of advertising on our Sites – however it is usually in the form of aggregated statistics on traffic to various pages within our site.
                d) The Company may share your Information regarding your activities on Sites with third party social websites to populate your social wall that is visible to other people however you will have an option to set your privacy settings, where you can decide what you would like to share or not to share with others.
                e) We may share your Information to enforce or protect our rights or any or all of its affiliates, associates, employees, directors or officers or when we have reason to believe that disclosing
                
The Company shall not be responsible for any communication, if addressed, to any non-designated person</p>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        )

    }
}
export default PrivacyPolicy;