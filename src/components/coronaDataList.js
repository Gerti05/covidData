import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchData, fetchSearchData } from "../actions";
import { Table } from "react-bootstrap";

class coronaDataList extends Component {
  state = {
    clicked: false,
    leastToGreatest: false
  };

  handleClick = (e) => {
    if (e === "reverseCountries" && !this.props.search) {
      this.setState({ clicked: !this.state.clicked }, () => {
        this.setState({ clicked: !this.state.clicked });
      });
      let sortedCountries = this.props.data.Countries.sort()
      this.mappedData(sortedCountries.reverse());
    } else if (e === "reverseCountries" && this.props.search) {
      console.log("you");
      this.setState({ reverseCountries: !this.state.reverseCountries });
    } else if (e === "sortCases" && !this.props.search) {
      this.setState({ leastToGreatest: !this.state.leastToGreatest });
      if(!this.state.leastToGreatest) {
        this.mappedData(this.props.data.Countries.sort(
          (a, b) => parseFloat(a.TotalConfirmed) - parseFloat(b.TotalConfirmed)
        ));
        this.props.data.Countries.sort()
      }else if (this.state.leastToGreatest) {
        this.mappedData(this.props.data.Countries.sort(
          (a, b) => parseFloat(b.TotalConfirmed) - parseFloat(a.TotalConfirmed)
        ));
      }
      this.props.data.Countries.sort()
    }
  };

  tableDisplayHeader = () => {
    return (
      <div>
        <Table
          className="mb-5"
          striped
          bordered
          hover
          variant="dark"
          responsive="sm"
        >
          <thead>
            <tr>
              <th onClick={(e) => this.handleClick("reverseCountries")}>
                Countries
              </th>
              <th onClick={(e) => this.handleClick("sortCases")}>
                Total Cases
              </th>
              <th>Total Deaths</th>
              <th>Total Recoveries</th>
              <th>Death Rate %</th>
            </tr>
          </thead>
          {this.props.search ? this.filterSearchData() : this.mappedData()}
        </Table>
      </div>
    );
  };

  tableDisplayBody = (data) => {
    if (!data) {
      return <div>Loading...</div>;
    } else {
      return data.map((Country) => {
        return (
          <tbody key={Country.CountryCode}>
            <tr>
              <td>
                <img
                  className="mr-3"
                  alt="flag"
                  src={`https://www.countryflags.io/${Country.CountryCode}/flat/32.png`}
                ></img>
                {Country.Country}
              </td>
              <td className="totalCases">{Country.TotalConfirmed}</td>
              <td className="totalDead">{Country.TotalDeaths}</td>
              <td className="totalRecovered">{Country.TotalRecovered}</td>
              <td className="deathRate">
                {isNaN(
                  (
                    (Country.TotalDeaths / Country.TotalConfirmed) *
                    100
                  ).toFixed(1)
                )
                  ? `${(0.0).toFixed(1)}%`
                  : `${(
                      (Country.TotalDeaths / Country.TotalConfirmed) *
                      100
                    ).toFixed(1)}%`}
              </td>
            </tr>
          </tbody>
        );
      });
    }
  };

  filterFunction = () => {
    let names = this.props.data.Countries.map((Country) => {
      return Country.Country;
    });
    let filteredNames = names.filter((x) => {
      return x.includes(
        this.props.search.charAt(0).toUpperCase() + this.props.search.slice(1)
      );
    });
    let searched = this.props.data.Countries;
    let newArray = [];
    for (let i = 0; i < searched.length; i++) {
      for (let j = 0; j < filteredNames.length; j++) {
        if (searched[i].Country === filteredNames[j]) {
          newArray.push(searched[i]);
        }
      }
    }
    return newArray;
  };

  mappedData = (e) => {
    console.log(this.state.clicked);
    return !this.state.clicked
      ? this.tableDisplayBody(this.props.data.Countries)
      : this.tableDisplayBody(e);
  };

  filterSearchData = () => {
    return this.state.reverseCountries
      ? this.tableDisplayBody(this.filterFunction().reverse())
      : this.tableDisplayBody(this.filterFunction());
  };

  render() {
    return this.tableDisplayHeader();
  }
}

const mapStateToProps = (state) => {
  return { data: state.data, search: state.search };
};

export default connect(mapStateToProps, { fetchData, fetchSearchData })(
  coronaDataList
);
