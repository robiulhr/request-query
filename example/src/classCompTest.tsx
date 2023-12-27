import { Component } from "react";

export class ApiUtility extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      data: null,
      error: null,
    };
  }
  async fetchData(url) {
    this.setState({ loading: true });
    try {
      const response = await fetch(url);
      const data = await response.json();
      this.setState({ data, loading: false, error: null });
    } catch (error) {
      this.setState({ error, loading: false });
    }
  }
  setState(newState) {
    this.state = { ...this.state, ...newState };
    // User-defined callback for state updates
    // this.onStateChange && this.onStateChange(this.state);
  }

  //   // Optional: Set a callback for state changes
  //   setOnStateChangeCallback(callback) {
  //     this.onStateChange = callback;
  //   }
  getState = () => {
    return { ...this.state };
  };

  render() {
    return null;
  }
}
