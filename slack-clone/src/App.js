import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {NotFoundPage} from "./Components/NotFoundPage/NotFoundPage";
import {AuthorizationPage} from "./Components/AuthorizationPage/AuthorizationPage";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="login" element={<AuthorizationPage />} />
              <Route path="*" element={<NotFoundPage />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
