import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import genders from '../../options/genres.json';
import styles from './Select.module.css';

export default class SearchForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    resetState: PropTypes.func.isRequired,
    setValue: PropTypes.func.isRequired,
  };

  state = {
    value: '',
    selectedOption: '',
  };

  handleChangeInput = e => this.setState({ value: e.target.value });

  handleChangeSelect = selectedOption => this.setState({ selectedOption });

  handleSubmit = e => {
    e.preventDefault();
    const { resetState, onSubmit, setValue } = this.props;
    const { value } = this.state;
    const genres = this.state.selectedOption.value || '';
    resetState();
    setValue(value, genres);
    onSubmit(value, genres);
    this.reset();
  };

  reset = () => this.setState({ value: '', selectedOption: '' });

  render() {
    const { value, selectedOption } = this.state;
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <input
          className={styles.input}
          onChange={this.handleChangeInput}
          value={value}
        />
        <Select
          className={styles.select}
          value={selectedOption}
          onChange={this.handleChangeSelect}
          options={genders}
        />
        <button className={styles.button} type="submit">
          Search
        </button>
      </form>
    );
  }
}
