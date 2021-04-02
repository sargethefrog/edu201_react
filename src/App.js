import './App.css';
import {Route, BrowserRouter, NavLink} from "react-router-dom";
import {Menu} from './components/Menu';
import {PostList} from "./components/PostList";
import {Post} from './components/Post'
import {AddPost} from './components/AddPost';
import {Reg} from './components/Reg';

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
    <div className="container">
        <BrowserRouter>
            <Menu />
            <Route exact path="/" render={() => <PostList />}/>
            <Route path="/addPost" render={() => <AddPost />} />
            <Route path="/post" render={() => <Post />} />
            <Route path="/reg" render={() => <Reg />} />
        </BrowserRouter>
    </div>
  );
}

export default App;
