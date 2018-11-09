import React, { Component } from 'react'
import PropTypes from 'prop-types'
import "./C.css"
import { ColorContext } from './Context.jsx'


class C extends Component {
	constructor(props){
		super(props)
		this.state = {
			color: '#000000'
		}
	}

	// shouldComponentUpdate(nextProps,nextState){
	// 	if(nextState.color === this.state.color){
	// 		return false;
	// 	}else {
	// 		return true;
	// 	}
	// }

	componentDidMount(){
		console.log(this.props)
	}

	changeColor(color){
		this.setState({
			color: color
		})
	}


	render() {
		console.log('C is render');
		
		return <div className="B">
			<p> 
				<span style={{color: this.state.color}}>我是子组件C</span>&nbsp;
				<ColorContext.Consumer>
					{
						value => <span style={{color: value}}>context颜色</span>
					}
				</ColorContext.Consumer>
				{/* <ColorContext.Consumer children={ value => <span style={{color: value}}>context颜色</span> } /> */}
		
				{/* <span style={{color: this.context.color}}>context颜色</span> */}
			</p>
			<button className="cyan" onClick={this.changeColor.bind(this,'cyan')}>青色</button>
			<button className="blue" onClick={this.changeColor.bind(this,'blue')}>蓝色</button>
		</div>
		
	}
}

// C.contextTypes = {
// 	color: PropTypes.string
// }

export default C
