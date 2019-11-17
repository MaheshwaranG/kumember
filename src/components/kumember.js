import React, { Component } from "react";
import UndoCommand from "./commands/UndoCommand";
import RedoCommand from "./commands/RedoCommand";
import BoldCommand from "./commands/BoldCommand";
import CopyComand from "./commands/CopyCommand";
import CutCommand from "./commands/CutCommand";
import HeaderCommand from "./commands/HeadersTag";
import ForegroundColorCommand from "./commands/ForegroundColorCommand";

class Kumember extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editor: false,
      isPopupOpen: false
    };
  }

  componentDidMount() {
    const editor = document.getElementById("kumember-editor");
    editor.contentDocument.designMode = "on";
    this.setState({
      editor
    });
  }

  executeCommand = (command, value) => {
    this.state.editor.contentDocument.execCommand(command, false, value);

    setTimeout(() => {
      frames["kumember-editor"].document
        .getElementsByTagName("body")[0]
        .focus();
    }, 50);
  };

  blurKumemberContentContainer = isBlur => {
    let container = document.getElementById("kumember-content-container");
  };

  updatePopupState = status => {
    this.setState({
      isPopupOpen: status
    });
  };

  render() {
    return (
      <div className="kumember-layout-container">
        <div className="kumember-header-container">
          <button
            className="uppercase main-button"
            onClick={() => this.executeCommand("undo", null)}
          >
            <i className="fa fa-undo" aria-hidden="true"></i>
          </button>
          <button
            className="uppercase main-button"
            onClick={() => this.executeCommand("redo", null)}
          >
            <i className="fa fa-repeat" aria-hidden="true"></i>
          </button>
          <button
            className="uppercase main-button"
            onClick={() => this.executeCommand("copy", null)}
          >
            <i className="fa fa-files-o" aria-hidden="true"></i>
          </button>
          <button
            className="uppercase main-button"
            onClick={() => this.executeCommand("cut", null)}
          >
            <i className="fa fa-scissors" aria-hidden="true"></i>
          </button>
          <button
            className="uppercase main-button"
            onClick={() => this.executeCommand("bold", null)}
          >
            <i className="fa fa-bold" aria-hidden="true"></i>
          </button>
          <button
            className="uppercase main-button"
            onClick={() => this.executeCommand("italic", null)}
          >
            <i className="fa fa-italic" aria-hidden="true"></i>
          </button>
          <button
            className="uppercase main-button"
            onClick={() => this.executeCommand("strikeThrough", null)}
          >
            <i className="fa fa-strikethrough" aria-hidden="true"></i>
          </button>
          <button
            className="uppercase main-button"
            onClick={() => this.executeCommand("justtfyLeft", null)}
          >
            <i className="fa fa-align-left" aria-hidden="true"></i>
          </button>
          <button
            className="uppercase main-button"
            onClick={() => this.executeCommand("justifyCenter", null)}
          >
            <i className="fa fa-align-center" aria-hidden="true"></i>
          </button>
          <button
            className="uppercase main-button"
            onClick={() => this.executeCommand("justifyRight", null)}
          >
            <i className="fa fa-align-right" aria-hidden="true"></i>
          </button>
          <button
            className="uppercase main-button"
            onClick={() => this.executeCommand("justifyFull", null)}
          >
            <i className="fa fa-align-justify" aria-hidden="true"></i>
          </button>
          <button
            className="uppercase main-button"
            onClick={() => this.executeCommand("indent", null)}
          >
            <i className="fa fa-indent" aria-hidden="true"></i>
          </button>
          <button
            className="uppercase main-button"
            onClick={() => this.executeCommand("outdent", null)}
          >
            <i className="fa fa-dedent" aria-hidden="true"></i>
          </button>
          <button
            className="uppercase main-button"
            onClick={() => this.executeCommand("subscript", null)}
          >
            <i className="fa fa-subscript" aria-hidden="true"></i>
          </button>
          <button
            className="uppercase main-button"
            onClick={() => this.executeCommand("superscript", null)}
          >
            <i className="fa fa-superscript" aria-hidden="true"></i>
          </button>
          <button
            className="uppercase main-button"
            onClick={() => this.executeCommand("insertUnorderedList", null)}
          >
            <i className="fa fa-list-ul" aria-hidden="true"></i>
          </button>
          <button
            className="uppercase main-button"
            onClick={() => this.executeCommand("insertOrderedList", null)}
          >
            <i className="fa fa-list-ol" aria-hidden="true"></i>
          </button>
          <button
            className="uppercase main-button"
            onClick={() => this.executeCommand("insertParagraph", null)}
          >
            <i className="fa fa-paragraph" aria-hidden="true"></i>
          </button>
          <HeaderCommand
            executeCommand={this.executeCommand}
            updatePopupState={this.updatePopupState}
          />
          <ForegroundColorCommand
            executeCommand={this.executeCommand}
            updatePopupState={this.updatePopupState}
          />

          {/* <UndoCommand executeCommand={this.executeCommand} />
                    <RedoCommand executeCommand={this.executeCommand} />
                    <CopyComand executeCommand={this.executeCommand} />
                    <CutCommand executeCommand={this.executeCommand} />
                    <PasteCommand executeCommand={this.executeCommand} editor={this.state.editor} />
                    <BoldCommand executeCommand={this.executeCommand} />
                    <HeadersCommand executeCommand={this.executeCommand} />
                    <button className="uppercase" onClick={() => this.executeCommand('backColor', '#dfa')}>Color</button>
                    <button className="uppercase" onClick={() => this.executeCommand('copy', null)}>b</button>
                    <button className="uppercase" onClick={() => this.executeCommand('cut', null)}>b</button>
                    <button className="uppercase" onClick={() => this.executeCommand('delete', null)}>b</button>
                    <button className="uppercase" onClick={() => this.executeCommand('foreColor', 'red')}>b</button>
                    
                    <button className="uppercase" onClick={() => this.executeCommand('bold', null)}>b</button>
                    <button className="uppercase" onClick={() => this.executeCommand('bold', null)}>b</button> */}
        </div>
        <div
          className="kumember-content-container"
          id="kumember-content-container"
        >
          <iframe
            className="kumember-editor"
            name="kumember-editor"
            id="kumember-editor"
          ></iframe>
          {this.state.isPopupOpen ? (
            <div
              style={{
                backgroundColor: "#cdcdd0d1",
                zIndex: 1000,
                position: "absolute",
                opacity: "0.6",
                height: "100%"
              }}
              className="kumember-editor"
            ></div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Kumember;
