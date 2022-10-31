import React, { Component }  from 'react';
import '../App.css';

class Footer extends Component {

    state = {
        
    }

    defaultProps = {
        height: 400,
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }


    render() {
        return (
            <div className='page-footer'>
                <div className='container-fluid h-100'>
                    <div className='row'>
                        <div className='col'>
                            <a>Rendez-vous</a>
                        </div>
                        <div className='col'>
                            <a>Services</a>
                        </div>
                        <div className='col'>
                            <a>Contact</a>
                        </div>
                        <div className='col'>
                            <a>About</a>
                        </div>
                    </div>
                    <div className='row '>
                        <div className='col'>
                            COPYRIGHT © 2022 Photo SYLVAIN
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
