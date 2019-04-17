import React, { Component } from 'react';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

import giphy from 'giphy-api';

const GIPHY_API_KEY = 'IQl29ks80NIiHJfQ4t72Sg9mqB01vSGZ';


class App extends Component{
	constructor (props) {
		super(props);

		this.state = {
			gifs: [],
			selectedGifId: 'BBkKEBJkmFbTG'
		}

		this.search("homer thinking");
	}

	search = (query) => {
	    giphy({ apiKey: GIPHY_API_KEY, https: true })
	     .search({
	       q: query,
	       rating: 'g',
	       limit: 10
	    }, (err, result) => {
	       this.setState({
	         gifs: result.data
	       });
	    });
	}
	
	selectGif = (id) => {
	    this.setState({
	      selectedGifId: id
	    });
	  }


	render() {
		// const gifffs = [
		// 	{id: "JpGAbE2hAMzP6x3n0l" },
		// 	{id: "gfNZ6wUlPnpOhwEw0y" },
		// 	{id: "gkQwUerEa1MZ1Mhu70"}
		// ];
	    return (
	      	<div>
		        <div className="left-scene">
					<SearchBar searchFunction={this.search}/>
					<div className="selected-gif">
						<Gif id={this.state.selectedGifId} />
					</div>

		        </div>
		        <div className="right-scene">
		        	<GifList gifs={this.state.gifs} selectGif={this.selectGif}/>
		        </div>
	     	</div>
	    );
	}
}

export default App;