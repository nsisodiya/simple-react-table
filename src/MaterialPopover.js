import React, {Component} from "react";
import {Popover} from "material-ui";

class MaterialPopover extends Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  handleClick(event) {
    // This prevents ghost click.
    event.preventDefault();
    this.setState({
      open: true,
      anchorEl: event.currentTarget
    });
  }

  handleRequestClose() {
    this.setState({
      open: false
    });
  }

  render() {
    return (
      <div onClick={this.handleClick}>
          <Popover
            open={this.state.open}
            anchorEl={this.state.anchorEl}
            anchorOrigin={this.props.anchorOrigin}
            targetOrigin={this.props.targetOrigin}
            onRequestClose={this.handleRequestClose}
            style={this.props.style}
          >
            {this.props.overlay}
        </Popover>
        {this.props.children}
      </div>
    );
  }
}
MaterialPopover.defaultProps = {
  anchorOrigin: {horizontal: "left", vertical: "bottom"},
  targetOrigin: {horizontal: "left", vertical: "top"}
};
MaterialPopover.propTypes = {
  overlay: React.PropTypes.any,
  anchorOrigin: React.PropTypes.object,
  targetOrigin: React.PropTypes.object,
  style: React.PropTypes.object
};
export default MaterialPopover;
