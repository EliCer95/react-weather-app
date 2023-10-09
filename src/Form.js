import React from "react";

export default function Form() {
  return (
    <form className="d-flex">
      <input type="search" className="form-control search-window shadow" />
      <input type="submit" value="search" className="btn btn-success shadow" />
    </form>
  );
}
