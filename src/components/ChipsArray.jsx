import React from "react";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import TagFacesIcon from "@material-ui/icons/TagFaces";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: "theme.spacing(0.5)",
    margin: 0,
    backgroundColor: "rgba(0,0,0,0) !important",
  },

  floatLeft: {
    justifyContent: "left",
    paddingInlineStart: "0",
  },
  gridList: {
    width: 500,
    height: 450,
  },
  tileStyling: {
    width: 100,
    height: 450,
  },
  boxShadow: {
    boxShadow: "3px 3px 5px #aaaaaa",
    margin: "5px",
    padding: "0 !important",
  },

  chip: {
    margin: "theme.spacing(0.5)",
  },
};

class ChipsArray extends React.Component {
  constructor(props) {
    super(props);
  }

  handleDelete = (chipToDelete) => () => {
    this.props.onDeleteChips(chipToDelete);
  };

  handleClick = (chipToClick) => {
    this.props.onClickChips(chipToClick);
  };

  render() {
    if (this.props.chips) {
      const { classes } = this.props;
      return (
        <Paper
          elevation={0}
          component="ul"
          className={[classes.root, classes.floatLeft]}
        >
          {this.props.chips.map((data) => {
            let icon;

            if (data.label === "React") {
              icon = <TagFacesIcon />;
            }

            return (
              <li key={data.key}>
                <Chip
                  label={data.label}
                  onClick={() => this.handleClick(data)}
                  icon={data.selected === true ? icon : undefined}
                  color={data.selected === true ? "primary" : undefined}
                  onDelete={
                    !data.selected === true
                      ? undefined
                      : this.handleDelete(data)
                  }
                  className={classes.chip}
                />
              </li>
            );
          })}
        </Paper>
      );
    } else {
      return <div>xD</div>;
    }
  }
}

export default withStyles(styles)(ChipsArray);
