import React, {Component} from 'react';
import './AddItem.css';

class AddItem extends Component {
    state = {
        task: '',
        description: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (e.target.task.value === '') {
            return false;
        } else {
            this.props.addItem(this.state);
            this.setState({
                task: '',
                description: ''
            });
        }
    };

    render () {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Task..." id="task" onChange={this.handleChange} value={this.state.task} />
                    <input type="text" placeholder="Description..." id="description" onChange={this.handleChange} value={this.state.description} />
                    <input type="submit" id="submit" value="Add" />
                </form>
            </div>
        );
    };
}

export default AddItem;