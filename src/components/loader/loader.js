import React from "react";
import CircularProgress from '@material-ui/core/CircularProgress';

export default function InPlaceLoader(props) {
    return (
        <div className="in-place-loader">
            <CircularProgress size={props.size} thickness={5} />
        </div>
    )
} 