import * as React from 'react'
import "../styles/modal.css";



export function Modal(props) {
  if (props.show) {
    return (
      <div className="modal-background" onClick={props.onClose} onKeyDown={props.onClose} role="button" tabIndex={0}>
        <section className="modal-main">
          {props.children}
          <button className="close" type="button" onClick={props.onClose}>
            &#x2715;
          </button>
        </section>
      </div>
    );
  }
}