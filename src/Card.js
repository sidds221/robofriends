import React, {Component} from 'react';
import './App.css';

class Card extends Component{

	
	render(){

			const {name, email, id} = this.props;

		return (

			<div className = 'bg-light-green dib br3 pa3 ma2 grow bw2 shadow-1'>
				<img alt = 'photo' src = {`https://robohash.org/${id}?50X50`} />
				<div>
					<h2 className = "f4">{name}</h2>
					<p>{email}</p>
				</div>
			</div>

			);
				
	}
};
export default Card