import React from 'react';
import SearchBar from '../SearchBar/SearchBar';


class Nav extends React.Component {
    render() {
        return (
            <>
                {/* {console.log(this.props.logOutFunction)} */}
                <SearchBar
                    onSearch={this.props.onSearch}
                    logOutFunction={this.props.logOutFunction}
                    clearAllFunction={this.props.clearAllFunction}
                    loadDefaultFn={this.props.loadDefaultFn}
                />
            </>
        )
    }
}

export default Nav;
