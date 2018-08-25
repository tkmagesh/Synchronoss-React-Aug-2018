import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import BugStats from './views/BugStats';
import BugSort from './views/BugSort';
import BugEdit from './views/BugEdit';
import BugList from './views/BugList';

import bugActionCreators from './actions';


class BugTracker extends Component{
	componentDidMount(){
		this.props.load();
	}
	render(){
		let { bugs, toggle, removeClosed, addNew } = this.props;
		return(
			<section>
				<BugStats bugs={bugs} />
				<BugEdit addNew={addNew} />
				<BugSort />
				<BugList {...{bugs, removeClosed, toggle}} />
			</section>
		)
	}
}

function mapStateToBugTrackerProps(storeState){
	//let bugs = storeState.bugsData.filter((bug, index) => index % 2 === storeState.spinnerData % 2);
	let bugs = storeState.bugsData;
	return { bugs : bugs };
}
function mapDispatchToBugTrackerProps(dispatch){
	let bugActions = bindActionCreators(bugActionCreators, dispatch);	
	return bugActions;
}

export default connect(
	mapStateToBugTrackerProps,
	mapDispatchToBugTrackerProps
)(BugTracker);
