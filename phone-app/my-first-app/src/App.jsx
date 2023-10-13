import { Route, Routes } from "react-router-dom";

import { Home } from "./views/Home";
import { PhoneList } from "./views/PhoneList/PhoneList";
import { PhoneDetails } from "./views/PhoneDetails/PhoneDetails";
import { NavBar } from "./components/NavBar";
import { Page } from "./components/Page/Page";

import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Page>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/phones" element={<PhoneList />} />
          <Route path="/phones/:id" element={<PhoneDetails />} />
        </Routes>
      </Page>
    </>
  );
}

export default App;
