import React, { Component } from "react";
import moment from "moment";

export class ComponentToPrint extends React.PureComponent {
  render() {
    const { element } = this.props;
    let order = element && JSON.parse(element.order);
    console.log(element);
    return (
      <div>
        <h2 className="text-center">Cloud Cafe</h2>
        <hr></hr>
        <hr></hr>
        <h4 className="ms-5">Receipt</h4>
        <h4 className="ms-5">Address</h4>
        <hr style={{ borderTop: "1px dotted" }} />
        <table style={{ width: "50%" }}>
          <tr>
            <td align="center">day</td>
            <td align="center">{moment().format("dddd")}</td>
          </tr>
          <tr>
            <td align="center">time</td>
            <td align="center">{moment().format("LTS")}</td>
          </tr>
          <hr style={{ borderTop: "1px dotted" }} />
          <tr>
            <td align="center">Name</td>
            <td align="center">Amount</td>
            <td align="center">Price</td>
          </tr>
          {order &&
            order.map((elem) => {
              return (
                <tr>
                  <td align="center">{elem.name_en}</td>
                  <td align="center">{elem.acc}</td>
                  <td align="center">{elem.price * elem.acc}</td>
                </tr>
              );
            })}
          <hr style={{ borderTop: "1px dotted" }} />
          <tr>
            <td align="center">total</td>
            <td align="center">{element && element.total}</td>
          </tr>
        </table>
      </div>
    );
  }
}
