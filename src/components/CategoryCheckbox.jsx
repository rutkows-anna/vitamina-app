
import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { makeStyles } from '@material-ui/core';
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const useStyles = makeStyles((theme) => ({
  cat: {
      width: '100%',
       maxWidth: '490px',
    
    '& label.Mui-focused': {
      color: '#0098C9',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#0098C9',
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: '#0098C9',
      },}
  },

}));


export default function CategoryCheckbox(props) {
  const classes = useStyles(); 
  return (

	  
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={props.categories}
      disableCloseOnSelect
	  onChange={props.categoryHandle}
      getOptionLabel={(option) => option.title}
      renderOption={(option, { selected }) => (
        <React.Fragment>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
            color="default"
            className={classes.checked}
          />
          {option.title}
        </React.Fragment>
      )}
      style={{ width: 500 }}
      renderInput={(params) => (
        <TextField {...params} className={classes.cat} variant="outlined" label="Kategorie" placeholder="Wybierz..." />
      )}
    />
  );
}
