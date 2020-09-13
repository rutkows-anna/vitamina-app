import React from 'react';
import SearchForm from './SearchForm';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ChipsArray from './ChipsArray';
import CategoryCheckbox from  './CategoryCheckbox';
import Slider from '@material-ui/core/Slider';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
some: {
		margin: '10px',
		width: 480,
		color: '#0098C9',
	}
})

class SearchFilters extends React.Component {

	constructor(props) {
		super(props);
  /*
  const [chipData, setChipData] = React.useState();
  */
		this.state = {
			
			tabs: ["wszystkie", "do wykonania", "w trakcie", "wykonane"],
			applyFilters: this.props.applyFilters,
			currentTab: 0,
			multiValue: [],
			chips:[
				{ key: 0, label: 'Wszystkie', selected:true },
				{ key: 1, label: 'W trakcie', selected:true },
				{ key: 2, label: 'Do wykonania', selected:true },
				{ key: 3, label: 'Wykonane', selected:true }
			]
		};

		this.useFilters = this.useFilters.bind(this);

		this.handleOnDeleteChips = this.handleOnDeleteChips.bind(this);
		this.handleOnClickChips = this.handleOnClickChips.bind(this);
		this.handleMultiChange = this.handleMultiChange.bind(this);
	}

  handleMultiChange(option) {
    this.setState(state => {
      return {
        multiValue: option
      };
    });
  }


    handleOnChangePeriod = (e, val) => {
		this.setState({
			filterPeriodRange: val
		});

		//this.props.periodChange(event.target.value);

		this.props.multiFilterChange("filter_period", e, val);
	}

    useFilters = () => {
        this.props.applyFilters(this.state.filterName, this.state.filterCat, this.state.filterPeriodRange);
    }

    handleOnFilterChange = (name, value) => {

        this.setState({
          filterName: name
        });

		this.props.multiFilterChange("filter_text", name);
    }



	handleOnCategorySelect = (e, val) => {
		this.props.multiFilterChange("category", e,val);
	}

	handleOnDeleteChips = (chip) => {
	
		// 1. Make a shallow copy of the items
		let newChips = [...this.state.chips];
		// 2. Make a shallow copy of the item you want to mutate
		let item = {...newChips[chip.key]};
		// 3. Replace the property you're intested in
		item.selected = false;
		// 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
		newChips[item.key] = item;
		// 5. Set the state to our new copy

		this.setState({
			chips: newChips
		});


		this.props.multiFilterChange("filter_groups", newChips);
	}


	handleOnClickChips = (chip) => {
	
		if(!chip.selected){

			// 1. Make a shallow copy of the items
			let newChips = [...this.state.chips];
			// 2. Make a shallow copy of the item you want to mutate
			let item = {...newChips[chip.key]};
			// 3. Replace the property you're intested in
			item.selected = true;
			// 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
			newChips[item.key] = item;
			// 5. Set the state to our new copy

			this.setState({
				chips: newChips
			});	

			this.props.multiFilterChange("filter_groups", newChips);
		}

	}

    render() {
			const { classes } = this.props;

const floatLeft = {
	justifyContent: 'left'
};


        return (
          <Grid item xs={8}>
			<br/><br/>

		<div>
			


{/* <ChipsArray chips={this.state.chips} onDeleteChips={this.handleOnDeleteChips} onClickChips={this.handleOnClickChips} />
<br/><br/>*/}
		</div> 

		<div>
			<label>Długość wyzwania (dni)</label>

			<Slider
				value={this.props.filter.period}
				onChange={this.handleOnChangePeriod}
				min={1}
				step={1}
				max={30}
				valueLabelDisplay="auto"
				aria-labelledby="range-slider"
				className={classes.some}

				/>

			<br/><br/>
		</div>

		<div> 

			{(this.props.categories ? <CategoryCheckbox categoryHandle={this.handleOnCategorySelect} categories={this.props.categories} /> : <p>xD</p>)}
			
		</div>

          </Grid>
        )


    }

}


export default withStyles(styles)(SearchFilters);
