import React, {Component} from "react";
import {OverlayTrigger, Tooltip, Popover} from "react-bootstrap";
import util from "./util.js";
import uuid from "uuid";
import {TableRowColumn} from "material-ui";

class CellComponent extends Component {
  constructor(props, context) {
    super(props, context);
  }

  getData() {
    if (typeof this.props.cellFormater === "function") {
      return <span>{
        this.props.cellFormater(this.props.data, this.props.dataRow, this.props.allData, this.props.columns,
          this.props.rowIndex)
      }</span>;
    } else {
      return <span>{this.props.data}</span>;
    }
  }

  getThirdPartyClass() {
    if (typeof this.props.cellClass === "string") {
      return this.props.cellClass;
    } else {
      if (typeof this.props.cellClass === "function") {
        return this.props.cellClass(this.props.data, this.props.dataRow, this.props.allData, this.props.columns,
          this.props.rowIndex);
      }
      return "";
    }
  }

  getStyles() {
    if (this.props.styler !== undefined) {
      if (typeof this.props.styler === "function") {
        return this.props.styler(this.props.data, this.props.dataRow, this.props.allData, this.props.columns,
          this.props.rowIndex);
      } else {
        return this.props.styler;
      }
    } else {
      return {};
    }
  }

  getRowSpan() {
    if (typeof this.props.rowSpan === "function") {
      return this.props.rowSpan(this.props.data, this.props.dataRow, this.props.allData, this.props.columns,
        this.props.rowIndex);
    } else {
      return this.props.rowSpan;
    }
  }

  render() {
    //console.log(Object.assign({}, this.getStyles(), {textAlign: "center", wordWrap: "break-word"}));
    return (
      <TableRowColumn styleName="container"
                      className={this.getThirdPartyClass()}
                      style={Object.assign({}, this.getStyles(), {textAlign: "center", wordWrap: "break-word", whiteSpace: "normal"})}
                      rowSpan={this.getRowSpan()}
      >
        {
          (()=> {
            if (this.props.tooltip !== null) {
              return <OverlayTrigger {...this.props.tooltip.overlayProps} overlay={
                <Tooltip {...this.props.tooltip.tooltipProps} id={`CellToolTip_${uuid.v4()}`}>
                  {
                    util.iff(typeof this.props.tooltip.value === "function", this.props.tooltip.value(this.props.data, this.props.dataRow, this.props.allData, this.props.columns, this.props.rowIndex), this.props.tooltip.value)
                  }
                </Tooltip>}>
                {this.getData()}
              </OverlayTrigger>;
            } else if (this.props.popover !== null) {
              return <OverlayTrigger {...this.props.popover.overlayProps} overlay={
                <Popover {...this.props.popover.popoverProps} id={`CellPopOver_${uuid.v4()}`}>
                  {
                    util.iff(typeof this.props.popover.value === "function", this.props.popover.value(this.props.data, this.props.dataRow, this.props.allData, this.props.columns, this.props.rowIndex), this.props.popover.value)
                  }
                </Popover>}>
                {this.getData()}
              </OverlayTrigger>;
            } else {
              return this.getData();
            }
          })()
        }
      </TableRowColumn>
    );
  }
}
CellComponent.defaultProps = {
  data: "",
  dataRow: {},
  allData: [],
  columns: [],
  tooltip: null,
  popover: null,
  rowSpan: 1
};
CellComponent.propTypes = {
  data: React.PropTypes.any,
  cellClass: React.PropTypes.any,
  cellFormater: React.PropTypes.func,
  dataRow: React.PropTypes.object,
  allData: React.PropTypes.array,
  columns: React.PropTypes.array,
  tooltip: React.PropTypes.any,
  popover: React.PropTypes.any,
  styler: React.PropTypes.any,
  rowSpan: React.PropTypes.any,
  rowIndex: React.PropTypes.any
};
export default CellComponent;
