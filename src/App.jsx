import React, { Component } from 'react'
import PropTypes from 'prop-types'
import "./App.css"
import B from './B.jsx'

//新api
import { ColorContext } from './Context.jsx'


class App extends Component {
	constructor(){
		super()
		this.state = {
			color: '#000000',
			childColor: '#000'
		}
	}


	// getChildContext(){
	// 	return {
	// 		color: this.state.childColor
	// 	}
	// }

	

	changeColor(color){
		this.setState({
			color: color
		})
	}

	changeChildColor(){
		this.setState((state)=>({
			childColor: state.childColor === "orangered" ? "orange" : "orangered"
		}))
	}


	render() {
		console.log('A is render')
		
		return <div className="App">
			<p style={{color: this.state.color}}>我是父组件A</p>
			<button className="red" onClick={this.changeColor.bind(this,'orangered')}>红色</button>
			<button className="orange" onClick={this.changeColor.bind(this,'orange')}>橙色</button>
			<button className="red" onClick={this.changeChildColor.bind(this)}>改变C</button>
			<div className="App-child">
				<ColorContext.Provider value={this.state.childColor}>
					<B></B>
				</ColorContext.Provider>
				{/* <B></B> */}
			</div>
		</div>
		
	}
}

// App.childContextTypes = {
// 	color: PropTypes.string
// }


export default App
