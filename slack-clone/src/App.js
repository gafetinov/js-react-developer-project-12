import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {NotFoundPage} from "./Components/NotFoundPage/NotFoundPage";
import {AuthorizationPage} from "./Components/AuthorizationPage/AuthorizationPage";
import {MainPage} from "./Components/MainPage/MainPage";
import {Provider} from "react-redux";
import {store} from "./Slices";

function App() {
  return (
      <Provider store={store}>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<MainPage />} />
                  <Route path="login" element={<AuthorizationPage />} />
                  <Route path="*" element={<NotFoundPage />} />
              </Routes>
          </BrowserRouter>
      </Provider>
  );
}

export default App;
