import React, { Component } from 'react';

class BugEdit extends Component{
	newBugName = '';
	onBtnAddNewClick = () => {
		this.props.addNew(this.newBugName);
	}
	render(){
		return(
			<section className="edit">
				<label htmlFor="">Bug Name :</label>
				<input type="text" onChange={evt => this.newBugName = evt.target.value}/>
				<input type="button" value="Add New" onClick={this.onBtnAddNewClick} />
			</section>
		)
	}
}

export default BugEdit;