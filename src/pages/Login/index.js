import React, {Component} from 'react';
import {ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Creators as LoginActions} from '../../store/ducks/login';
import {Container, Input, Button, ButtonText, Error} from './styles';

class Login extends Component {
  state = {email: '', password: ''};

  // handleChange = event => {
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   })
  // }

  handleSubmit = async () => {
    // event.preventDefault()
    // userLoginFetch(this.state)
    const {email, password} = this.state;
    const {loginRequest} = this.props;

    loginRequest(email, password);
    console.log(loginRequest);
  };

  render() {
    const {email, password} = this.state;
    const {error, loading, loginRequest} = this.props;


    return (
      <Container>
        {error && <Error>Usuario inexistente</Error>}

        <Input
          value={email}
          onChangeText={text => this.setState({email: text})}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Digite seu email"
        />
        <Input
          value={password}
          onChangeText={text => this.setState({password: text})}
          autoCapitalize="none"
          autoCorret={false}
          placeholder="Digite sua senha"
        />
        <Button onPress={this.handleSubmit}>
          {loading ? (
            <ActivityIndicator size="small" color="#FFF" />
          ) : (
            <ButtonText>Entrar</ButtonText>
          )}
        </Button>

        <Button>
          <ButtonText>Cadastrar</ButtonText>
        </Button>
      </Container>
    );
  }
}

// const userLoginFetch = user =>{
//   return dispatch => {
//     return fetch("https://localhost:3333/user", {
//       method: "POST",
//       headers:{
//         'Content-Type': 'application/json',
//         Accept: 'application/json'
//       },
//       body: JSON.stringify({user})
//     })
//     .then(resp => resp.json())
//     .then(data => {
//       if (data.message) {
//         {error && <Error>Usuario inexistente</Error>}
//       } else{
//         localStorage.setItem("token", data.jwt)
//         dispatch(loginRequest(data.user))
//       }
//     })
//   }
// }

const mapStateToProps = state => ({
  error: state.login.error,
  loading: state.login.loading,
});

const mapDispatchToProps = LoginActions;

export default connect(mapStateToProps, mapDispatchToProps)(Login);
