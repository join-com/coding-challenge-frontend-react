import React, { Component } from "react";
import axios from "axios";
import Loader from "../loader.gif";
import Pagination from "./common/pagination";
import RenderResults from "./common/renderResults";
import Header from "./common/header";

export default class Landing extends Component {
  state = {
    incidents: [],
    loading: true,
    message: "",
    totalResults: 0,
    totalPages: 0,
    currentPageNumber: 1,
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
        console.log("total:", total + ", totalPages:", totalPagesCount);
        this.setState({
          totalResults: total,
          totalPages: totalPagesCount,
          currentPageNumber: currentPageNumber,
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
          message: "Error in fetching List!",
        });
      });
  };

  getPageCount = (total, denominator) => {
    const divisible = 0 === total % denominator;
    const valueToBeAdded = divisible ? 0 : 1;
    return Math.floor(total / denominator) + valueToBeAdded;
  };

  fetchSearchResults = (updatedPage) => {
    axios
      .get(
        `https://bikewise.org/api/v2/incidents?per_page=10&page=${updatedPage}&proximity=Berlin&proximity_square=100`
      )
      .then((res) => {
        console.log(res.data.incidents);
        if (res.data.incidents) {
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
          message: "Error in fetching List!",
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
          loading: true,
          message: "",
        },
        () => {
          this.fetchSearchResults(updatedPage);
        }
      );
    }
  };

  render() {
    const {
      incidents,
      loading,
      message,
      currentPageNumber,
      totalPages,
      totalResults,
    } = this.state;

    const showPrevLink = currentPageNumber > 1;
    const showNextLink = totalPages > currentPageNumber;

    return (
      <div className="container">
        {/* heading */}
        <Header />

        {/* Search Input */}
        <label htmlFor="search-input" className="search-label">
          <input
            type="text"
            value=""
            id="search-input"
            placeholder="title..."
          />
        </label>
        <input type="submit" value="Search" />

        {/* Total Cases */}
        {!loading && totalResults && (
          <div className="total-result">
            <span>Total Cases in Berlin: {totalResults}</span>
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
        {!loading ? (
          <Pagination
            loading={loading}
            showPrevLink={showPrevLink}
            showNextLink={showNextLink}
            currentPageNumber={currentPageNumber}
            handlePrevClick={() => this.handlePageClick("prev", window.event)}
            handleNextClick={() => this.handlePageClick("next", window.event)}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}
