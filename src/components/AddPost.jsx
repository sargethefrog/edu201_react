import React from 'react';

export class AddPost extends React.Component{
    constructor() {
        super();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.sendForm = this.sendForm.bind(this);
        this.state = {
            title : '',
            text : '',
            author : ''
        };
    }
    sendForm(event){
        event.preventDefault();
        const formData = new FormData();
        formData.append('title',this.state.title);
        formData.append('text',this.state.text);
        formData.append('author',this.state.author);
        fetch('http://y91756wn.beget.tech//php/addPost.php',{
            method : 'POST',
            body : formData
        }).then(response => response.json())
            .then(result => {
                console.log(result);
            });
    }
    handleInputChange(event){
        const value = event.target.value;
        const name = event.target.name;
        if(name === 'title'){
            const formData = new FormData();
            formData.append('title',value);
            fetch('http://y91756wn.beget.tech/php/checkTitle.php',{
                method : 'POST',
                body : formData
            }).then(response => response.json())
                .then(result => {
                    if(result.result === 'exist'){
                        this.setState({
                            info : 'Такой заголовок уже есть'
                        });
                    } else {
                        this.setState({
                            info : ''
                        });
                    }
                });
        }
        this.setState({
            [name] : value
        });
    }
    render(){
        return (
            <div className="col-md-5 my-5 mx-auto">
                <h1 className="text-center my-3">Добавление поста</h1>
                <form onSubmit={this.sendForm}>
                    <div className="mb-3">
                        <input value={this.state.title} name="title" onChange={this.handleInputChange} type="text" className="form-control" placeholder="Заголовок статьи"/>
                        <p style={{color : "red"}}>{this.state.info}</p>
                    </div>
                    <div className="mb-3"><textarea value={this.state.text} onChange={this.handleInputChange} className="form-control" placeholder="Текст" name="text"></textarea>
                    </div>
                    <div className="mb-3"><input value={this.state.author} type="text" onChange={this.handleInputChange} name="author" className="form-control" placeholder="Автор"/></div>
                    <div className="mb-3"><input type="submit" className="form-control btn btn-primary" value="Добавить запись"/></div>
                </form>
            </div>
        );
    }
}