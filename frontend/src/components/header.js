import React from "react";

// header component
export class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <a href="/" style={{textDecoration:"none"}}><h1 className="title">Caheroyan House and Farm</h1></a>
            </div>
        );
    }
}