import React, { Component } from "react";
import axios from "axios";
import Loader from "../loader.gif";
import Pagination from "./common/pagination";
import RenderResults from "./common/renderResults";
import Header from "./common/header";
import Search from "./common/search";

export default class Landing extends Component {
  state = {
    incidents: [],
    loading: true,
    message: "",
    totalResults: 0,
    totalPages: 0,
    currentPageNumber: 1,
    searchInput: "",
    startDate: 0,
    endDate: 0,
  };

  componentDidMount = () => {
    const { currentPageNumber } = this.state;
    Promise.all([
      axios.get(
        `https://bikewise.org/api/v2/incidents?per_page=100&proximity=Berlin&proximity_square=100`
      ),
      axios.get(
        `https://bikewise.org/api/v2/incidents?per_page=10&page=${currentPageNumber}&proximity=Berlin&proximity_square=100`
      ),
    ])
      .then(([res1, res2]) => {
        const total = res1.data.incidents.length;
        const totalPagesCount = this.getPageCount(total, 10);
        this.setState({
          totalResults: total,
          totalPages: totalPagesCount,
        });

        console.log(res2.data.incidents);
        if (res2.data.incidents) {
          this.setState({
            incidents: res2.data.incidents,
            loading: false,
          });
        } else {
          this.setState({
            message: "No Results...",
            loading: false,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          message: "Oops, Something went wrong!",
          loading: false,
        });
      });
  };

  fetchSearchResults = (updatedPage) => {
    axios
      .get(
        `https://bikewise.org/api/v2/incidents?per_page=10&page=${updatedPage}&proximity=Berlin&proximity_square=100`
      )
      .then((res) => {
        console.log(res.data.incidents);
        if (res.data.incidents.length) {
          this.setState({
            incidents: res.data.incidents,
            loading: false,
            currentPageNumber: updatedPage,
          });
        } else {
          this.setState({
            message: "No Results...",
            loading: false,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          message: "Oops, Something went wrong!",
          loading: false,
        });
      });
  };

  getPageCount = (total, denominator) => {
    const divisible = 0 === total % denominator;
    const valueToBeAdded = divisible ? 0 : 1;
    return Math.floor(total / denominator) + valueToBeAdded;
  };

  handlePageClick = (type, event) => {
    event.preventDefault();
    const updatedPage =
      "prev" === type
        ? this.state.currentPageNumber - 1
        : this.state.currentPageNumber + 1;

    if (!this.state.loading) {
      this.setState(
        {
          incidents: [],
          loading: true,
          message: "",
        },
        () => {
          this.fetchSearchResults(updatedPage);
        }
      );
    }
  };

  handleSearchInput = (e) => {
    this.setState({
      searchInput: e.target.value,
    });
  };

  handleStartDateChange = (date) => {
    this.setState({
      startDate: date,
    });
    console.log(new Date(date / 1000).getTime());
  };

  handleEndDateChange = (date) => {
    this.setState({
      endDate: date,
    });
    console.log(new Date(date / 1000).getTime());
  };

  handleSearchClick = (e) => {
    e.preventDefault();
    this.setState({
      incidents: [],
      loading: true,
      message: "",
    });
    const { searchInput, currentPageNumber, startDate, endDate } = this.state;
    const sDate = startDate ? new Date(startDate / 1000).getTime() : startDate;
    const eDate = endDate ? new Date(endDate / 1000).getTime() : endDate;
    const searchQuery =
      (searchInput ? `&query=${searchInput}` : "") +
      (startDate ? `&occurred_after=${sDate}` : "") +
      (endDate ? `&occurred_before=${eDate}` : "");
    axios
      .get(
        `https://bikewise.org/api/v2/incidents?per_page=10&page=${currentPageNumber}&proximity=Berlin&proximity_square=100${searchQuery}`
      )
      .then((res) => {
        console.log(res.data.incidents);

        const total = res.data.incidents.length;
        const totalPagesCount = this.getPageCount(total, 10);

        if (res.data.incidents.length > 0) {
          this.setState({
            incidents: res.data.incidents,
            loading: false,
            message: "",
            totalResults: total,
            totalPages: totalPagesCount,
          });
        } else {
          this.setState({
            incidents: [],
            message: "No Results...",
            loading: false,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          message: "Oops, Something went wrong!",
          loading: false,
        });
      });
  };

  render() {
    const {
      incidents,
      loading,
      message,
      currentPageNumber,
      totalPages,
      totalResults,
      startDate,
      endDate,
    } = this.state;

    const showPrevLink = currentPageNumber > 1;
    const showNextLink = totalPages > currentPageNumber;

    return (
      <div className="container">
        {/* heading */}
        <Header />

        {/* Search Input */}
        <Search
          handleSearchClick={this.handleSearchClick}
          handleSearchInput={this.handleSearchInput}
          handleStartDateChange={this.handleStartDateChange}
          handleEndDateChange={this.handleEndDateChange}
          startDate={startDate}
          endDate={endDate}
        />

        {/* Total Cases */}
        {!loading && !message && totalResults && (
          <div className="total-result text-right my-3">
            <span className="bg-dark text-white p-2 rounded my-2">
              Total Cases in Berlin: {totalResults}
            </span>
          </div>
        )}

        {/* Error Message */}
        {message && <p className="message display-4">{message}</p>}

        {/* loader */}
        <img
          src={Loader}
          className={`search-loading ${loading ? "show" : "hide"}`}
          alt="loader"
        />

        {/* Result */}
        {<RenderResults incidents={incidents} />}

        {/* Pagination */}
        {!loading && !message && (
          <Pagination
            loading={loading}
            showPrevLink={showPrevLink}
            showNextLink={showNextLink}
            currentPageNumber={currentPageNumber}
            handlePrevClick={() => this.handlePageClick("prev", window.event)}
            handleNextClick={() => this.handlePageClick("next", window.event)}
          />
        )}
      </div>
    );
  }
}
