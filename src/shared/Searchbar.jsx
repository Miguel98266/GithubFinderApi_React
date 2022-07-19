import React, { Component } from "react";

export default class Searchbar extends Component {
  state = {
    searchTerm: "",
  };
  render() {
    return (
      <>
        <input
          value={this.state.searchTerm}
          onChange={(e) => this.setState({ searchTerm: e.target.value })}
          type="text"
          placeholder="Buscar un usuario .."
          className="form-control"
        />
        <button
          type="button"
          className="btn btn-dark"
          onClick={() => {
            this.props.handleSearch(this.state.searchTerm);
            this.setState({ searchTerm: "" });
          }}
        >
          Buscar
        </button>
        {this.props.resultados.length === 0 ? (
          <></>
        ) : (
            <>
          <button
            className="btn btn-outline-dark"
            onClick={() => this.props.handleClean()}
          >
            Limpiar
          </button>
          <h2>El numero de resultados es : {this.props.resultados.length} </h2>
          </>
        )}
      </>
    );
  }
}
