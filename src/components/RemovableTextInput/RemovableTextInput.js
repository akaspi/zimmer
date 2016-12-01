import React from 'react';
import template from './RemovableTextInput.rt';

class RemovableTextInput extends React.Component {
  render = template

  onKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.onSubmit();
    }
  }

  onChange = (e) => {
    this.props.onChange && this.props.onChange(e.target.value);
  }

  onDelete = () => {
    this.props.onDelete(this.props.id);
  }

  onSubmit = () => {
    this.props.onSubmit(this.refs.input.value, this.props.id);
    if (this.props.clearOnSubmit) {
      // todo - use state
      this.refs.input.value = '';
      this.props.onChange('');
    }
  }
}

export default RemovableTextInput;
