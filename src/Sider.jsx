import React from 'react';

export default class Sider extends React.Component{
    constructor(props){
        super(props);
        this.logoutfun = this.logoutfun.bind(this);
        this.openLeftMenu = this.openLeftMenu.bind(this);
        this.closeLeftMenu = this.closeLeftMenu.bind(this);
    }
    openLeftMenu() {
        this.setState({"dummy":"empty"})
        document.getElementById("leftMenu").style.display = "block";
       // window.location.href ="#";
    }

     closeLeftMenu() {
        document.getElementById("leftMenu").style.display = "none";
        this.setState({"dummy":"empty"})

    }
    logoutfun(){
        document.getElementById("leftMenu").style.display = "none";
        this.setState({"dummy":"empty"})
        window.localStorage.setItem("userDetails","");
        //window.location.href ="#";

    }

    render() {

        return(
            <div>
                <div className="w3-sidebar w3-bar-block w3-card w3-animate-left" style={{display:"none"}} id="leftMenu">
                    <button id="closeButton" onClick={this.closeLeftMenu} className="w3-bar-item w3-button w3-small">Close &times;</button>

                          { window.localStorage.getItem("userDetails") === null ||
                             window.localStorage.getItem("userDetails") === "" ?
                            <div>
                              <a onClick={this.closeLeftMenu} href="#/registration" className="w3-bar-item w3-button">Sign up</a>
                                <a onClick={this.closeLeftMenu} href="#/login" className="w3-bar-item w3-button">Log in</a>
                              </div>
                              :
                              <div>
                                  <a onClick={this.closeLeftMenu} href="#/home" className="w3-bar-item w3-button">Home</a>
                                  <a onClick={this.closeLeftMenu} href="#/userList" className="w3-bar-item w3-button">Users</a>
                                <a onClick={this.closeLeftMenu} href="#/registration" className="w3-bar-item w3-button">Profile</a>
                                  <a onClick={this.logoutfun} href="#/login" className="w3-bar-item w3-button">Logout</a>
                              </div>
                            }

                </div>
                    <div className="w3-teal">
                        <button className="w3-button w3-teal w3-xlarge w3-left"
                                onClick={this.openLeftMenu}>&#9776;</button>
                              <span className="headerTitle">Tamarind park - G Wing</span>

                    </div>


            </div>

    )
    }
}
