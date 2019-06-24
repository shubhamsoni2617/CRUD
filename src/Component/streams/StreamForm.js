import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends Component{
    
    renderError=({touched, error})=>{
        if(touched && error){
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }
    }

    renderField=({input, label, meta})=>{
        
        const className=`field ${meta.error && meta.touched?'error':''}`    

           
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input}/>
                {this.renderError(meta)}
            </div>
        )
        
    }

    onSubmit=(formValues)=>{
        
        console.log(formValues)
        this.props.onSubmit(formValues)
    }
   
 

    render(){
        console.log(this.props)
        return (
            <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="title" component={this.renderField} label="Enter Title"/>
                <Field name="description" component={this.renderField} label="Enter Description" />
                <button className="ui button primary">Submit</button>
            </form>
        )
    }
}

const validate=(formValues)=>{
    console.log(formValues)
    let error={};
    if(!formValues.title){
        error.title='Enter the Title'
    }
    if(!formValues.description){
        error.description='Enter the Description'
    }
    return error;

}


export default reduxForm({ form: 'streamForm', validate})(StreamForm);

