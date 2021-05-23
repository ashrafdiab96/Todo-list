import React from 'react';
import './TodoItems.css';

const TodoItem = (props) => {
    const items = props.items;
    const itemsLength = items.length;
    let listItems = <p className="noItems">There are no tasks!</p>;
    if (itemsLength) {
        listItems = items.map(item => {
            return (
                <div key={item.id}>
                    <span className="task">{item.task}</span>
                    <span className="desc">{item.description}</span>
                    <span className="del icon" onClick={() => props.deleteItem(item.id)}>&times;</span>
                </div>
            );
        });
    }
    
    return (
        <div className="listItems">
            <span className="task title">Task</span>
            <span className="desc title">Description</span>
            <span className="del title">Delete</span>
            <div className="items">
                {listItems}
            </div>
        </div>
    );
};

export default TodoItem;