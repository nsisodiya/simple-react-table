import React, {Component} from "react";
import {Table} from "./../src/index";

var tableExampleData = {
  example: {
    extraHeaders: [
      {
        label: "Arrival Date",
        rowSpan: 2,
        style: {
          textAlign: "center",
        }
      },
      {
        label: "Market Demand",
        rowSpan: 2,
        style: {
          textAlign: "center"
        }
      },
      {
        label: "Channels",
        colSpan: 2,
        style: {
          textAlign: "center"
        }
      }
    ],
    columns: [
      {
        id: "category",
        autoRowSpan: true,
        label: "Type"
      },
      {
        id: "name",
        label: "Fruit Name",
        cellClass: function () {
          return "testClass";
        }
      },
      {
        id: "price",
        label: "Price",
        cellFormater: function (data, dataRow) {
          if (dataRow.lastDayPrice < dataRow.price) {
            return `$${data}`;
          } else {
            return `$${data}`;
          }
        },
        styles: function (data, dataRow) {
          if (dataRow.lastDayPrice < dataRow.price) {
            return {
              color: "red"
            };
          } else {
            return {
              color: "green"
            };
          }
        },
        popover: {
          value: function () {
            return <h1>This is Sample Popover</h1>;
          },
          popoverProps: {
            title: "Popover",
            style: {
              width: "400px"
            }
          },
          overlayProps: {
            trigger: "click"
          }
        }
      },
      {
        id: "lastDayPrice",
        label: "lastDayPrice",
        tooltip: {
          value: function () {
            return <h1>This is Sample Popover</h1>;
          },
          tooltipProps: {},
          overlayProps: {}
        }
      }
    ],
    data: [
      {
        category: "sabji",
        name: "Bhindi",
        price: 34,
        lastDayPrice: 20
      },
      {
        category: "sabji",
        name: "Aam",
        price: 90,
        lastDayPrice: 100
      }
    ]
  }
};

class TableExample extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className={this.props.className} styleName="container">
        <Table {...tableExampleData.example}/>
      </div>
    );
  }
}
TableExample.defaultProps = {};
TableExample.propTypes = {};
export default TableExample;
