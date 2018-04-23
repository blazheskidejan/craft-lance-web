import React from 'react';

class CategoryItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            hover: false
        }
        this.mouseOverHandler = this.mouseOverHandler.bind(this);
        this.mouseOutHandler = this.mouseOutHandler.bind(this);
    }

    mouseOverHandler(){
        this.setState({hover: true});
    }

    mouseOutHandler(){
        this.setState({hover: false});
    }

    render(){
        return (
            <div style={styles.mainDiv} onClick={this.props.onClick} onMouseOver={this.mouseOverHandler} onMouseOut={this.mouseOutHandler}>
                <img style={this.state.hover ? {...styles.icon, borderBottom: '2px solid grey'} : {...styles.icon, borderBottom: '2px solid white'}} src={this.props.src} alt={this.props.title}/>
                <p style={styles.title}>{this.props.title}</p>
                <p style={this.state.hover ? {...styles.miniDesc, visibility: 'visible'} : styles.miniDesc}>{this.props.miniDesc}</p>
            </div>
        );
    }
}

const styles = {
    mainDiv: {
        textAlign: 'center'
    },
    icon: {
        width: '60px',
    },
    title: {
        margin: '5px',
        padding: '0px',
        fontSize: '24px'
    },
    miniDesc: {
        margin: '5px',
        padding: '0px',
        fontSize: '14px',
        visibility: 'hidden'
    },
}   

export default CategoryItem;