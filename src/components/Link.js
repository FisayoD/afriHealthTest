import React from "react";

export default class Link extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <a className={this.props.cssClasses && this.props.cssClasses.join(" ")} 
                onMouseOver={() => this.props.toggleDDM && this.props.toggleDDM(this.props.ddmStateName)}
                onMouseOut={() => this.props.toggleDDM && this.props.toggleDDM(this.props.ddmStateName)} 
                href={this.props.hrefVal ? this.props.hrefVal : "#"}>{this.props.btnValue} {this.props.children}</a>
        );
    }
}
