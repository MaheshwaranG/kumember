import React, { Component } from 'react';

class HeadersCommand extends Component {
    constructor(props) {
        super(props);
    }

    doActionOnClick = (event) => {
        this.props.executeCommand('H1', null)
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <button className="uppercase" onClick={(event) => this.doActionOnClick(event)}>
                    <i className="fa fa-caret-down" aria-hidden="true"></i>
                </button>
            </div>
        )
    }
}

export default HeadersCommand;