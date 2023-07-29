import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {NotFoundPage} from "./Components/NotFoundPage/NotFoundPage";
import {AuthorizationPage} from "./Components/AuthorizationPage/AuthorizationPage";
import {MainPage} from "./Components/MainPage/MainPage";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="login" element={<AuthorizationPage />} />
              <Route path="*" element={<NotFoundPage />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
