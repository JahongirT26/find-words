import React from "react";

export default function Progress({value, max}) {
    const width = (max - value) / max * 100
    
    return (
        <div className="progress-wrapper">
          <div 
            className="progress" 
            style={{width: `${width}%`}}>
          </div>
        </div>
    );
}