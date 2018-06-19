import React, { Component } from 'react'
import { connect } from 'react-redux';
import Matches from './Matches'


class MatchesContainer extends Component {

    // In componentDidMount: get activeUser and users from the store
    // call getmatches action creator with activeUser and users 
    // In getmatches action creator filter the users out that are not a match for the activeUser
    // save matches to the store


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

