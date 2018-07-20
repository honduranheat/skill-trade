import React, { Component } from "react";
import PropTypes from 'prop-types';
//import Header from '../Header/header';

class UserInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: ''
        }
    }
    render() {
        return (
            <form className='column'>
                <label className='header' htmlFor='username'>
                    {this.props.label}
                    </label>
                    <input id='username' />
                </form>
        )
    }
}

UserInput.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired
}

class AddListing extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(id, title) {
        this.setState(function() {
            var newState = {};
            newState[id + 'Title'] = title;
            return newState;
        })
    }


  render() {
  
    var title = this.state.title;

    return (

      <div>  
        <p>Add A listing</p>

        <div className='row'>
            {!title && <UserInput id='title' label='Add Listing' onSubmit={this.handleSubmit}/>}
            </div>
      </div>
    );
  }

}

export default AddListing;