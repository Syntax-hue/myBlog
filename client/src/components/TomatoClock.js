import React, { Component } from "react";

const btnStyle = { margin: 5, width: "12vh" };

export default class TomatoClock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timer: this.props.tomatoTime,
      pause: this.props.pauseTime,
      startBtn: true,
      timeOutID: "",
    };
    this.handleStart = this.handleStart.bind(this);
    this.handleStop = this.handleStop.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  componentDidUpdate() {
    if (this.state.timer === 0) clearInterval(this.state.timeOutID);
  }

  handleStart(e) {
    this.setState({
      startBtn: !this.state.startBtn,
    });

    let timerID = setInterval(() => {
      this.setState((prev) => ({
        timer: prev.timer - 1,
      }));
    }, 1000);

    this.setState({
      timeOutID: timerID,
    });
  }

  handleStop(e) {
    clearInterval(this.state.timeOutID);
    this.setState({
      startBtn: !this.state.startBtn,
    });
  }

  handleReset() {
    clearInterval(this.state.timeOutID);
    this.setState({
      timer: this.props.tomatoTime,
      startBtn: true,
    });
  }

  render() {
    let minutes = Math.floor((this.state.timer % 3600) / 60);
    let seconds = Math.floor(this.state.timer % 60);
    let displayMinutes = minutes < 10 ? "0" + minutes : minutes;
    let displaySeconds = seconds < 10 ? "0" + seconds : seconds;
    let timeText = `${displayMinutes}:${displaySeconds}`;
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-3"></div>
          <div className="col-xs-6">
            <div className="timer">
              <h1>{this.props.title}</h1>
              <h2>{timeText}</h2>
              {this.state.startBtn ? (
                <button
                  className="btn btn-primary"
                  onClick={this.handleStart}
                  style={btnStyle}
                >
                  Start
                </button>
              ) : (
                <button
                  className="btn btn-primary"
                  onClick={this.handleStop}
                  style={btnStyle}
                >
                  Stop
                </button>
              )}
              <button
                className="btn btn-primary"
                onClick={this.handleReset}
                style={btnStyle}
              >
                Reset
              </button>
            </div>
          </div>
          <div className="col-xs-3"></div>
        </div>
      </div>
    );
  }
}
