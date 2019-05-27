import React from "react";
import "../App.css";
import { getPaginatedIncidents } from "../redux/reducers/BikesReducer";
import { connect } from "react-redux";
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import { getCurrentPage } from "../redux/reducers/PaginationReducer";
import { bindActionCreators } from "redux";
import { setPage } from "../api/apiClient";

function Pagination(props) {
  const { paginatedIncidents: { length }, currentPage, setPage } = props;

  const handleNext = () => {
    setPage(currentPage+1)
  };

  const handleBack = () => {
    setPage(currentPage-1)
  };

  return (<div>
      {length > 0 ?
        <MobileStepper steps={length} position="static" variant="text" activeStep={currentPage} nextButton={
          <Button size="small" onClick={handleNext} disabled={currentPage === length - 1}>
            Next
            <KeyboardArrowRight />
          </Button>
        } backButton={
          <Button size="small" onClick={handleBack} disabled={currentPage === 0}>
            <KeyboardArrowLeft />
            Back
          </Button>
        } />
        : null}
    </div>
  );
}

const mapStateToProps = state => ({
  paginatedIncidents: getPaginatedIncidents(state),
  currentPage: getCurrentPage(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
  setPage
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagination);