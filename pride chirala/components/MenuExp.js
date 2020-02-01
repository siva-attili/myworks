import React from 'react';
import { slide as Menu } from 'react-burger-menu';
 import{HashRouter,Link} from 'react-router-dom';
export default class MenuExp extends React.Component {
  showSettings (event) {
    event.preventDefault();
    }
 
  render () {
    return (
      <HashRouter>
<Menu>
        <Link to="home" className="menu-item" href="/">Home</Link>
        
        <Link onClick={ this.showSettings } className="menu-item--small" to="">Settings</Link>
      </Menu>
      </HashRouter>
      
    );
  }
}
