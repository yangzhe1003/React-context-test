import React, { Component } from 'react'
import "./B.css"
import PropTypes from 'prop-types'
import C from './C.jsx'
import { ColorContext } from './Context.jsx'



class B extends Component {
	constructor(props){
		super(props);
		this.state = {
			color: '#000000'
		}
	}
	

	shouldComponentUpdate(nextProps,nextState){
		if(nextState.color === this.state.color){
			return false;
		}else {
			return true;
		}
		
	}

	changeColor(color){
		this.setState({
			color: color
		})
	}


	render() {
		console.log('B is render')
		return <div className="A">
			<p style={{color: this.state.color}}>我是子组件B</p>
			<button className="yellow" onClick={this.changeColor.bind(this,'yellow')}>黄色</button>
			<button className="green" onClick={this.changeColor.bind(this,'green')}>绿色</button>
			<div className="A-child">
			{/* <ColorContext.Consumer>
				{
					value => <C color={value}></C>
				}
			</ColorContext.Consumer> */}
				
			<C></C>
                
			</div>
		</div>
		
	}
}

// B.contextTypes = {
// 	color: PropTypes.string
// }


export default B
