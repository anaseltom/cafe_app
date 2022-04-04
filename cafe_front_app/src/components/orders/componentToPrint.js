import React, { Component } from "react";
import moment from "moment";

export class ComponentToPrint extends React.PureComponent {
  render() {
    const { element, total } = this.props;
    let sheesha = element.filter((elem) => {
      return elem.category == 5;
    });
    let bar = element.filter((elem) => {
      return elem.category !== 5;
    });
    return (
      <div className="container">
        {sheesha.length > 0 && (
          <div style={{ height: "110vh" }}>
            <h2 className="text-center ">Cloud Cafe</h2>
            <h2 className="text-center ">Sheesha</h2>
            <hr></hr>
            <hr></hr>
            <table style={{ width: "100%" }}>
              <tr style={{ border: "solid black 2px" }}>
                <td align="center" style={{ border: "solid black 2px" }}>
                  Name
                </td>
                <td align="center" style={{ border: "solid black 2px" }}>
                  Amount
                </td>
              </tr>
              {sheesha.map((elem) => {
                return (
                  <tr style={{ border: "solid black 2px" }}>
                    <td align="center" style={{ border: "solid black 2px" }}>
                      {elem.name_en}
                    </td>
                    <td align="center" style={{ border: "solid black 2px" }}>
                      {elem.acc}
                    </td>
                  </tr>
                );
              })}
              <hr style={{ borderTop: "1px dotted" }} />
            </table>
          </div>
        )}
        {bar.length > 0 && (
          <div style={{ height: "110vh" }}>
            <h2 className="text-center ">Cloud Cafe</h2>
            <h2 className="text-center ">Bar</h2>
            <hr></hr>
            <hr></hr>
            <table style={{ width: "100%" }}>
              <tr style={{ border: "solid black 2px" }}>
                <td align="center" style={{ border: "solid black 2px" }}>
                  Name
                </td>
                <td align="center" style={{ border: "solid black 2px" }}>
                  Amount
                </td>
              </tr>
              {bar.map((elem) => {
                return (
                  <tr style={{ border: "solid black 2px" }}>
                    <td align="center" style={{ border: "solid black 2px" }}>
                      {elem.name_en}
                    </td>
                    <td align="center" style={{ border: "solid black 2px" }}>
                      {elem.acc}
                    </td>
                  </tr>
                );
              })}
              <hr style={{ borderTop: "1px dotted" }} />
            </table>
          </div>
        )}
        <div>
          <h2 className="text-center">Cloud Cafe</h2>
          <hr></hr>
          <hr></hr>
          <h4 className="ms-5">Receipt</h4>
          <h4 className="ms-5">Address</h4>
          <hr style={{ borderTop: "1px dotted" }} />
          <table style={{ width: "100%" }}>
            <tr style={{ border: "solid black 2px" }}>
              <td
                align="center"
                style={{ border: "solid black 2px" }}
                colSpan="2"
              >
                day
              </td>
              <td align="center" style={{ border: "solid black 2px" }}>
                {moment().format("dddd")}
              </td>
            </tr>
            <tr style={{ border: "solid black 2px" }}>
              <td
                align="center"
                style={{ border: "solid black 2px" }}
                colSpan="2"
              >
                time
              </td>
              <td align="center" style={{ border: "solid black 2px" }}>
                {moment().format("LTS")}
              </td>
            </tr>
            <tr style={{ border: "solid black 2px" }}>
              <td align="center" style={{ border: "solid black 2px" }}>
                Name
              </td>
              <td align="center" style={{ border: "solid black 2px" }}>
                Amount
              </td>
              <td align="center" style={{ border: "solid black 2px" }}>
                Price
              </td>
            </tr>
            {element.map((elem) => {
              return (
                <tr style={{ border: "solid black 2px" }}>
                  <td align="center" style={{ border: "solid black 2px" }}>
                    {elem.name_en}
                  </td>
                  <td align="center" style={{ border: "solid black 2px" }}>
                    {elem.acc}
                  </td>
                  <td align="center" style={{ border: "solid black 2px" }}>
                    {elem.price * elem.acc}
                  </td>
                </tr>
              );
            })}
            <tr style={{ border: "solid black 2px" }}>
              <td
                align="center"
                style={{ border: "solid black 2px" }}
                colSpan="2"
              >
                total
              </td>
              <td align="center" style={{ border: "solid black 2px" }}>
                {total}
              </td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}
