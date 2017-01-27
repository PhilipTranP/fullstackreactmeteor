import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Template } from 'meteor/templating'
import { Blaze } from 'meteor/blaze'

class Accounts extends Component {

	componentDidMount() {
		this.view = Blaze.render(Template.loginButtons, // loginButton shipped Meteor Blaze
			ReactDOM.findDOMNode(this.refs.container) //ref to container class of the React Virtual DOM
			) //assiged whatever rederred to this.view so later we can cleanup 
	}

	componentWillUnmount() {
        Blaze.remove(this.view)
	}

	render() {
		return (
			<div ref="container"></div>
		)
	}
}

export default Accounts