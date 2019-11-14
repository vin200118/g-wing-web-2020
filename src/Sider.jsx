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
        window.location.href ="#";
    }

     closeLeftMenu() {
        document.getElementById("leftMenu").style.display = "none";
    }
    logoutfun(){
        document.getElementById("leftMenu").style.display = "none";
        this.setState({"dummy":"empty"})
        window.localStorage.setItem("password","");
        window.location.href ="#";

    }



    componentWillMount() {
        let url = window.location.href;

        if((url.indexOf("permission=admin@cs@event") !== -1 || window.localStorage.getItem("permission") === "admin")
            && url.indexOf("permission=user") === -1 ){
            window.localStorage.setItem("permission", "admin");
        }else{
            window.localStorage.setItem("permission", "user");
        }
        if(url.indexOf("permission=admin@cs@event") !== -1 )
        window.location.href =  window.location.href.replace("permission=admin@cs@event","");

        if(url.indexOf("permission=user") !== -1 ) {
            window.localStorage.setItem("password", "");
            window.location.href = window.location.href.replace("permission=user", "");
        }
    }
    render() {

        return(
            <div>
                <div className="w3-sidebar w3-bar-block w3-card w3-animate-left" style={{display:"none"}} id="leftMenu">
                    <button id="closeButton" onClick={this.closeLeftMenu} className="w3-bar-item w3-button w3-small">Close &times;</button>

                    { window.localStorage.getItem("permission") === "admin" ?
                        <div>

                            { window.localStorage.getItem("password") === "fox420"?
                        <div>
                            <a onClick={this.closeLeftMenu} href="?#/event/registration" className="w3-bar-item w3-button">Registration</a>
                            <a onClick={this.closeLeftMenu} href="?#/status" className="w3-bar-item w3-button">Status</a>
                            <a onClick={this.closeLeftMenu} href="?#/event/admin_gift" className="w3-bar-item w3-button">Gift</a>
                            <a onClick={this.closeLeftMenu} href="?#/event/admin_lunch" className="w3-bar-item w3-button">Lunch</a>

                        </div>:""}

                            <div>
                                {window.localStorage.getItem("password") === "fox420" ?
                                    <a onClick={this.logoutfun} href="#"
                                       className="w3-bar-item w3-button loginoutbtn">Logout</a>
                                    :
                                    <a onClick={this.closeLeftMenu} href="?#/event/admin_login"
                                       className="w3-bar-item w3-button loginoutbtn">Login</a>

                                }
                            </div>

                        </div>:""
                    }


                </div>
                {window.localStorage.getItem("permission") === "admin" ?
                    <div className="w3-teal">
                        <button className="w3-button w3-teal w3-xlarge w3-left"
                                onClick={this.openLeftMenu}>&#9776;</button>
                        <span className="headerTitle">ADJF Advent</span>

                    </div>: <div className="w3-teal">

                        <span className="headerTitle">ADJF Advent</span>

                    </div>
                }

            </div>

    )
    }
}

