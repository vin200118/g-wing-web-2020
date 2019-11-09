import React from 'react';

export default class Sider extends React.Component{
    openLeftMenu() {
        document.getElementById("leftMenu").style.display = "block";
    }

     closeLeftMenu() {
        document.getElementById("leftMenu").style.display = "none";
    }
    subMenuPresent(){
        let subMenu = document.getElementById("presentSubMenu");
        if(subMenu.className.indexOf("show") == -1){
            subMenu.className="show";
            document.getElementById("futureSubMenu").className="hide"
            document.getElementById("aaasubMenu").className="hide"
        }else{
            subMenu.className="hide";
        }
    }
    subMenuFuture(){
        let subMenu = document.getElementById("futureSubMenu");
        if(subMenu.className.indexOf("show") == -1){
            subMenu.className="show";
            document.getElementById("presentSubMenu").className="hide"
            document.getElementById("aaasubMenu").className="hide"
        }else{
            subMenu.className="hide";
        }
    }

    subMenuAAA(){
        let subMenu = document.getElementById("aaasubMenu");
        if(subMenu.className.indexOf("show") == -1){
            subMenu.className="show";
            document.getElementById("presentSubMenu").className="hide"
            document.getElementById("futureSubMenu").className="hide"
        }else{
            subMenu.className="hide";
        }
    }


    render() {

        return(
            <div>
                <div className="w3-sidebar w3-bar-block w3-card w3-animate-left" style={{display:"none"}} id="leftMenu">
                    <button id="closeButton" onClick={this.closeLeftMenu} className="w3-bar-item w3-button w3-small">Close &times;</button>
                    <a onClick={this.closeLeftMenu} href="#/past" className="w3-bar-item w3-button">Past</a>

                    <a onClick={this.subMenuPresent} href="#" className="w3-bar-item w3-button" >Present <i className="fa fa-caret-down"></i></a>
                    <div id="presentSubMenu" className="hide">
                        <a onClick={this.closeLeftMenu} href="#/bdc" className="w3-bar-item w3-button">BDC</a>
                        <a onClick={this.closeLeftMenu} href="#/numbers" className="w3-bar-item w3-button">Numbers(Staff, Vendors,Diversity)</a>
                        <a onClick={this.closeLeftMenu} href="#/currentLeadership" className="w3-bar-item w3-button">Current Leadership</a>
                        <a onClick={this.closeLeftMenu} href="#/workStream" className="w3-bar-item w3-button">John's 6 Work Stream</a>
                    </div>
                    <a onClick={this.subMenuFuture} href="#" className="w3-bar-item w3-button" >Future <i className="fa fa-caret-down"></i></a>
                    <div id="futureSubMenu" className="hide">
                        <a onClick={this.closeLeftMenu} href="#/puneValueProposition" className="w3-bar-item w3-button">Pune Value Proposition</a>
                        <a onClick={this.closeLeftMenu} href="#/roadAhead" className="w3-bar-item w3-button">Road Ahead</a>
                    </div>
                    <a onClick={this.subMenuAAA} href="#" className="w3-bar-item w3-button" >Awards And Achievement <i className="fa fa-caret-down"></i></a>
                    <div id="aaasubMenu" className="hide">
                    <a onClick={this.closeLeftMenu} href="#/significant" className="w3-bar-item w3-button">Significant</a>
                    <a onClick={this.closeLeftMenu} href="#/otherActivities" className="w3-bar-item w3-button">OtherActivities</a>
                    </div>
                    <a onClick={this.closeLeftMenu} href="#/knowPune" className="w3-bar-item w3-button">Know Pune</a>


                </div>

                <div className="w3-teal">
                    <button className="w3-button w3-teal w3-xlarge w3-left" onClick={this.openLeftMenu}>&#9776;</button>
                        <span className="headerTitle">Pune Journey Booklet</span>

                </div>

            </div>

    )
    }
}

