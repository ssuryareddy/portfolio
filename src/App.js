import React, {useEffect} from 'react';
import './App.css';
import SideBar from './SideBar';
import Home from './Home';
import AboutMe from './AboutMe';
import Do from './Do';
import Contact from './Contact';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import SidebarOpen from './SidebarOpen';

function App() {
  const [open, setOpen] = React.useState(false);
  useEffect(() => {
      if (open) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }
    }, [open]);
  return (
    <Router>
    <div className="App">
      <SideBar open={open} setOpen={setOpen}/>
      <SidebarOpen open={open} setOpen={setOpen} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={AboutMe} />
        <Route path="/what-i-do" component={Do} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
