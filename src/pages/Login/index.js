import React, {Component} from 'react';
import {ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Creators as LoginActions} from '../../store/ducks/login';
import {Container, Input, Button, ButtonText, Error} from './styles';

class Login extends Component {
  state = {email: '', password: ''};

  handleSubmit = async () => {
    const {email, password} = this.state;
    const {loginRequest} = this.props;

    loginRequest(email, password);
  };

  render() {
    const {email, password} = this.state;
    const {error, loading, loginRequest} = this.props;
    console.log(loginRequest())

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

const mapStateToProps = state => ({
  error: state.login.error,
  loading: state.login.loading,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(LoginActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
