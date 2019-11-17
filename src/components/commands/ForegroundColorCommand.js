import React, { Component } from "react";
import Popup from "../../MgComponents/Popup";
import SimpleList from "../../MgComponents/SimpleList";

class ForegroundColorCommand extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentColor: "#aa0"
    };
  }
  doActionOnClick = event => {
    this.props.executeCommand("foreColor", `${this.state.currentColor}`);
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

  onColorSubmit = stateStatus => {
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
        <div
          className="uppercase div-main-button"
          name="headers"
          style={{ color: this.state.currentColor }}
          onClick={event => this.doActionOnClick(event)}
        >
          {"A"}
        </div>
        <button
          className="main-sub-button"
          name="headers-options"
          id="execommand-headers-options"
          onClick={event => this.openHeaderOptions(event)}
        >
          <i className="fa fa-arrow-down" aria-hidden="true"></i>
        </button>
        <Popup
          id="forecolor-popup-user-Profile"
          targetId="execcommand-headers"
          isOpen={this.state.isOptionsOpen}
          updatePropsState={this.updatePropsState}
          popupWidth={"124px"}
        >
          <input value={this.state.currentColor} />
        </Popup>
      </div>
    );
  }
}

export default ForegroundColorCommand;
