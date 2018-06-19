import React, { Component } from 'react'
import { connect } from 'react-redux';
import Matches from './Matches'


class MatchesContainer extends Component {

    accept = id => console.log('accept ' + id);
    reject = id => console.log('reject ' + id);

    render () {
        return (
            <div>
                <Matches matches={this.props.matches} accept={this.accept} reject={this.reject}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        matches: state.matches
    };
}


export default connect(
    mapStateToProps,
)(MatchesContainer);

