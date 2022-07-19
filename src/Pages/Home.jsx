import axios from "axios";
import React, { Component } from "react";
import Searchbar from "../shared/Searchbar";
import { ReactComponent as Spinner } from "../assets/Spinner.svg";
import { ReactComponent as NoneData } from "../assets/no-data.svg";
import Header from "../shared/Header";
export default class Home extends Component {
  state = {
    resultados: [], //La respuesta de la API
    loading: false, //cambiarlo para mostrar un estado de loading [tentativo]
  };
  handleSearch = async (term) => {
    console.log("Entre a search");
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/search/users?q=${term}`
    );
    console.log(res.data.items);

    this.setState({ loading: false, resultados: res.data.items });
  };

  handleClean = () => {
    this.setState({ resultados: [] });
  };
  Spinner = (
    <>
      <Spinner style={{ width: "400px", height: "400px" }} />
    </>
  );
  NoneData = (
    <div className="flex-column">
      <h2>No se encontraron resultados</h2>
      <NoneData style={{ width: "500px", height: "500px" }} />
    </div>
  );

  render() {
    return (
      <>
        <Header />
        <div className="container d-flex flex-column gap-3 mt-5">
          <Searchbar
            handleSearch={this.handleSearch}
            handleClean={this.handleClean}
            resultados={this.state.resultados}
          ></Searchbar>
          <div className=" d-flex flex-wrap gap-3 justify-content-center">
            {this.state.resultados.length === 0
              ? this.NoneData
              : this.state.loading
              ? this.Spinner
              : this.state.resultados.map((resultado) => (
                  <div className="card text-center" key={resultado.id}>
                    <img src={resultado.avatar_url} className="mx-auto" />
                    <div className="card-body">
                      <h5 className="card-title">{resultado.login}</h5>
                      <a
                        href={resultado.html_url}
                        target="_blank"
                        className="btn btn-primary"
                      >
                        Más
                      </a>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </>
    );
  }
}
