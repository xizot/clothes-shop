import React from "react";
import { Navbar } from "./components";
import { GlobalStyle } from "./GlobalStyle";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import ScrollToTop from "./ScrollToTop";
// import Routes from "./routes";

function App() {
    // return <Routes />;
    return (
        <Router>
            <ScrollToTop />
            <GlobalStyle />
            <Navbar />
            <Routes />
        </Router>
    );
}

export default App;
