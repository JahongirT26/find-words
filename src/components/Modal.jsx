import React from "react";


export default function Modal({children, className}) {
    return (
        <div className="modal">
          <div className={`modal-box ${className}`}>
            {children}
          </div>
        </div>
    );
}