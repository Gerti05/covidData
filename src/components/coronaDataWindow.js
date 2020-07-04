import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchData } from "../actions";
import { Card, CardGroup } from "react-bootstrap";

class coronaDataWindow extends Component {
  render() {
    return (
      <div>
      <h3 className="text text-center mt-5">COVID-19 Global Cases</h3>
        <CardGroup>
          <Card
            className="mt-4 mr-1 round text-center"
            bg="warning"
            text="light"
            style={{ width: "19rem" }}
          >
            <Card.Body>
              <Card.Title>
                {" "}
                Total Global Cases: {this.props.data.Global.TotalConfirmed}{" "}
              </Card.Title>
            </Card.Body>
          </Card>
          <Card
            className="mt-4 mr-1 round text-center"
            bg="danger"
            text="light"
            style={{ width: "19rem" }}
          >
            <Card.Body>
              <Card.Title>
                {" "}
                Total Global Deaths: {this.props.data.Global.TotalDeaths}{" "}
              </Card.Title>
            </Card.Body>
          </Card>
          <Card
            className="mt-4 round text-center"
            bg="success"
            text="light"
            style={{ width: "19rem" }}
          >
            <Card.Body>
              <Card.Title>
                {" "}
                Total Global Recovered: {
                  this.props.data.Global.TotalRecovered
                }{" "}
              </Card.Title>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { data: state.data };
};

export default connect(mapStateToProps, { fetchData })(coronaDataWindow);
