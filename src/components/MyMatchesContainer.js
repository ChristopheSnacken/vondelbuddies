import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {

    };
}

class MyMatchesContainer extends Component {
    render() {
        return (
            <div>
                <p>my matches</p>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(MyMatchesContainer);