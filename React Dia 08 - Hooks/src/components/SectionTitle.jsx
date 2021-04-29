import "./SectionTitle.css";
import React from 'react';

function SectionTitle(props) {
  return(
    <div className="SectionTitle">
      <h3>{props.title}</h3>
    </div>
  )
}

export default SectionTitle;