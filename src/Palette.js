import React, { Component } from 'react'

class Palette extends Component {
	render() {
		console.log(this.props.palette)
		return (
			<div className="Palette">
				{/* navbar goes here */}
				<div className="Palette-colors">{/* color boxes go here */}</div>
				{/* footer goes here */}
			</div>
		)
	}
}

export default Palette
