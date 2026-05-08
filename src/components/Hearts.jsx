import React from "react";

export default function Hearts({count = 0, value = 0}) {
    return (
        <p className="hit-points-indicator">
          {Array(count)
          .fill(null)
          .map((_, i) => (
            <span 
                key={i}
                className={i < value
                    ? 'hit-points-used'
                    : 'hit-points-unused'}
            ></span>
          ))}
        </p>
    );
}