import React, { Component } from "react";
import CoronaData from "./coronaDataList";
import Nav from "./navbar";
import Searchbar from "./searchbar";
import DataWindow from "./coronaDataWindow";
import Footer from "./footer";
import { connect } from "react-redux";
import { fetchData } from "../actions";
import { Spinner, Container } from "react-bootstrap";

class home extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    if (!this.props.data) {
      return (
        <div>
          <Nav />
          <Spinner className="loader" animation="border" />
        </div>
      );
    } else {
      return (
        <div>
          <Nav />
          <Container>
          <DataWindow />
          <Searchbar />
          <CoronaData />
          </Container>
          <Footer />
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return { data: state.data };
};

export default connect(mapStateToProps, { fetchData })(home);
