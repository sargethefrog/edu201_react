import './App.css';
import {Route, BrowserRouter, NavLink} from "react-router-dom";

function Menu(){
    return (
        <nav className="nav">
            <NavLink className="nav-link active" aria-current="page" to="/">Главная</NavLink>
            <NavLink className="nav-link" to="/about">О нас</NavLink>
            <NavLink className="nav-link" to="/contact-us">Контакты</NavLink>
        </nav>
    );
}

function MainPage(){
    return (
        <div className="container">
            <div className="col-md-8 mx-auto">
                <h1 className="text-center mb-4">Главная страница</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id dolor lorem. Integer sollicitudin placerat justo, et tempus urna sagittis posuere. Curabitur pulvinar, dui sed porta luctus, nulla urna efficitur elit, sit amet molestie magna lacus vitae neque. Ut non dui non augue euismod vulputate. Nam in dignissim nunc. Curabitur id nulla lobortis lacus convallis faucibus. Mauris est massa, interdum et venenatis in, efficitur at arcu. Sed auctor est sed elit rhoncus, cursus scelerisque diam mollis. Proin odio mauris, malesuada eget nisl nec, auctor interdum velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed eget leo sit amet nibh accumsan accumsan. Vestibulum porttitor tortor non massa pulvinar iaculis. Pellentesque quis egestas felis, eu convallis lorem.
                </p>
            </div>
        </div>
    );
}

function About(){
    return (
        <div className="container">
            <div className="col-md-8 mx-auto">
                <h1 className="text-center mb-4">О нас</h1>
                <p>
                    Integer aliquet maximus purus in venenatis. Nulla facilisi. Ut cursus, dui vitae fringilla ornare, lectus nisl venenatis purus, ut placerat tortor odio non sapien. Duis id pharetra massa. Proin ullamcorper lorem aliquet, dapibus dui in, imperdiet lectus. Etiam eu rutrum purus. Integer enim leo, egestas ac nulla eu, interdum varius quam. Donec justo odio, faucibus non augue et, hendrerit vulputate sapien. Aliquam feugiat aliquam pharetra. Suspendisse auctor, dui a ultricies rutrum, neque nunc rutrum sem, nec tristique massa nisl id est. Vivamus condimentum quis ipsum et interdum. Donec sodales nisi vitae metus euismod finibus.
                </p>
            </div>
        </div>
    );
}

function ContactUs(){
    return (
        <div className="container my-5">
            <form action="">
                <div className="mb-3"><input type="text" className="form-control"/></div>
                <div className="mb-3"><input type="text" className="form-control"/></div>
                <div className="mb-3"><textarea className="form-control"></textarea></div>
                <div className="mb-3"><input type="submit" className="form-control btn btn-primary"/></div>
            </form>
        </div>
    );
}

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Menu />
            <Route exact path="/" render={() => <MainPage />}/>
            <Route path="/about" render={() => <About />}/>
            <Route path="/contact-us" render={() => <ContactUs />}/>
        </BrowserRouter>
    </div>
  );
}

export default App;
