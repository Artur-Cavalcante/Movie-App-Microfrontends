import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import Favorites from "./Favorites";
import { Container } from "reactstrap";

export default function Root() {
  return (
    <BrowserRouter>
      <Container>
        <Favorites />
      </Container>
    </BrowserRouter>
  );
}
