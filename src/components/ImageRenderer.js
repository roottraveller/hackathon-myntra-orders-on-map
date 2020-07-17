import React from 'react';

class ImageRenderer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            src_img: props.src_img
        }
    }

    componentWillMount() {
        // this.setState({src_img: props.src_img})
    }

    render() {
        return <div>
            <a href="#">
                <img src={this.state.src_img} className="App-orders-item-img" alt="logo"/>
            </a>
        </div>
    }

}

export default ImageRenderer;