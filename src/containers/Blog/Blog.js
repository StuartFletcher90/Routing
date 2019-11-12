import React, { Component } from 'react';
// import axios from 'axios';
import { Route, NavLink, Switch} from 'react-router-dom';
//! Import redirect if needed
import './Blog.css';
import Posts from './Posts/Posts';
import asyncComponent from '../../hoc/asyncComponent';
// import NewPost from './NewPost/NewPost';


const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
});
//! Creates a new bundle component within our hoc, loading our components asynchronously
//! Super useful for bigger apps.

class Blog extends Component {
    state = {
        auth: true
    }

    render () {
        

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/posts/" exact activeClassName="my-active" activeStyle={{
                                color: '#fa923f',
                                textDecoration: 'underline'
                            }}>Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#bants',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                    {/* <Route path="/" exact render={() => <h1>Welcome to my blog page :3</h1>} /> */}
                    {/* <Route path="/new-post" exact render={() => <h1>New Posts</h1>} /> */}
                    <Switch>                        
                        {this.state.auth ? <Route path="/new-post" exact component={AsyncNewPost} /> : null}
                        <Route path="/posts" component={Posts} />
                        <Route render ={() => <h1>Not Found</h1>} />
                        {/* <Redirect from="/" to="/posts" /> */}
                        {/* <Route path="/" component={Posts} /> */}
                    </Switch>
            </div>
        );
    }
}

export default Blog;