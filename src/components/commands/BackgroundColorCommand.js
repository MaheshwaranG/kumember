import React, { Component } from "react";
import Popup from "../../MgComponents/Popup";
import SimpleList from "../../MgComponents/SimpleList";

class BackgroundColorCommand extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentColor: "#aa0"
    };
  }
  doActionOnClick = event => {
    this.props.executeCommand("backColor", `${this.props.backColor}`);
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
    this.props.updatePropsState(event.target.value);
  };

  render() {
    return (
      <div className="main-div-containner" id="execcommand-backcolor">
        <div
          className="uppercase div-main-button"
          name="backcolor"
          style={{
            color: this.props.foreColor,
            backgroundColor: this.props.backColor
          }}
          onClick={event => this.doActionOnClick(event)}
        >
          {"B"}
        </div>
        <button
          className="main-sub-button"
          name="backcolor-options"
          id="execommand-backcolor-options"
          onClick={event => this.openHeaderOptions(event)}
        >
          <i className="fa fa-arrow-down" aria-hidden="true"></i>
        </button>
        <Popup
          id="backcolor-popup-user-Profile"
          targetId="execcommand-backcolor"
          isOpen={this.state.isOptionsOpen}
          updatePropsState={this.updatePropsState}
          popupWidth={124}
        >
          <input
            value={this.props.backColor}
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

export default BackgroundColorCommand;
