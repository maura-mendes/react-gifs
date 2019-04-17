import React, { Component } from 'react';

class Gif extends Component{

	handleClick = () => {
	    if (this.props.selectGif) {
	      this.props.selectGif(this.props.id);
	    }
	  }

	render() {
		// code to handle null on selected gif. Selected gif will appear empty 
		// if (!this.props.id) {
		// 	return null;
		// }

		const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`
		return(
			<img src={src} alt="" className="gif" onClick={this.handleClick}/>
		);
	}
}

export default Gif;

// https://media.giphy.com/media/gfNZ6wUlPnpOhwEw0y/giphy.gif
// https://media.giphy.com/media/gkQwUerEa1MZ1Mhu70/giphy.gif