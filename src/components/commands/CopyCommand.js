import React, { Component } from 'react';

class CopyCommand extends Component {
    constructor(props) {
        super(props);
    }

    doActionOnClick = (event) => {
        this.props.executeCommand('copy', null)
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <button className="uppercase" onClick={(event) => this.doActionOnClick(event)}>
                    <i className="fa fa-files-o" aria-hidden="true"></i>
                </button>
            </div>
        )
    }
}

export default CopyCommand;