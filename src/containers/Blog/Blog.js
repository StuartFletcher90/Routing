import React, { Component } from 'react';
// import axios from 'axios';
import { Route, NavLink, Switch
 } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from '../Blog/NewPost/NewPost';
import FullPost from './FullPost/FullPost';

class Blog extends Component {

    render () {
        

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/" exact activeClassName="my-active" activeStyle={{
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
                <section className="Posts"> 
                <Route path="/" exact component={Posts} />
                    {/* <Route path="/" exact render={() => <h1>Welcome to my blog page :3</h1>} /> */}
                    {/* <Route path="/new-post" exact render={() => <h1>New Posts</h1>} /> */}
                    <Switch>
                        <Route path="/new-post" exact component={NewPost} />
                    </Switch>
                
                </section>
            </div>
        );
    }
}

// No longer need to use the switch statement due to only having one Route.
// Posts and NewPost will no cause conflicts due to being seperate Routes.
export default Blog;