import React, { Component } from 'react'

class Dino extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          comment: this.props.comments[0],
          editingComment: ""
        };
    }

    changeEditingComment = (evt) => {
        console.log(evt.target.value)
        this.setState({
            editingComment: evt.target.value
        })
    }

    editComment = () => {
        console.log(this.state.editingComment);
        const newComment = this.state.editingComment;
        this.setState({ comment: newComment })
    }

    render () {
        return (
            <div>
                <h1>Title: {this.props.title}</h1>
                <p>Author: {this.props.author}</p>
                <p>Body: {this.props.body}</p>
                <h2>Comments</h2>
                <p>{this.state.comment}</p>
                <input value={this.state.editingComment} onChange={this.changeEditingComment}/>
                <button onClick={this.editComment}>Edit</button>
            </div>
        )
    }
}

export default Dino;