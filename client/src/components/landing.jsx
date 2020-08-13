import React, { Component } from "react";
import axios from "axios";
import Loader from "../loader.gif";

import Pagination from "./common/pagination";
import RenderResults from "./common/renderResults";
import Header from "./common/header";
import Search from "./common/search";

import HelperUtils from "../utils/helper/HelperUtils";
import ApiConfig from "../utils/config/ApiConfig";

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

  componentDidMount = async () => {
    await axios
      .get(
        ApiConfig.incidents +
          `?proximity=Berlin&proximity_square=100&per_page=100`
      )
      .then((res) => res.data)
      .then((data) => {
        const total = data.incidents.length;
        const totalPagesCount = HelperUtils.getPageCount(total, 10);
        this.setState({
          totalResults: total,
          totalPages: totalPagesCount,
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          message: "Oops, Something went wrong!",
          loading: false,
        });
      });

    await axios
      .get(
        ApiConfig.incidents +
          `?proximity=Berlin&proximity_square=100&per_page=10&page=1`
      )
      .then((res) => res.data)
      .then((data) => {
        console.log(data.incidents);
        if (data.incidents) {
          this.setState({
            incidents: data.incidents,
            loading: false,
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

  fetchSearchResults = (updatedPage) => {
    axios
      .get(
        ApiConfig.incidents +
          `?proximity=Berlin&proximity_square=100&per_page=10&page=${updatedPage}`
      )
      .then((res) => res.data)
      .then((data) => {
        console.log(data.incidents);
        if (data.incidents.length) {
          this.setState({
            incidents: data.incidents,
            loading: false,
            currentPageNumber: updatedPage,
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
      `&page=${currentPageNumber}` +
      (searchInput ? `&query=${searchInput}` : "") +
      (startDate ? `&occurred_after=${sDate}` : "") +
      (endDate ? `&occurred_before=${eDate}` : "");

    if (searchQuery === `&page=${currentPageNumber}`) {
      this.setState({
        message: "Oops, fields are empty!",
        loading: false,
      });
      return;
    }
    axios
      .get(
        ApiConfig.incidents +
          `?proximity=Berlin&proximity_square=100&per_page=10${searchQuery}`
      )
      .then((res) => res.data)
      .then((data) => {
        console.log(data.incidents);
        const total = data.incidents.length;
        const totalPagesCount = HelperUtils.getPageCount(total, 10);

        if (data.incidents.length) {
          this.setState({
            incidents: data.incidents,
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
          <div className="total-result text-right ">
            <span className="bg-dark text-white p-3 rounded h6">
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
