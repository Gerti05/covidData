import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchData, fetchSearchData } from "../actions";
import { Table } from "react-bootstrap";

class coronaDataList extends Component {
  state = {
    clicked: false,
    sortDeathRate: true,
    sortCases: true,
    sortDeaths: true,
    sortRecoveries: true,
    sortedAZ: true,
    size: (window.innerWidth <= 360) ? "24" : "32"
  };

  handleClick = (e, g, z) => {
    if (e === "reverseCountries") {
      this.setState({ clicked: !this.state.clicked }, () => {
        this.setState({ clicked: !this.state.clicked });
      });

      let sortedCountries = this.props.data.Countries;

      if (this.state.sortedAZ) {
        this.setState({ sortedAZ: false });
        sortedCountries.sort(function (a, b) {
          if (a.Country < b.Country) {
            return -1;
          }
          if (a.Country > b.Country) {
            return 1;
          }
          return 0;
        });
      } else if (!this.state.sortedAZ) {
        this.setState({ sortedAZ: true });
        sortedCountries.sort(function (a, b) {
          if (a.Country < b.Country) {
            return 1;
          }
          if (a.Country > b.Country) {
            return -1;
          }
          return 0;
        });
      }

      this.mappedData(sortedCountries.reverse());
    } else if (
      e === "sortCases" ||
      e === "sortRecoveries" ||
      e === "sortDeaths"
    ) {
      this.clickSort(e, g);
    } else if (e === "sortDeathRate") {
      this.setState({ sortedAZ: false });
      this.setState({ sortDeathRate: !this.state.sortDeathRate });
      this.setState({ sortCases: true });
      this.setState({ sortDeaths: true });
      this.setState({ sortRecoveries: true });
      if (!this.state.sortDeathRate) {
        this.mappedData(
          this.props.data.Countries.sort(
            (a, b) =>
              (parseFloat(a[g]) / parseFloat(a[z])) * 100 -
              (parseFloat(b[g]) / parseFloat(b[z])) * 100
          )
        );
      } else if (this.state.sortDeathRate) {
        this.mappedData(
          this.props.data.Countries.sort(
            (a, b) =>
              (parseFloat(b[g]) / parseFloat(b[z])) * 100 -
              (parseFloat(a[g]) / parseFloat(a[z])) * 100
          )
        );
      }
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
              <th
                onClick={(e) => this.handleClick("sortCases", "TotalConfirmed")}
              >
                Total Cases
              </th>
              <th
                onClick={(e) => this.handleClick("sortDeaths", "TotalDeaths")}
              >
                Total Deaths
              </th>
              <th
                onClick={(e) =>
                  this.handleClick("sortRecoveries", "TotalRecovered")
                }
              >
                Total Recoveries
              </th>
              <th
                onClick={(e) =>
                  this.handleClick(
                    "sortDeathRate",
                    "TotalDeaths",
                    "TotalConfirmed"
                  )
                }
              >
                Death Rate %
              </th>
            </tr>
          </thead>
          {this.props.search ? this.filterSearchData() : this.mappedData()}
        </Table>
      </div>
    );
  };

  tableDisplayBody = (data) => {
    if (!data) {
      return (
        <tbody>
          <tr>
            <td>Loading...</td>
          </tr>
        </tbody>
      );
    } else {
      return data.map((Country) => {
        return (
          <tbody key={Country.CountryCode}>
            <tr>
              <td>
                <img
                  className="mr-3"
                  alt="flag"
                  src={`https://www.countryflags.io/${Country.CountryCode}/flat/${this.state.size}.png`}
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

  mappedData = (e, a) => {
    return !this.state.clicked
      ? this.tableDisplayBody(this.props.data.Countries)
      : this.tableDisplayBody(e);
  };

  filterSearchData = () => {
    return this.state.reverseCountries
      ? this.tableDisplayBody(this.filterFunction().reverse())
      : this.tableDisplayBody(this.filterFunction());
  };

  clickSort = (e, g) => {
    this.setState({ sortedAZ: false });
    this.changeLToG(e);
    this.setState({ sortDeathRate: true });
    if (!this.state[e]) {
      this.mappedData(
        this.props.data.Countries.sort(
          (a, b) => parseFloat(a[g]) - parseFloat(b[g])
        )
      );
    } else if (this.state[e]) {
      this.mappedData(
        this.props.data.Countries.sort(
          (a, b) => parseFloat(b[g]) - parseFloat(a[g])
        )
      );
    }
  };

  changeLToG = (e) => {
    if (e === "sortCases") {
      this.setState({ sortCases: !this.state.sortCases });
      this.setState({ sortDeaths: true });
      this.setState({ sortRecoveries: true });
    } else if (e === "sortDeaths") {
      this.setState({ sortCases: true });
      this.setState({ sortDeaths: !this.state.sortDeaths });
      this.setState({ sortRecoveries: true });
    } else if (e === "sortRecoveries") {
      this.setState({ sortCases: true });
      this.setState({ sortDeaths: true });
      this.setState({ sortRecoveries: !this.state.sortRecoveries });
    }
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
