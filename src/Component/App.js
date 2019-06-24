import React from 'react';
import { Router, Route } from 'react-router-dom'

import history from '../history'
import Header from './Header'
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';


const app=()=>{

  return (
      <Router history={history}>
        <div>
          <Header />
          <Route path='/' exact component={StreamList} />
          <Route path='/stream/new' exact component={StreamCreate} />
          <Route path='/stream/delete/:id' exact component={StreamDelete} />
          <Route path='/stream/:id' exact component={StreamShow} />
          <Route path='/stream/edit/:id' exact component={StreamEdit} />

       </div>
    
    </Router>

  )
}

export default app;
