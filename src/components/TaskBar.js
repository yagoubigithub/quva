import React, { Component } from "react";

import CloseIcon from "@material-ui/icons/Close";
import RemoveIcon from "@material-ui/icons/Remove";
import Crop54Icon from "@material-ui/icons/Crop54";
import FilterNoneIcon from '@material-ui/icons/FilterNone';


const electron = window.require("electron");
    const { ipcRenderer } = electron;

export default class TaskBar extends Component {
  state = {
    isFullScreen : true,
    screenIcon : <FilterNoneIcon />
  };

  close = () => {
    ipcRenderer.send("closeWindow");
  };

  chnageScreen = () =>{
    ipcRenderer.send("changeScreen",{isFullScreen :!this.state.isFullScreen});
    this.setState({
        isFullScreen: ! this.state.isFullScreen,
        screenIcon : this.state.isFullScreen ? <Crop54Icon />  :  <FilterNoneIcon />
    })
  }
  minimize = () =>{
    ipcRenderer.send("minimizeWindow");
  }

  render() {
    return (
      <div
        style={{
          position: "fixed",
          zIndex: 99,
          backgroundColor: "black",
          width: "100%",
          height: 35,
          textAlign: "right",
          top : 0,
          left : 0,
          right : 0
        }}
      >
        <nav>
          <button
            id="close-btn"
            className="btn-taskbar"
            onClick={this.minimize}
            style={{ cursor: "pointer", color: "white",backgroundColor :  "rgba(0,0,0,0.8)", border :  "1px solid rgba(255,255,255,0.2)" , outline : "none"}}
          >
            <RemoveIcon />
          </button>
          <button
            id="close-btn"
            className="btn-taskbar"
            onClick={this.chnageScreen}
            style={{ cursor: "pointer", color: "white",backgroundColor :  "rgba(0,0,0,0.8)", border :  "1px solid rgba(255,255,255,0.2)", outline : "none" }}
          >
           {this.state.screenIcon}
          </button>
          <button
            id="close-btn"
            className="btn-taskbar"
            onClick={this.close}
            style={{ cursor: "pointer", color: "white",backgroundColor :  "rgba(0,0,0,0.8)", border :  "1px solid rgba(255,255,255,0.2)", outline : "none" }}
          >
            <CloseIcon />
          </button>
        </nav>
      </div>
    );
  }
}
