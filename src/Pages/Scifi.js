import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function Scifi() {
  let navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    axios
      .get("http://www.omdbapi.com/?s=Scifi&apikey=e55d7abe")
      .then((response) => {
        setMovie(response.data.Search);
      });
  }, []);

  return (
    <div className="bagian-2 bg-black daftar-film">
      <Container>
        <div className="title mb-5 mt-5 d-flex">
          <FaArrowLeft
            size="2rem"
            color="white"
            style={{ cursor: "pointer" }}
            onClick={handleClick}
          />
          <h1 className="mx-auto">Sci-Fi</h1>
        </div>
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

export default Scifi;
