import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { Container } from './../../theme';
import { connect } from 'react-redux';

class AuthLoading extends Component {

    /* Temporary screen for while waiting for async storage. 
    This screen will likely be covered by the splash screen. */
    
    static navigationOptions = {
        header: null
    };
    
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount = async () => {
        
        const user = await AsyncStorage.getItem('loggedUser');
        
        if (user) {
            this.props.dispatchAuthUser(user)
        }
    }

    render() {
        
        return (
            
            <Container />
        );
        
    }
    
}
            
const mapDispatchToProps = (dispatch) => {

    return {
        dispatchAuthUser: (user) => dispatch({
            type: 'LOGIN_USER',
            user
        })
    }
}

export default connect(
    null, 
    mapDispatchToProps
)(AuthLoading);
        