import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";
import { Container } from "reactstrap";

import Movies from "./Movies";

export default function App() {
  return (
    <BrowserRouter>
      <Container>
        <Route exact path="/" component={Movies} />
        <Route path="/search" component={Movies} />
      </Container>
    </BrowserRouter>
  );
}
