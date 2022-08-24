import React, { Component } from 'react';
import { professionalInfo } from '../redux/actions';

import Input from '../components/Input';
import TextArea from '../components/TextArea';
import Button from '../components/Button';

class ProfessionalForm extends Component {
  constructor() {
    super();
    this.state = {
      curriculum: '',
      job: '',
      description: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleSubmit = () => {
    professionalInfo(this.state);
    const { history } = this.props;
    history.push('/formdisplay');
  }

  render() {
    const { curriculum, job, description } = this.state;
    return (
      <fieldset>
        <TextArea
          label="Resumo do currículo: "
          value={ curriculum }
          name="curriculum"
          maxLength="1000"
          onChange={ this.handleChange }
          required
        />
        <Input
          label="Cargo:"
          name="job"
          type="text"
          value={ job }
          onChange={ this.handleChange }
          required
        />
        <TextArea
          label="Descrição do cargo: "
          name="description"
          maxLength="500"
          onChange={ this.handleChange }
          value={ description }
          required
        />
        <Button
          label="enviar"
          onClick={ this.handleSubmit }
        />
      </fieldset>
    );
  }
}

export default ProfessionalForm;
