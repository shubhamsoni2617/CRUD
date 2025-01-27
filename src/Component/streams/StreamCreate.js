import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions/';
import StreamForm from './StreamForm'

class StreamCreate extends Component{

    onSubmit=(formValues)=>{
        console.log(formValues)
        this.props.createStream(formValues)
    }

    render(){

        return (
            <div>
                <h3>Create a Stream</h3>
                <StreamForm onSubmit={this.onSubmit}/>
            </div>
       
        )
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        createStream: (formValues)=>dispatch(createStream(formValues))
    }
}


export default connect(null, mapDispatchToProps)(StreamCreate)