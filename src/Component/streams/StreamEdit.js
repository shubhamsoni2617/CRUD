import React, { Component} from 'react';
import { connect } from 'react-redux';

import { fetchStream, editStream} from '../../actions';
import StreamForm from './StreamForm';


class StreamEdit extends Component{

    componentDidMount(){
            this.props.fetchStream(this.props.match.params.id)
    }

    onSubmit=(formValues)=>{

        this.props.editStream(this.props.match.params.id, formValues)
    }

    render(){
        if(!this.props.stream){
                return '...loading'
        }
        console.log(this.props.stream)
        return (
            <div>
                <h3>Edit a Stream</h3>
                <StreamForm onSubmit={this.onSubmit}
                initialValues={{title:this.props.stream.title,
                    description:this.props.stream.description
                }}/>
            </div>
        )
    }
}

const mapStateToProps=(state, ownProps)=>{
    return {
   stream:state.streams[ownProps.match.params.id]
    }
}

const mapDispatchToProps= (dispatch) =>{
    
    return {
        fetchStream:(id)=>dispatch(fetchStream(id)),
        editStream: (id, formValues)=> dispatch(editStream(id, formValues))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StreamEdit);