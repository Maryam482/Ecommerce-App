import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Registeration from './pages/Registeration';
import './App.css';
import FirebaseAuth from './components/FirebaseAuth';


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import ShopPage from './pages/shop/shop.component';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
export default function App() {
  const classes = useStyles();
  // const [open, set] = useState(true)
  // const mystyle = {
  //   color:"white",
  //   float:"Right",
  //   justifyContent:"between",
  //   marginRight:70,
  //   padding: "10px",
  //   fontFamily: "Arial"
  // };

  return (
    <div className={classes.root}>
      <Router>
      <AppBar position="static">
        <Toolbar >
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className = {classes.title}></Typography>
  
        <Button color="inherit"><Link className = "link" to='/'>Home</Link> </Button>
          <Button color="inherit"><Link className="link" to='/ShopPage'>Product</Link></Button>
        {/* <Button color="inherit"> <Link className="link" to='/Cart'>Cart</Link></Button>  */}
        <Button color="inherit"> <Link className="link" to='/Registeration'>Register</Link></Button> 
        <Button color="inherit"> <Link className="link" to='/Login'>Login</Link></Button> 
        </Toolbar>
      </AppBar>
 
    <Switch>
    <Route path = "/ShopPage">
          <ShopPage/>
        </Route>
        {/* <Route path = "/Cart">
        <Cart/>
      </Route> */}
      <Route path = "/Registeration">
        <Registeration/>
      </Route>
      <Route path = "/Login">
        <FirebaseAuth/>
      </Route>
         <Route path = "/">
        <Home/>
      </Route>
    </Switch>
    </Router>
    </div>
  );
}
