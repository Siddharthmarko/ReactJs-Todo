import '../Style.css';
import React, { useEffect, useRef } from 'react';

export default function InputField({ currentValue, currentText, insertButton, displayTask }) {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, [currentValue]);

  return (
    <div className="card-header-tab card-header d-flex justify-content-between border-0">
      <button onClick={displayTask} className="card-header-title font-size-lg text-capitalize font-weight-normal border-0 bg-transparent">
        <i className="fa fa-tasks" />
        &nbsp;All Task
      </button>
      <div className="d-flex text-right card-footer flex-row ">
        <div className="md-form mx-3">
          <input
            type="text"
            id="form1"
            ref={inputRef}
            value={currentValue}
            onChange={(e) => currentText(e.target.value)}
            className="form-control"
          />
        </div>
        <button onClick={() => insertButton()} className="btn btn-primary">Add Task</button>
        <button className="mr-2 btn btn-link btn-sm">Cancel</button>
      </div>
    </div>
  );
}
