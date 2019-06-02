import React from 'react';

class SearchBar extends React.Component {

    state = { term:''};

    onFormSubmit = event =>{
        event.preventDefault();
        this.props.onUSubmit(this.state.term)
        // console.log(this.props)    
    }

    render(){
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label><h2>Image Search</h2></label>
                        <input 
                            type="text"
                            value= {this.state.term}
                            onChange={e=>this.setState({term: e.target.value})}/>
                    </div>
                </form>
            </div>    
        );
    };
}

export default SearchBar;