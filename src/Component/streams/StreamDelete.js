import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Modal from '../Modal';
import history from '../../history'
import { fetchStream, deleteStream } from '../../actions'

class StreamDelete extends Component{

    componentDidMount(){

        this.props.fetchStream(this.props.match.params.id)
    }

    renderAction=()=>{
        const { id } =this.props.match.params
        return (
            <React.Fragment>
                <button onClick={()=>this.props.deleteStream(id)} className="ui button negative">Delete</button>
                <Link to='/' className="ui button">Cancel</Link>
            </React.Fragment>
        )
    }

    renderContent=()=>{
        if(!this.props.stream){
            return 'Are you Sure?'
        }
        return `Are you Sure you want to delete stream with title : ${this.props.stream.title}`
    }
    
    render(){
        return (
            <div>
                <h3>StreamDelete</h3>
                <Modal title="Delete Stream" content={this.renderContent()}
                    actions={this.renderAction()} onDismiss={()=>history.push('/')}/>
            </div>
       )
    }
    
}

const mapStateToProps=(state,ownProps)=>{

    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        fetchStream: (id) => dispatch(fetchStream(id)),
        deleteStream: (id) => dispatch(deleteStream(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StreamDelete);