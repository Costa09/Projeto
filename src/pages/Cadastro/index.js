import React, {Component} from 'react';
import {ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Container, Input, Button, ButtonText, Error} from './styles';

class Cadastro extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    cpf: '',
    company_name: '',
    telephone: '',
  };

  handleSubmit = async () => {
    const {name, email, password, cpf, company_name, telephone} = this.state;
    const {signRequest} = this.props;

    signRequest(name, email, password, cpf, company_name, telephone);
  };

  render() {
    const {name, email, password, cpf, company_name, telephone} = this.state;
    const {error, loading} = this.props;

    return (
      <Container>
        {error && <Error>Usuario ja cadastrado</Error>}
        <Input
          value={name}
          onChangeText={text => this.setState({name: text})}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Nome"
        />

        <Input
          value={email}
          onChangeText={text => this.setState({email: text})}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="E-mail"
        />

        <Input
          value={password}
          onChangeText={text => this.setState({password: text})}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Senha"
        />
        
        <Input
          value={cpf}
          onChangeText={text => this.setState({cpf: text})}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="CPF"
        />

        <Input
          value={company_name}
          onChangeText={text => this.setState({company_name: text})}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Empresa que representa"
        />

        <Input
          value={telephone}
          onChangeText={text => this.setState({telephone: text})}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Numero de telefone"
        />

        <Button onPress={this.handleSubmit}>
          {loading ? (
            <ActivityIndicator size="small" color="#FFF" />
          ) : (
            <ButtonText>Efetuar Cadastro</ButtonText>
          )}
        </Button>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  error: state.sign.error,
  loading: state.sign.loading,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(signActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cadastro);
