import React from 'react';

export class Post extends React.Component{
    constructor() {
        super();
        this.state = {
            post : {}
        };
    }
    componentDidMount(){
        const formData = new FormData();
        formData.append('id',1);
        fetch('http://y91756wn.beget.tech/php/getPost.php',{
            method : 'POST',
            body : formData
        })
            .then(response => response.json())
            .then(result => {
                this.setState({
                    post : {
                        title : result.title,
                        text : result.text,
                        author : result.author,
                        date_added : result.date_added
                    }
                })
            });
    }
    render(){
        return (
            <>
                <h1 className="text-center">{this.state.post.title}</h1>
                <div className="my-3 mx-auto col-md-8 entry-text">
                    {this.state.post.text}
                </div>
                <div className="my-3 mx-auto col-md-8 entry-meta">
                    <i className="fas fa-user me-2 ms-2" aria-hidden="true"></i>Автор : {this.state.post.author}
                    <i className="fas fa-clock me-2 ms-2" aria-hidden="true"></i>Дата добавления : {this.state.post.date_added}
                </div>
            </>
        );
    }
}