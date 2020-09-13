import React from "react";
import { connect } from "react-redux";
import { fetchChallenges } from "../state/challenges";
import SearchForm from "./SearchForm";


class SearchBar extends React.Component {
  componentDidMount() {
    this.props.fetchChallenges();
  }

  render() {
    return (
      <div
        className="container"
        style={{ display: "flex", flexWrap: "wrap", flexDirection: "column" }}
      >
        <div className="search elements" style={{ marginBottom: 20 }}>
          <div style={{ display: "flex" }}>
            <SearchForm
              onFilterChange={this.props.onFilterChange}
              style={{ width: "100%" }}
              filter={this.props.filter}
            />
            {/* {this.state.filtersOpen 
												? <button onClick={this.operateFilters}>Schowaj filtry</button> 
												: <button onClick={this.operateFilters}>Pokaż filtry</button>
											} */}
          </div>
          {/* {this.state.filtersOpen &&
										<SearchFilters filter={this.props.filter} multiFilterChange={this.handleMultiFilterChange} categories={this.props.categories} applyFilters={this.applyFilters} /> 
									} */}
        </div>

        {/* <SearchResults categories={this.props.categories} articles={this.props.articles} filter={this.props.filter} onRefresh={this.onRefresh}/> */}
      </div>
    );
  }
}

const mapStateProps = (state) => ({
  challenges: state.challenges.data,
});

const mapDispatchProps = {
  fetchChallenges,
};

export default connect(mapStateProps, mapDispatchProps)(SearchBar);
