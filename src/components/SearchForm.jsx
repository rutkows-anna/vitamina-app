import React from 'react';
import Form from 'react-bootstrap/Form'
import { Container, Button, Link, TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
	input: {
        width: '100%',
        maxWidth: '300px',
        minWidth: '150px',
        margin: '1%',
          '& .MuiInput-underline:after': {
            borderBottomColor: '#272727',
          },
          '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
              borderColor: '#272727',
            },
        }
    },
})


class SearchForm extends React.Component {

    state={
        filter: '',
    }

    handleOnChange = (event) => {
        this.setState({
            filter: event.target.value,
        });
        this.props.onFilterChange(event.target.value);
    }

    render() {
        const { classes } = this.props;
        return (
            <Form.Group>
                <Form.Control type="text"
                placeholder=" Wyszukaj po nazwie"
                value={this.state.filter}
                onChange={this.handleOnChange}
                style={{width: '300px', height: '40px', padding: '50x', border: '1px solid, #000', borderRadius: '8px'}}
                />
            </Form.Group> 
        )
    }
}

export default withStyles(styles)(SearchForm);