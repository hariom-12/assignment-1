import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chargers from "./component/page/Chargers";
import Customers from "./component/page/Customers";
import Dashboard from "./component/page/Dashboard";
import Footer from "./component/comman/Footer";
import Header from "./component/comman/Header";
import Home from "./component/page/Home";
import Nav from "./component/comman/Nav";
import Reports from "./component/page/Reports";

function App() {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <main className="col-md-9 ml-sm-auto col-lg-10 px-md-4 py-4">
            <BrowserRouter>
              <Nav />
              <Routes>
                <Route exact path="/dashboard" element={<Dashboard />} />
                <Route exact path="/chargers" element={<Chargers />} />
                <Route exact path="/customers" element={<Customers />} />
                <Route exact path="/reports" element={<Reports />} />
                <Route exact path="/" element={<Home />} />
              </Routes>
            </BrowserRouter>
            <Footer />
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
