import React from "react";
import { Container, Row, Card, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";

const DaftarGenre = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    axios
      .get("http://www.omdbapi.com/?s=avenger&apikey=e55d7abe")
      .then((response) => {
        setMovie(response.data.Search);
      });
  }, []);

  return (
    <div className="bagian-2 bg-black">
      <Container>
        <div className="film-desc pt-5" id="About">
          <h1 className="title pt-3">Film</h1>
          <p className="text text-secondary lh-base">
            Nonton film online dari beberapa Negara dengan subtitle Indonesia,
            semua bisa disini.
            <br /> Mulai dari film Barat, Asia, Timur Tengah semua ada disini,
            destinasi yang sangat cocok <br />
            untuk menonton sebuah film.{" "}
            <a href="#" className="text-decoration-none text-primary">
              Daftar Film
            </a>
          </p>
        </div>

        <div className="Genre pt-5" id="daftar-genre">
          <h1 className="title pt-3">Daftar Genre</h1>
          <div className="daftar-genre pt-2 text">
            <a
              href="/Action"
              className="me-5 text-decoration-none text-secondary"
            >
              Action
            </a>
            <a
              href="/Comedy"
              className="me-5 text-decoration-none text-secondary"
            >
              Comedy
            </a>
            <a
              href="/Horror"
              className="me-5 text-decoration-none text-secondary"
            >
              Horror
            </a>
            <a
              href="/Drama"
              className="me-5 text-decoration-none text-secondary"
            >
              Drama
            </a>
            <a
              href="/Fantasy"
              className="me-5 text-decoration-none text-secondary"
            >
              Fantasy
            </a>
            <a
              href="/SciFi"
              className="me-5 text-decoration-none text-secondary"
            >
              Sci-Fi
            </a>
            <a
              href="/Thriller"
              className="me-5 text-decoration-none text-secondary"
            >
              Thriller
            </a>
          </div>
        </div>

        <div className="terpopuler mt-5">
          <h1 className="title mb-3">Terpopuler</h1>
          <Row>
            {movie.map((movie, index) => {
              return (
                <Col key={index}>
                  <Card className="d-flex mt-2" style={{ cursor: "pointer" }}>
                    <Card.Img variant="top" src={movie.Poster} />
                  </Card>
                </Col>
              );
            })}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default DaftarGenre;
