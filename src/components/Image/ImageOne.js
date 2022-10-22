import React, { Component }  from 'react';
import '../../App.css';

class ImageOne extends Component {
    state = {
        url: "https://previews.dropbox.com/p/thumb/ABsoLSA6ULftUuNAN9RgrGdAAzTNaxEhf6pvxuN169iayzzo8eRjKUUiQNXAyR79phKIKtfTK9srF2MycXa4K4PMbi_fDbVt9VxNYHKgapyuchdifMZbcTePzXhvpoCM0Wfm1vtWf83zjIy7HJFm2lmdLLimy84o49JiVxk5w6dSmEiDdYiuxdr5oTeV6zx3g8Z0ocNdXwsR3KcZsnGxHfxi3BkzbN5tjGrVBfHew79dZxZFS7osrTTOlKuVGndVDZx3B16KLyg57C06Dw8DOSxpKm4K9i-n9-w1-JWxdCepd66-wCkhWDzdLogdxZrBLHEhMojwAcTxGpblYHILELYAv2dY5y9SDe6iEol61nH3Q9lLbPKVsH9poveKWi2gwWhPPsLSTAjHNPw7zbdo-ND1K7G_npEr5O0VP3gfNtFhooWHLpBJUIgZUY9PuwB-Qzo/p.jpeg"
    }

    defaultProps = {
        borderSize: 0,
        height: 0,
        fullScreen: false,
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props.height);
    }



    render() {
        return (
            <div>
                <div style={{heigth: this.props.height - 80}}>
                    <img 
                        className={`image-one ${this.props.fullScreen ? " full-screen": ""}`} 
                        src={this.state.url} 
                        style={{height: this.props.height, padding: this.props.borderSize}} 
                    alt="Italian Trulli"/>
                    <div className='screen-image-one d-flex flex-column-reverse align-items-start' style={{height: "100%"}}>
                        <h1 style={{fontSize: "6vw"}}>SYBLS PHOTOGRAPHY</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default ImageOne;
