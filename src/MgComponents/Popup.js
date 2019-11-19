import React, { Component } from "react";

class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isStateChanged: false,
      isOpen: props.isOpen
    };
  }
  // componentDidMount() {
  //   document.addEventListener("click", () => {
  //     console.log("popup  click");
  //   });
  //   // window.onclick = this.windowClickListners;
  // }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isOpen !== this.props.isOpen) {
      let popup = document.getElementById(this.props.id);
      let popupBackground = document.getElementById(
        `${this.props.id}-background`
      );
      if (nextProps.isOpen) {
        let target = document.getElementById(this.props.targetId);
        popup.style.top = target.offsetHeight + 5 + "px";
        // popup.style.right =
        //   window.innerWidth + this.props.popupWidth - target.offsetLeft + "px";
        popup.style.left = 0;
        popup.style.display = "block";
        popupBackground.style.display = "block";
        // popup.style.width = this.props.popupWidth;
        document.addEventListener("click", this.popupWindowClick);
        this.setState({ isOpen: nextProps.isOpen, isStateChanged: true });
        //   return { isOpen: nextProps.isOpen, isStateChanged: true };
      } else {
        if (document) {
          document.removeEventListener("click", this.popupWindowClick);
        }
        popup.style.display = "none";
        popupBackground.style.display = "none";
      }
    }
  }

  windowClickListners = event => {
    let modal = document.getElementById(this.props.id);
    if (
      event.target.id !== this.props.id &&
      event.target.id !== this.props.targetId &&
      this.state.isOpen &&
      !this.state.isStateChanged
    ) {
      // this.setState({ isOpen: false, isFromState: true });
      let popup = document.getElementById(this.props.id);
      popup.style.display = "none";
      this.setState({ isOpen: false });
    } else {
      this.setState({ isStateChanged: false });
    }
  };

  popupWindowClick = event => {
    let popup = document.getElementById(this.props.id);
    let popupBackground = document.getElementById(
      `${this.props.id}-background`
    );
    if (event.target == popupBackground) {
      popup.style.display = "none";
      popupBackground.style.display = "none";
      this.props.updatePropsState(false);
    }
    // this.setState({ isOpen: false, isStateChanged: true });

    // document.removeEventListener("click", this.popupWindowClick);
  };

  onClickComponent = event => {};
  render() {
    return (
      <div>
        <div
          className="mg-popup"
          id={this.props.id}
          style={{ top: 10 }}
          onClick={event => this.onClickComponent}
        >
          <div>{this.props.children}</div>
        </div>
        <div
          className="mg-popup-background"
          id={`${this.props.id}-background`}
        ></div>
      </div>
    );
  }
}

export default Popup;
