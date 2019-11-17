import React, { Component } from "react";

class SimpleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isStateChanged: false,
      isOpen: props.isOpen
    };
  }

  componentWillReceiveProps(nextProps) {}

  onListItemClick = event => {
    console.log("Click");
    if (!event.currentTarget.classList.contains("selected")) {
      this.props.onChange(event.currentTarget.dataset.key);
    }
  };

  onClickComponent = event => {};
  render() {
    return (
      <div id={this.props.id} className="mg-simple-list-parent">
        {Object.keys(this.props.options).map((value, index) => {
          return (
            <div
              data-key={value}
              key={value}
              id={value}
              dangerouslySetInnerHTML={{ __html: this.props.options[value] }}
              className={this.props.selected == value ? "selected" : ""}
              onClick={event => {
                this.onListItemClick(event);
              }}
            ></div>
          );
        })}
      </div>
    );
  }
}

export default SimpleList;
