import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";

function DaftarFilm() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    axios
      .get("http://www.omdbapi.com/?s=comedy&apikey=e55d7abe")
      .then((response) => {
        setMovie(response.data.Search);
      });
  }, []);

  return (
    <div className="bagian-2 bg-black daftar-film">
      <Container>
        <h1 className="title text-center mb-5">Daftar Film</h1>
        <Row>
          {movie.map((movie, index) => {
            return (
              <Col key={index}>
                <Card
                  style={{ width: "15rem", cursor: "pointer" }}
                  className="box mt-3"
                >
                  <Card.Img variant="top" src={movie.Poster} />
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default DaftarFilm;
