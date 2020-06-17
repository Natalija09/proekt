import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { Navigation } from './Navigation'
import Posts from './Posts'
import { Post } from './Post'
import Users from './Users'
import { User } from './User'
import { Todos } from './Todos'


class App extends React.Component {
  render() {
    return (
      <div >

        <Navigation />
        <Switch>
          <Route path='/users' component={Users} />
          <Route path='/user/:userId' component={User} />
          <Route path='/posts' component={Posts} />
          <Route path='/post/:postId' component={Post} />
          <Route path='/todos' component={Todos} />
        </Switch>
      </div>
    )
  }
}

export default App;