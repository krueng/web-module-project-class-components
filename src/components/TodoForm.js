import React from 'react';

class TodoForm extends React.Component {
    //constructor with state
    constructor() {
        super();
        this.state = {
            input: ''
        }
    }

    handleChanges = evt => {
        //update state with each key stroke
        this.setState({
            input: evt.target.value
        });
    };

    //class property to submit form
    handleSubmit = evt => {
        evt.preventDefault();
        this.state.input && this.props.handleAddTask(this.state.input); //if input is empty don't add
        // this.setState({
        //     input: ''
        // });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChanges} type='text' name='task' />
                <button>Add</button>
            </form>
        );
    }


}

export default TodoForm;