import React, { Component } from "react";
import Popup from "../../MgComponents/Popup";
import SimpleList from "../../MgComponents/SimpleList";

class HeadersTag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentHeader: "1",
      options: {
        1: "H1",
        2: "H2",
        3: "H3",
        4: "H4",
        5: "H5",
        6: "H6",
        7: "div"
      },
      optionsTag: {
        1: "<h1>H1</h1>",
        2: "<h2>H2</h2>",
        3: "<h3>H3</h3>",
        4: "<h4>H4</h4>",
        5: "<h5>H5</h5>",
        6: "<h6>H6</h6>",
        7: "Normal"
      },
      isOptionsOpen: false
    };
  }
  doActionOnClick = event => {
    this.props.executeCommand(
      "formatBlock",
      `<${this.state.options[this.state.currentHeader]}>`
    );
    if (event) {
      event.preventDefault();
    }
  };

  openHeaderOptions = event => {
    this.props.updatePopupState(!this.state.isOptionsOpen);
    this.setState({
      isOptionsOpen: !this.state.isOptionsOpen
    });
  };

  updatePropsState = status => {
    this.props.updatePopupState(status);
    this.setState({
      isOptionsOpen: status
    });
  };

  optionsChanged = stateStatus => {
    this.setState(
      {
        currentHeader: stateStatus
      },
      () => {
        this.doActionOnClick();
      }
    );
  };

  render() {
    return (
      <div className="main-div-containner" id="execcommand-headers">
        <button
          className="uppercase div-main-button"
          name="headers"
          onClick={event => this.doActionOnClick(event)}
        >
          {this.state.currentHeader == "7"
            ? `N`
            : `H${this.state.currentHeader}`}
        </button>
        <button
          className="main-sub-button"
          name="headers-options"
          id="execommand-headers-options"
          onClick={event => this.openHeaderOptions(event)}
        >
          <i className="fa fa-arrow-down" aria-hidden="true"></i>
        </button>
        <Popup
          id="header-popup-user-Profile"
          targetId="execcommand-headers"
          isOpen={this.state.isOptionsOpen}
          updatePropsState={this.updatePropsState}
          popupWidth={124}
        >
          <SimpleList
            id="header-option-list"
            options={this.state.optionsTag}
            selected={this.state.currentHeader}
            onChange={this.optionsChanged}
          />
        </Popup>
      </div>
    );
  }
}

export default HeadersTag;
