import React from 'react';

export default class Sider extends React.Component{
    constructor(props){
        super(props);
        this.logoutfun=this.logoutfun.bind(this);
        this.openLeftMenu = this.openLeftMenu.bind(this);
    }
    openLeftMenu() {
        this.setState({"dummy":"empty"})
        document.getElementById("leftMenu").style.display = "block";
       // window.location.href ="#";
    }

     closeLeftMenu() {
        document.getElementById("leftMenu").style.display = "none";
    }
    logoutfun(){
        document.getElementById("leftMenu").style.display = "none";
        this.setState({"dummy":"empty"})
        window.localStorage.setItem("password","");
        //window.location.href ="#";

    }



    componentWillMount() {

    }
    render() {

        return(
            <div>
                <div className="w3-sidebar w3-bar-block w3-card w3-animate-left" style={{display:"none"}} id="leftMenu">
                    <button id="closeButton" onClick={this.closeLeftMenu} className="w3-bar-item w3-button w3-small">Close &times;</button>
                        <div>
                            <a onClick={this.closeLeftMenu} href="#/registration" className="w3-bar-item w3-button">Registration</a>
                              <a onClick={this.closeLeftMenu} href="#/login" className="w3-bar-item w3-button">Login</a>
                        </div>
                        </div>
                    <div className="w3-teal">
                        <button className="w3-button w3-teal w3-xlarge w3-left"
                                onClick={this.openLeftMenu}>&#9776;</button>
                              <span className="headerTitle">G Wing</span>

                    </div>


            </div>

    )
    }
}
