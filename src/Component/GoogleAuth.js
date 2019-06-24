import React, { Component } from 'react';
import { connect } from 'react-redux';
import *  as actions from '../actions' ;

class GoogleAuth extends Component{
    state={
                isSignedIn: null
            }

    componentDidMount(){

        
        window.gapi.load('client:auth2', ()=>{

            window.gapi.client.init({
                 clientId:'211181192998-5undu5aps9d6bcjpj1laocpcfggchd5d.apps.googleusercontent.com',
                 scope:'email' 
            })
            .then(()=>{
                    this.auth=window.gapi.auth2.getAuthInstance();
                    this.onAuthChange(this.auth.isSignedIn.get())
                    this.auth.isSignedIn.listen(this.onAuthChange)

            })
          
        })
    }

    onAuthChange=(isSignedIn)=>{
        isSignedIn? this.props.signIn(this.auth.currentUser.get().getId()): this.props.signOut()
    }

    onSignIn=()=>{
        this.auth.signIn()
    }

    onSignOut=()=>{
        this.auth.signOut()
    }

    renderOnAuthChange=()=>{
        let isSignedIn=this.props.isSignedIn
        if(isSignedIn==null){
            return null
        }else if(isSignedIn){
            return (
                <div>
                    <button onClick={this.onSignOut} className="ui red google button">
                        <i className="google icon" />
                        Sign Out
                    </button>
                </div>
            )
        }else{
           return  <div>
                    <button onClick={this.onSignIn} className="ui green google button">
                        <i className="google icon" />
                        Sign In
                    </button>
                </div>
        }
    }
    render(){
            return (
                <div>
                    {this.renderOnAuthChange()}
                </div>

            )

    }
}

const mapStateToProps=(state)=>{
    // console.log(state)
     return {
         isSignedIn: state.auth.isSignedIn
     }
}

const mapDispatchToState=dispatch=>{
    return {
         signIn: (userId)=>dispatch(actions.signIn(userId)),
         signOut: ()=>dispatch(actions.signOut())
    }
   
}

export default connect(mapStateToProps, mapDispatchToState)(GoogleAuth);