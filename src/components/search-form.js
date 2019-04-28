import React, { useState, useEffect, useRef } from "react";
  import IncidentList  from "./incident-list";
import { callIncidents } from "./api";
import Spinner from './spinner';


const SearchList = () => {
  const [searchValue, setsearchValue] = useState("");
  const [loader, setLoader] = useState(false);
  const [incidentList, setincidentList] = useState([]);
  const [errMsg, seterrMsg] = useState('');
  const [fromDate, setfromDate] = useState("");
  const [toDate, settoDate] = useState("");
  const [proximity, setproximity] = useState("Berlin");
  const [proximityRadius, setproximityRadius] = useState("100");



  const handleChangeSearch = event => {
    setsearchValue(event.target.value);
  };

  const handleFromDate = event => {
    setfromDate(event.target.value);
  };

  const handleToDate = event => {
    settoDate(event.target.value);
  };

  const handleProximityRadiusSearch = event => {
    setproximityRadius(event.target.value);
  };

  const handleProximitySearch = event => {
    setproximity(event.target.value);
  };

  const getTimefromDate = dateInput => {
    let d = new Date(dateInput);
    return d.getTime();
  };

  const getIncidentData = () => {
    let fromDateValueFormatted = getTimefromDate(fromDate);
    let toDateValueFormatted = getTimefromDate(toDate);
    setLoader(true);
    callIncidents(searchValue, fromDateValueFormatted, toDateValueFormatted, proximity, proximityRadius)
    .then(data => {
    setLoader(false);
      // console.log("data from both api" + JSON.stringify(data))
        setincidentList(data);
      
    })
    .catch(err => {
      seterrMsg(errMsg);
    });

  }

  useEffect(() => {
    getIncidentData();
  },callIncidents(searchValue, fromDate, toDate, proximity, proximityRadius))

  const childRef = useRef();

  return (
    <div>
      <div className="SearchFormWrapper">
      <h1 className="title">Police Department of Berlin</h1>
      <h2 className="subtitle">Stolen Bykes</h2>
        <div className="columns">
            <div className="column is-3">
            <label><b>Search</b></label>
              <input
                className="input"
                type="text"
                placeholder="Search Bike descriptions"
                onChange={handleChangeSearch}
                value={searchValue}
              />
              </div>

              <div className="column is-2">
                <label><b>From</b></label>
                  
                        <input
                          className="input"
                          type="date"
                          placeholder="from"
                          onChange={handleFromDate}
                          value={fromDate}
                        />
                      
              </div>
              <div className="column is-2">
                
              <label><b>To</b></label>
                        <input
                          className="input"
                          type="date"
                          placeholder="to"
                          onChange={handleToDate}
                          value={toDate}
                        />
                      
              </div>
              <div className="column is-2">
              <label><b>Within</b></label>
                        <input
                          className="input"
                          type="text"
                          onChange={handleProximityRadiusSearch}
                          value={proximityRadius}
                        />
                      
              </div>
              <div className="column is-2">
              <label><b>Miles Of</b></label>
                        <input
                          className="input"
                          type="text"
                          onChange={handleProximitySearch}
                          value={proximity}
                        />
                      
              </div>
          <div className="column is-1">
          <label><b>&nbsp;</b></label>
            <div className="control">
              <button className="button is-primary" onClick={getIncidentData}>
              <i className="fa fa-search fa-lg" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
        {/* <RenderGridItem ref={childRef} /> */}
      </div>
     
        <div className="renderList">
        { loader ? <Spinner/> :
            <IncidentList theftList={incidentList} errObj={errMsg} ref={childRef} proximityRadius={proximityRadius} proximity={proximity}/>
        }
      </div>
      
    </div>
  );
};

export default SearchList;
