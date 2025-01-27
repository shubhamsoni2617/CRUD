import React, { Component } from 'react';
import { connect }  from 'react-redux';
import {Link } from 'react-router-dom';

import { fetchStreams } from '../../actions'

class StreamList extends Component{

    componentDidMount(){
        this.props.fetchStreams()
    }

    renderAdmin(stream){
        if(this.props.currentUserId===stream.userId){
            return (
                <div className="right floated content">
                    <Link to={`/stream/edit/${stream.id}`} className="ui button primary">Edit</Link>
                    <Link to={`/stream/delete/${stream.id}`} className="ui button red">Delete</Link>
                </div>
            )
        }
    }

    renderCreateStream(){
        if(this.props.isSignedIn){
            return (
                <div style={{textAlign: 'right'}}>
                    <Link to='/stream/new'>
                      <button className="ui button green">Create New</button>
                    </Link>
                </div>
               
            )
        }
    }

    renderList(){
        return this.props.streams.map(stream=>{
            return (
                <div className="item" key={stream.id}>  
                    {this.renderAdmin(stream)}
                    <i className="large middle aligned icon camera" />
                    <div className="content">
                        <Link to={`/stream/${stream.id}`} className="header">{stream.title}</Link>
                        <div className="description">
                        {stream.description}
                        </div>
                    </div>
                </div>
            )
        })
    }
    render(){
           
            return (
                <div>
                     <h2>Stream List</h2>
                     <div className="ui celled list">
                         {this.renderList()}
                         {this.renderCreateStream()}
                     </div>
               

                </div>
            )
    }
}


const mapStateToProps=(state)=>{
   
    
    return {
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn,
        streams: Object.values(state.streams)
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        fetchStreams: ()=>dispatch(fetchStreams())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(StreamList);