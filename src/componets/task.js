import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Task extends Component{
    styleCompleted(){
        return{
            fontSize: '20px',
            color: this.props.task.estado ? 'gray' : 'black',
            textDecoration: this.props.task.estado ? 'line-through' : 'none'
        }
    }
    render(){
        return <div style = {this.styleCompleted()}>
            { this.props.task.titulo } - 
            { this.props.task.comentario } - 
            { this.props.task.estado } - 
            { this.props.task.id }
            <input type = "checkbox"/>
            <button style = {btnDelete}>
                X
            </button>
        </div>
    }
}

Task.propTypes = {
    task: PropTypes.object.isRequired
}

const btnDelete = {
    fontSize: '18px',
    background: '#ea2027',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '50%',
    cursor: 'pointer'
}

export default Task;