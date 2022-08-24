import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class FormDataDisplay extends Component {
  render() {
    const { personalForm, professionalForm } = this.props;
    return (
      <div>
        <h2>Dados enviados</h2>
        <div>
          Nome:
          { personalForm.name }
        </div>
        <div>
          Email:
          { personalForm.email }
        </div>
        <div>
          CPF:
          { personalForm.cpf }
        </div>
        <div>
          Endereço:
          { personalForm.address }
        </div>
        <div>
          Cidade:
          { personalForm.city }
        </div>
        <div>
          Estado:
          { personalForm.uf }
        </div>
        <div>
          Currículo:
          { professionalForm.curriculum }
        </div>
        <div>
          Cargo:
          { professionalForm.job }
        </div>
        <div>
          Descrição do cargo:
          { professionalForm.description }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  personalForm: state.personalReducer,
  professionalForm: state.professionalReducer,
});

FormDataDisplay.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
  curriculum: PropTypes.string.isRequired,
  uf: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(FormDataDisplay);
