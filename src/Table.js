import React, {Component} from "react";
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow} from "material-ui";
import Cell from "./Cell";
import util from "./util.js";
class TableComponent extends Component {
  constructor(props, context) {
    super(props, context);
    //console.log("%c Table Component -> Init ", "background: red; color: white");
  }

  getData(obj) {
    if (typeof obj.headerCellFormater === "function") {
      return <span>{
        obj.headerCellFormater()
      }</span>;
    } else {
      return <span>{obj.label}</span>;
    }
  }

  getHeader() {

    const defaultStyles = {
      wordWrap: "break-word",
      whiteSpace: "normal",
      textAlign: "center"
    };
    return (
      <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
        <TableRow>
          {
            this.props.extraHeaders.map((obj, index) => {
              if (typeof obj === "object") {
                return (
                  <TableHeaderColumn key={index}
                                     adjustForCheckbox={false}
                                     colSpan={obj.colSpan}
                                     rowSpan={obj.rowSpan}
                                     style={Object.assign({}, obj.headerStyles, defaultStyles)}
                                     className={obj.headerCellClass}
                  >{obj.label}
                  </TableHeaderColumn>
                );
              } else {
                return (
                  <TableHeaderColumn key={index}
                                     adjustForCheckbox={false}
                                     style={defaultStyles}
                  >{obj}
                  </TableHeaderColumn>
                );
              }
            })
          }
        </TableRow>
        <TableRow >
          {
            this.props.columns.map((obj, index)=> {
              if (typeof obj === "object") {
                return (
                  <TableHeaderColumn key={index}
                                     adjustForCheckbox={false}
                                     colSpan={obj.colSpan}
                                     rowSpan={obj.rowSpan}
                                     style={Object.assign({}, obj.headerStyles, defaultStyles)}
                                     className={obj.headerCellClass}
                  >{this.getData(obj)}</TableHeaderColumn>
                );
              } else {
                return (
                  <TableHeaderColumn key={index}
                                     adjustForCheckbox={false}
                                     style={defaultStyles}
                  >{obj}
                  </TableHeaderColumn>
                );
              }
            })
          }
        </TableRow>
      </TableHeader>
    );
  }

  organiseData(data, columns) {
    var organisedData = util.clone(data);
    columns.forEach(col=> {
      var runningRowSpanDetails = null;
      if (col.autoRowSpan === true) {
        organisedData.forEach((row, rowIndex)=> {
          row.rowSpanDetails = row.rowSpanDetails || {}; //if not, create
          row.rowSpanDetails[col.id] = row.rowSpanDetails[col.id] || {rowSpan: 1}; //if not, create

          if (row[col.id] === (organisedData[rowIndex - 1] && organisedData[rowIndex - 1][col.id])) {
            runningRowSpanDetails.rowSpan++;
            row.rowSpanDetails[col.id].rowSpan = 0;
          } else {
            runningRowSpanDetails = row.rowSpanDetails[col.id];
          }
        });
      }
    });
    return organisedData;
  }

  getRowSpan(rowData, headerKey) {
    var rowSpan = 1;
    if (rowData && rowData.rowSpanDetails && rowData.rowSpanDetails[headerKey] &&
      (typeof rowData.rowSpanDetails[headerKey].rowSpan === "number")) {
      rowSpan = rowData.rowSpanDetails[headerKey].rowSpan;
    }
    return rowSpan;
  }

  getBody() {
    const totalColumns = this.props.columnsWithData || this.props.columns;
    var organisedData = this.organiseData(this.props.data, totalColumns);
    return (
      <TableBody displayRowCheckbox={false}>
        {
          organisedData.map((d, i)=> {
            return (<TableRow key={i} striped={this.props.striped}>
              {
                totalColumns.map((h, j)=> {
                  if (this.getRowSpan(d, h.id) === 0) {
                    return undefined;
                  }
                  return (
                      <Cell key={j} data={d[h.id]} rowSpan={this.getRowSpan(d, h.id)} cellClass={h.cellClass}
                            tooltip={h.tooltip} popover={h.popover} cellFormater={h.cellFormater} styler={h.styles} dataRow={d}
                            allData={this.props.data} columns={this.props.columns} rowIndex={i}/>

                  );
                })
              }
            </TableRow>);
          })
        }
      </TableBody>
    );
  }
  render() {
    //console.log("%c Table Component -> Render ", "background: black; color: pink");
    return (
      <div styleName="container">
        <Table style={this.props.style} bodyStyle={{overflow: "visible"}} striped={this.props.striped} bordered={this.props.bordered} condensed={this.props.condensed}
          hover={this.props.hover} responsive={this.props.responsive} styleName="table-component">
          {this.getHeader()}
          {this.getBody()}
        </Table>
      </div>
    );
  }
}
TableComponent.defaultProps = {
  extraHeaders: [],
  data: [],
  striped: true,
  bordered: true,
  condensed: true,
  hover: true,
  responsive: true,
  columns: []
};
TableComponent.propTypes = {
  striped: React.PropTypes.bool,
  bordered: React.PropTypes.bool,
  condensed: React.PropTypes.bool,
  hover: React.PropTypes.bool,
  responsive: React.PropTypes.bool,
  showHeader: React.PropTypes.bool,
  rowNumber: React.PropTypes.bool,
  extraHeaders: React.PropTypes.array,
  data: React.PropTypes.array,
  columns: React.PropTypes.array,
  style: React.PropTypes.object,
  columnsWithData: React.PropTypes.array
};
export default TableComponent;
