import React from "react";

import "./search-box.styles.css";

//en function component som inte har egen state eller lifecyclemetods
//För det behövs inte alltid. funktionen ska bara rendera HTML med props
//funktionen är lättare att läsa, testa och är mindre och lättare att förstå
export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
  />
);
