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
    this.props.executeCommand("foreColor", `${this.props.foreColor}`);
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

  onColorSubmit = event => {
    this.doActionOnClick();
    this.updatePropsState(false);
  };

  onColorChange = event => {
    // if (event.target.value) {
    // this.setState({
    //   currentColor: event.target.value
    // });
    this.props.updatePropsState(event.target.value);
    // }
  };

  render() {
    return (
      <div className="main-div-containner" id="execcommand-forecolor">
        <div
          className="uppercase div-main-button"
          name="forecolor"
          style={{
            color: this.props.foreColor,
            backgroundColor: this.props.backColor
          }}
          onClick={event => this.doActionOnClick(event)}
        >
          {"A"}
        </div>
        <button
          className="main-sub-button"
          name="forecolor-options"
          id="execommand-forecolor-options"
          onClick={event => this.openHeaderOptions(event)}
        >
          <i className="fa fa-arrow-down" aria-hidden="true"></i>
        </button>
        <Popup
          id="forecolor-popup-user-Profile"
          targetId="execcommand-forecolor"
          isOpen={this.state.isOptionsOpen}
          updatePropsState={this.updatePropsState}
          popupWidth={124}
        >
          <input
            value={this.props.foreColor}
            onChange={event => {
              this.onColorChange(event);
            }}
            style={{ margin: "12px" }}
          />
          <br />
          <button
            onClick={event => {
              this.onColorSubmit(event);
            }}
          >
            Submit
          </button>
        </Popup>
      </div>
    );
  }
}

export default ForegroundColorCommand;
