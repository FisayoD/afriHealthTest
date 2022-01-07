import React from "react";
import Link from "./Link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBell, faCaretDown, faChevronDown, faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import githubIcon from "../assets/img/github-icon.svg";
import profileImage from "../assets/img/profile image.png";

export default class Nav extends React.Component {
    render() {
        return (
            <nav>
                <NavLeft />
                <NavMobile/>
                <NavRight />
            </nav>
        );
    }
}

class NavLeft extends React.Component {
    constructor() {
        super();

        this.state = {
            ddm1Display: false,
            ddm2Display: false,
            ddm3Display: false,
            displaySearchIcon: "block"
        };
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.toggleDropDownMenu = this.toggleDropDownMenu.bind(this);
    }

    toggleDropDownMenu(ddmStateName) {
        this.setState(
            (prevState) => {
                return {
                    [ddmStateName]: !prevState[ddmStateName]
                };
            }
        );
    }
    onFocus(event) {
        event.target.placeholder = "";
        event.target.style.color = "#404448";

        this.setState({
            displaySearchIcon: "none"
        });
    }

    onBlur(event) {
        event.target.placeholder = "Search";
        event.target.style.color = "white";

        this.setState({
            displaySearchIcon: "block"
        });
    }

    render() {
        return (
            <div className="navLeft">
                <a href="https://github.com/"><img src={githubIcon} /></a>
                <input type="text" placeholder="Search" onBlur={this.onBlur} onFocus={this.onFocus} />
                <FontAwesomeIcon style={{display: this.state.displaySearchIcon}} className="icon-search" icon={faSearch} />


                <Link btnValue="Pull requests" hrefVal="https://github.com/pulls"/>
                <Link btnValue="Issues" hrefVal="https://github.com/issues" />
                <Link btnValue="Marketplace" hrefVal="https://github.com/marketplace"/>
                <Link btnValue="Explore" hrefVal="https://github.com/explore"/>

            </div>
        );
    }
}

class NavRight extends React.Component {
    constructor() {
        super();

        this.state = {
            ddm1Display: false,
            ddm2Display: false,
        };

        this.toggleDropDownMenu = this.toggleDropDownMenu.bind(this);

    }

    toggleDropDownMenu(ddmStateName) {
        this.setState(
            (prevState) => {
                return {
                    [ddmStateName]: !prevState[ddmStateName]
                };
            }
        );
    }


    render() {
        return (
            <div className="navRight">

                <Link btnValue="" hrefVal="https://github.com/notifications"><FontAwesomeIcon icon={faBell} /></Link>

                <Link toggleDDM={this.toggleDropDownMenu} ddmStateName="ddm1Display"  cssClasses={["toggled-link"]}>
                    <FontAwesomeIcon icon={faPlus} style={{marginRight: "5px" }} />
                    <FontAwesomeIcon icon={faCaretDown} />
                    <div className="drop-down-menu" style={this.state.ddm1Display ? {display: "flex", animationName: "ddm-on"} : {display: "none", animationName: ""}}>
                        {/* <Link cssClasses={["ddm-item ddm-item-title-active"]} btnValue="Features" /> */}
                        <Link hrefVal="https://github.com/new" cssClasses={["ddm-item"]} btnValue="New repository" />
                        <Link hrefVal="https://github.com/new/import" cssClasses={["ddm-item"]} btnValue="Import repository" />
                        <Link hrefVal="https://gist.github.com/" cssClasses={["ddm-item"]} btnValue="New gist" />
                        <Link hrefVal="https://github.com/organizations/new" cssClasses={["ddm-item"]} btnValue="New organisation" />
                        <Link hrefVal="https://github.com/new/project" cssClasses={["ddm-item"]} btnValue="New project" />
                        {/* <hr style={{width: "200px", border: "0.5px solid rgba(0, 0, 0, 0.1)"}} />
                        <Link cssClasses={["ddm-item ddm-item-title-active"]} btnValue="Customer stories" />
                        <Link cssClasses={["ddm-item ddm-item-title-active"]} btnValue="Security" /> */}
                    </div>
                </Link>

                
                <Link toggleDDM={this.toggleDropDownMenu} ddmStateName="ddm2Display"
                    cssClasses={["toggled-link"]}>
                    <div className="profileImageNav"><img src={profileImage} /></div>
                    <FontAwesomeIcon icon={faCaretDown} />
                    <div className="drop-down-menu" style={this.state.ddm2Display ? {display: "flex", animationName: "ddm-on"} : {display: "none", animationName: ""}}>
                        <Link cssClasses={["ddm-item ddm-item-title-active"]} btnValue="Explore GitHub" />
                        <hr style={{width: "200px", border: "0.5px solid rgba(0, 0, 0, 0.1)"}} />
                        <Link cssClasses={["ddm-item ddm-item-title-inactive"]} btnValue="Learn & contribute" />
                        <Link cssClasses={["ddm-item"]} btnValue="Topics" />
                        <Link cssClasses={["ddm-item"]} btnValue="Collections" />
                        <Link cssClasses={["ddm-item"]} btnValue="Trending" />
                        <Link cssClasses={["ddm-item"]} btnValue="Learning Lab" />
                        <Link cssClasses={["ddm-item"]} btnValue="Open source guides" />
                        <hr style={{width: "200px", border: "0.5px solid rgba(0, 0, 0, 0.1)"}} />
                        <Link cssClasses={["ddm-item ddm-item-title-inactive"]} btnValue="Connect with others" />
                        <Link cssClasses={["ddm-item"]} btnValue="Events" />
                        <Link cssClasses={["ddm-item"]} btnValue="Community forum" />
                        <Link cssClasses={["ddm-item"]} btnValue="GitHub Education" />
                    </div>
                </Link>
                   
            </div>
        );
    }
}


class NavMobile extends React.Component {
    constructor() {
        super();
        this.state = {
            ddm1Display: false,
            ddm2Display: false,
        };
        this.toggleDropDownMenu = this.toggleDropDownMenu.bind(this);
    }

    toggleDropDownMenu(ddmStateName) {
        this.setState(
            (prevState) => {
                return {
                    [ddmStateName]: !prevState[ddmStateName]
                };
            }
        );
    }


    render() {
        return (
            <div className="navMobile">

                <Link toggleDDM={this.toggleDropDownMenu} ddmStateName="ddm1Display"  cssClasses={["toggled-link"]}>
                    <FontAwesomeIcon icon={faBars} />
                    <div className="drop-down-menu" style={this.state.ddm1Display ? {width: `${window.innerWidth}px`, display: "flex", animationName: "ddm-on"} : {display: "none", animationName: ""}}>
                        <Link hrefVal="https://github.com/new" cssClasses={["ddm-item"]} btnValue="New repository" />
                        <hr style={{ border: "0.5px solid #30363d"}} />
                        <Link hrefVal="https://github.com/new/import" cssClasses={["ddm-item"]} btnValue="Import repository" />
                        <hr style={{ border: "0.5px solid #30363d"}} />
                        <Link hrefVal="https://gist.github.com/" cssClasses={["ddm-item"]} btnValue="New gist" />
                        <hr style={{ border: "0.5px solid #30363d"}} />
                        <Link hrefVal="https://github.com/organizations/new" cssClasses={["ddm-item"]} btnValue="New organisation" />
                        <hr style={{ border: "0.5px solid #30363d"}} />
                        <Link hrefVal="https://github.com/new/project" cssClasses={["ddm-item"]} btnValue="New project" />
                        { 
                        /*<Link cssClasses={["ddm-item ddm-item-title-active"]} btnValue="Customer stories" />
                        <Link cssClasses={["ddm-item ddm-item-title-active"]} btnValue="Security" /> */}
                    </div>
                </Link>
                 <a href="https://github.com/"><img src={githubIcon} /></a>

                <Link btnValue="" hrefVal="https://github.com/notifications"><FontAwesomeIcon icon={faBell} /></Link>
            </div>
        );
    }
}
