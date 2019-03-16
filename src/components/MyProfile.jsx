import React, { Component } from 'react';
import * as firebase from "firebase";
import Navbar from "./Navbar"
import Footer from "./Footer"
import avatar from './imgUtils/me.png';
import "./css/profile.css";
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import FileUploader from "react-firebase-file-uploader";

class MyProfile extends Component {
    constructor() {
        super()
        this.state = {
            profile: [],
            user_id: "null",
            edit: false,
            show: false,
            progress: 100
        }
    }

    componentDidMount() {
        let com = this
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                let com = this
                this.setState({ user_id: user.uid })
                firebase.database().ref().child("profiles/" + user.uid).once("value", snap => {
                    let url = snap.val().url
                    let email = snap.val().email
                    let name = snap.val().name
                    let clan = snap.val().clan
                    let pubg_id = snap.val().pubg_id
                    let rating = snap.val().rating
                    let number = snap.val().number
                    com.setState({
                        profile: ({ url, email, name, clan, pubg_id, rating, number })
                    });
                });
            }
            else {
                com.setState({ user_id: null })
                this.props.history.push("/")
            }
        })
    }

    edit = e => {
        e.preventDefault()
        this.setState({ edit: false })
        console.log(this.name.value)
        let up = {}
        up["profiles/" + this.state.user_id + "/name"] = this.name.value
        up["profiles/" + this.state.user_id + "/clan"] = this.clan.value
        up["profiles/" + this.state.user_id + "/pubg_id"] = this.pubg_id.value
        up["profiles/" + this.state.user_id + "/number"] = this.no.value

        firebase.database().ref().update(up).then(() => {
            let com = this
            firebase.auth().onAuthStateChanged(user => {
                if (user) {
                    let com = this
                    this.setState({ user_id: user.uid })
                    firebase.database().ref().child("profiles/" + user.uid).once("value", snap => {
                        let url = snap.val().url
                        let email = snap.val().email
                        let name = snap.val().name
                        let clan = snap.val().clan
                        let pubg_id = snap.val().pubg_id
                        let rating = snap.val().rating
                        let number = snap.val().number
                        com.setState({
                            profile: ({ url, email, name, clan, pubg_id, rating, number })
                        });
                    });
                }
                else {
                    com.setState({ user_id: null })
                }
            })
        }).catch(error => {
            alert(error)
        });
    }

    edit_button = e => {
        e.preventDefault()
        this.setState({ show: true });
        setTimeout(
            function () {
                this.setState({ edit: true, show: false });
            }
                .bind(this),
            3000
        );
    }

    handleChangeUsername = event => this.setState({ user_id: event.target.value });
    handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
    handleProgress = progress => this.setState({ progress });
    handleUploadError = error => {
        this.setState({ isUploading: false });
        console.error(error);
    };
    handleUploadSuccess = filename => {
        this.setState({ avatar: filename, progress: 100, isUploading: false });
        firebase
            .storage()
            .ref("images")
            .child(filename)
            .getDownloadURL()
            .then(url => {
                let up = {}
                up["profiles/" + this.state.user_id + "/url"] = url
                firebase.database().ref().update(up)
            });
    };


    render() {
        return (
            <div style={{marginTop:"14%"}}>
                <Navbar />
                <div className="container profile">
                {console.log(this.state.profile.url)}
                    <img className="avatar" src={this.state.profile.url} alt="display pic" />
                    <div className="pro-field">
                        {this.state.edit ?
                            <div>
                                <TextField
                                    id="standard-with-placeholder"
                                    label="NAME"
                                    placeholder="Placeholder"
                                    className={"textField pro-text"}
                                    margin="normal"
                                    defaultValue={this.state.profile.name}
                                    inputRef={ec => (this.name = ec)}
                                />
                                <TextField
                                    id="standard-helperText "
                                    label="CLAN"
                                    placeholder="Placeholder"
                                    className={"textField pro-text"}
                                    margin="normal"
                                    defaultValue={this.state.profile.clan}
                                    inputRef={ec => (this.clan = ec)}
                                />
                                <TextField
                                    id="standard-with-placeholder"
                                    label="PUBD ID"
                                    placeholder="Placeholder"
                                    className={"textField pro-text"}
                                    margin="normal"
                                    defaultValue={this.state.profile.pubg_id}
                                    inputRef={ec => (this.pubg_id = ec)}
                                />
                                <TextField
                                    id="standard-with-placeholder"
                                    label="EASY PAISA NO"
                                    inputRef={ec => (this.no = ec)}
                                    placeholder="Placeholder"
                                    className={"textField pro-text"}
                                    margin="normal"
                                    defaultValue={this.state.profile.number}
                                />
                                <FileUploader
                                    accept="image/*"
                                    name="avatar"
                                    filename={this.state.user_id}
                                    storageRef={firebase.storage().ref("images")}
                                    onUploadStart={this.handleUploadStart}
                                    onUploadError={this.handleUploadError}
                                    onUploadSuccess={this.handleUploadSuccess}
                                    onProgress={this.handleProgress}
                                />
                                {this.state.progress}
                                <br />
                                <br />
                                {this.state.progress === 100 ?
                                    <button className="btn btn-success" style={{ width: "100%" }} onClick={this.edit}> Update</button>
                                    : null}
                            </div> :
                            <div>
                                <div className="values"><div style={{ color: "black" }}>Name</div><div>{this.state.profile.name}</div></div> <br />
                                <div className="values"><div style={{ color: "black" }}>Email</div><div>{this.state.profile.email}</div></div> <br />
                                <div className="values"><div style={{ color: "black" }}>Pubg Id</div><div>{this.state.profile.pubg_id}</div></div> <br />
                                <div className="values"><div style={{ color: "black" }}>Clan</div><div>{this.state.profile.clan}</div></div> <br />
                                <div className="values"><div style={{ color: "black" }}>Number</div><div>{this.state.profile.number}</div></div> <br />
                                <div className="values"><div style={{ color: "black" }}>Rating</div><div>{this.state.profile.rating}</div></div> <br />
                                <button className="btn btn-success" style={{ width: "100%" }} onClick={this.edit_button}> Edit</button>
                                <br /><br />
                                {this.state.show ? <CircularProgress />
                                    : null}
                            </div>}
                    </div>
                </div>

                <Footer />
            </div>
        );
    }
}

export default MyProfile;