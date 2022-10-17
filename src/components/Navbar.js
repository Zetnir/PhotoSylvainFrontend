import React, { Component }  from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class Navbar extends Component {
    state = {
        navbarOpen: false,
    }

    constructor(props) {
        super();
        this.handleToggle = this.handleToggle.bind(this)
    }

    componentDidMount() {
    }

    handleToggle() {
        this.setState({...this.state, navbarOpen: !this.state.navbarOpen});
    }

    render() {
        return (
            <nav className="page-header">
                <div className="container-fluid h-100">
                    <div className="row h-100">
                        <div className="col-lg-2 col-md-4 col-sm-6">
                            <div className='d-flex h-100 justify-content-start align-items-center'>
                                <div className='px-2'><Link to="/">Home</Link></div>
                            </div>
                            
                        </div>

                        <div className="col-lg-10 col-md-8 col-sm-6">
                            <div className='nav-bar d-flex h-100 justify-content-end align-items-center '>
                                <div className='px-4'><Link to="/work">Work</Link></div>
                                <div className='px-4'><Link to="/about">About</Link></div>
                                <div className='px-4'><Link to="/contact">Contact</Link></div>
                            </div>
                            <div className='nav-menu'>
                                <button onClick={this.handleToggle}><i class="fa-solid fa-bars"></i></button>
                                <ul className={`menuNav ${this.state.navbarOpen ? " showMenu" : ""}`}>
                                    <button onClick={this.handleToggle}><i class="fa-solid fa-chevron-left"></i></button>
                                    <li className='px-4'><Link to="/work">Work</Link></li>
                                    <li className='px-4'><Link to="/about">About</Link></li>
                                    <li className='px-4'><Link to="/contact">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            
        );
    }
}

export default Navbar;
