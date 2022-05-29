import { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import NavBar from "./Components/Navbar";
import SideBar from "./Components/SideBar";
import Home from "./pages/Home";
import SigninElem from "./pages/Signin";

class App extends Component {
  state = {
    isOpen: false,
  };
  setIsOpens = () => {
    this.setState({ isOpen: !this.state.isOpen });

  };
  
  render() {
    return (
      <Router>
        <NavBar setIsOpens={this.setIsOpens} />
        <SideBar isOpen={this.state.isOpen} setIsOpens={this.setIsOpens} />

        <Routes>
          <Route
            path=""
            element={
              <Home setIsOpens={this.setIsOpens} isOpen={this.state.isOpen} />
            }
          />
          <Route path="/signin" element={<SigninElem />} />
        </Routes>
        <Footer />
      </Router>
    );
  }
}

export default App;
