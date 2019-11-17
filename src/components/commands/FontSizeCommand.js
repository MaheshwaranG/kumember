import React, { Component } from "react";
import Popup from "../../MgComponents/Popup";
import SimpleList from "../../MgComponents/SimpleList";

class FontSizeCommand extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentHeader: "1",
      options: {},

      isOptionsOpen: false
    };
  }
  componentWillMount() {
    let options = {};
    for (let intitial = 1; intitial <= 7; intitial++) {
      options[intitial] = intitial;
    }
    this.setState({
      options
    });
  }
  doActionOnClick = event => {
    let data = document.getElementById("kumember-editor");

    this.props.executeCommand(
      "formafontSizetBlock",
      `${this.state.currentHeader}`
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
      <div className="main-div-containner" id="execcommand-fontsize">
        <button
          className="uppercase div-main-button"
          name="fontsize"
          onClick={event => this.doActionOnClick(event)}
        >
          {`F-${this.state.currentHeader}`}
        </button>
        <button
          className="main-sub-button"
          name="fontsize-options"
          id="execommand-fontsize-options"
          onClick={event => this.openHeaderOptions(event)}
        >
          <i className="fa fa-arrow-down" aria-hidden="true"></i>
        </button>
        <Popup
          id="fontsize-popup-user-Profile"
          targetId="execcommand-fontsize"
          isOpen={this.state.isOptionsOpen}
          updatePropsState={this.updatePropsState}
          popupWidth={"124px"}
        >
          <SimpleList
            id="fontsize-option-list"
            options={this.state.options}
            selected={this.state.currentHeader}
            onChange={this.optionsChanged}
          />
        </Popup>
      </div>
    );
  }
}

export default FontSizeCommand;
