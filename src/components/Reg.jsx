import React from 'react';

export class Reg extends React.Component{
    constructor() {
        super();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            name : '',
            lastname : '',
            email : '',
            pass : ''
        };
    }

    handleSubmit(event){
        event.preventDefault();
        if(!this.state.info){
            const formData = new FormData();
            formData.append('name',this.state.name);
            formData.append('lastname',this.state.lastname);
            formData.append('email',this.state.email);
            formData.append('email',this.state.pass);
            fetch('http://y91756wn.beget.tech/old/php/handlerReg.php',{
                method : 'POST',
                body : formData
            }).then(response => response.json())
                .then(result => {
                    if(result.result === 'success'){
                       this.setState({
                          regSuccessful : 'Пользователь успешно зарегистрирован!'
                       });
                    }
                });
        } else {
            alert('Email!');
        }
    }

    handleInputChange(event){
        const value = event.target.value;
        const name = event.target.name;
        if(name === 'email'){
            const formData = new FormData();
            formData.append('email',value);
            fetch('http://y91756wn.beget.tech/old/php/checkEmail.php',{
                method : 'POST',
                body : formData
            }).then(response => response.json())
                .then(result => {
                    if(result.result === 'exist'){
                        this.setState({
                            info : 'Такой email уже есть'
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
        if(this.state.regSuccessful){
            return (
                <p style={{backgroundColor : '#B7F6CA',color : '#232F27'}}>
                    {this.state.regSuccessful}
                </p>
            );
        } else return (
            <>
                <div className="col-sm-5 mx-auto my-5">
                    <h1 className="text-center my-3">Регистрация на сайте</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="mb-3">
                            <input onChange={this.handleInputChange} type="text" className="form-control" placeholder="Имя" name="name" required />
                        </div>
                        <div className="mb-3">
                            <input onChange={this.handleInputChange} type="text" className="form-control" placeholder="Фамилия" name="lastname" required />
                        </div>
                        <div className="mb-3">
                            <input onChange={this.handleInputChange} type="text" className="form-control" placeholder="E-mail" name="email" required />
                            <p style={{color : "red"}}>{this.state.info}</p>
                        </div>
                        <div className="mb-3">
                            <input onChange={this.handleInputChange} type="password" className="form-control" placeholder="Пароль" name="pass" required />
                        </div>
                        <div className="mb-3">
                            <input type="submit" className="form-control btn btn-primary" value="Зарегистрироваться"
                                   name="reg" />
                        </div>
                    </form>
                </div>
            </>
        );
    }
}