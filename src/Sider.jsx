import React from 'react';

export default class Sider extends React.Component{
    openLeftMenu() {
        document.getElementById("leftMenu").style.display = "block";
        window.location.href ="#";
    }

     closeLeftMenu() {
        document.getElementById("leftMenu").style.display = "none";
    }
    subMenuPresent(){
        let subMenu = document.getElementById("presentSubMenu");
        if(subMenu.className.indexOf("show") === -1){
            subMenu.className="show";

        }else{
            subMenu.className="hide";
        }
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

        if(url.indexOf("permission=user") !== -1 )
            window.location.href =  window.location.href.replace("permission=user","");
    }
    render() {

        return(
            <div>
                <div className="w3-sidebar w3-bar-block w3-card w3-animate-left" style={{display:"none"}} id="leftMenu">
                    <button id="closeButton" onClick={this.closeLeftMenu} className="w3-bar-item w3-button w3-small">Close &times;</button>
                    <a onClick={this.closeLeftMenu} href="?#/event/registration" className="w3-bar-item w3-button">Registration</a>
                    <a onClick={this.closeLeftMenu} href="?#/status" className="w3-bar-item w3-button">Status</a>
                    { window.localStorage.getItem("permission") === "admin" ?
                        <div>
                            <a onClick={this.subMenuPresent} href="#" className="w3-bar-item w3-button">Admin <i
                                className="fa fa-caret-down"></i></a>
                            <div id="presentSubMenu" className="hide">
                            <a onClick={this.closeLeftMenu} href="?#/event/admin_gift" className="w3-bar-item w3-button">Gift</a>
                            <a onClick={this.closeLeftMenu} href="?#/event/admin_lunch" className="w3-bar-item w3-button">Lunch</a>
                            </div>
                        </div>:""
                    }


                </div>

                <div className="w3-teal">
                    <button className="w3-button w3-teal w3-xlarge w3-left" onClick={this.openLeftMenu}>&#9776;</button>
                        <span className="headerTitle">Pune Event App</span>

                </div>

            </div>

    )
    }
}

