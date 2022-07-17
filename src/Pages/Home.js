import DaftarGenre from "../components/DaftarGenre";
import DaftarFilm from "../components/DaftarFilm";
import "bootstrap/dist/css/bootstrap.min.css";
import PartHome from "../assets/part-home.png";
import { Col, Container, Row, Button } from "react-bootstrap";

const Home = () => {
  return (
    <div className="Home bg-black mt-5">
      <Container>
        <Row>
          <Col>
            <div className="part-left text-start mt-5 pt-5">
              <h1 className="title">Nonton Film Dengan Mudah</h1>
              <p className="text text-home mt-2 lh-base text-secondary">
                Sebuah situs yang menampilkan sebuah film dengan berbagai genre
                dan bisa di tonton dengan mudah. Mulai dari film Barat, Asia,
                Timur Tengah semua ada disini, destinasi yang sangat cocok untuk
                nonton film.
              </p>
              <Button variant="primary" className="mt-5">
                Explore Now
              </Button>
            </div>
          </Col>
          <Col>
            <div className="part-right mt-5">
              <img
                src={PartHome}
                alt="Home Image"
                style={{ width: "547px", height: "507px" }}
              />
            </div>
          </Col>
        </Row>
      </Container>
      <DaftarGenre />
      <DaftarFilm />
    </div>
  );
};

export default Home;
