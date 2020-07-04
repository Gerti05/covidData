import React, { Component } from "react";
import { fetchSearchData } from "../actions";
import { Form, FormControl, InputGroup } from "react-bootstrap";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

class searchbar extends Component {
  handleChange = (e) => {
    let value = e.target.value;
    this.setState({ value: value });
    this.handleSubmit(value);
  };

  handleSubmit = (e) => {
    this.props.fetchSearchData(e);
  };

  render() {
    return (
      <div>
        <Form className="mt-4">
          <Form.Group>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text className="searchIcon" id="inputGroupPrepend">
                  <FontAwesomeIcon icon={faSearch} />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                type="text"
                placeholder="Search"
                onChange={this.handleChange}
              />
            </InputGroup>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default connect(null, { fetchSearchData })(searchbar);
