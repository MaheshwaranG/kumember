import React, { Component } from 'react';

class PasteCommand extends Component {
    constructor(props) {
        super(props);
    }

    doActionOnClick = (event) => {
        this.props.executeCommand('paste', null)
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <button className="uppercase" onClick={(event) => this.doActionOnClick(event)}>
                    <i className="fa fa-clipboard" aria-hidden="true"></i>
                </button>
            </div>
        )
    }
}

export default PasteCommand;