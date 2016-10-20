import React, {Component} from "react";
import {Table} from "./../src/index";

var tableExampleData = {
  example: {
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
            return <p>Link to something</p>;
          },
          popoverProps: {
            title: "Popover",
            style: {
              width: "400px"
            }
          },
          overlayProps: {
            trigger: "click"
          },
          shouldShowPopover: function (cellData) {
            if (cellData === null || cellData === undefined) {
              return false;
            } else {
              return true;
            }
          }
        },

      },
      {
        id: "lastDayPrice",
        label: "lastDayPrice",
        tooltip: {
          value: function () {
            return <p>Link</p>;
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
      }, {
        category: "roti",
        name: "Aam",
        price: null,
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
