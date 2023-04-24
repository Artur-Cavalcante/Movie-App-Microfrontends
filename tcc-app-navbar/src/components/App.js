import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import NavMenu from "./NavMenu";

export default function App(props) {
  return (
    <BrowserRouter>
      <NavMenu />
    </BrowserRouter>
  );
}
