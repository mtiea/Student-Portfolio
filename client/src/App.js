import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/navbar/Nav"
import Projects from "./components/pages/projects";
// import Contact from "./components/pages/contact";
import About from "./components/pages/about";
import Footer from "./components/footer/footer";
const express = require('express');
const app = express();


function App() {

app.get('/projects', function(req, res) {
res.redirect('/projects')
})

  return (


<div>
<Router>      
<Nav />
<Route exact path="/react-portfolio" component={About}  />
<Route exact path="/projects" component={Projects} />
{/* <Route exact path="/contact" component={Contact}   />  */}

</Router>
<Footer/>
</div>
  )};

export default App;