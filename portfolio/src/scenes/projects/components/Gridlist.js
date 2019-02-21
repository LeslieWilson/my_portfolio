import React from 'react';
import ReactSVG from "react-svg";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import gridlistData from '../../../data/gridlistData';
import { Link } from 'react-router-dom';



const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,

  },
  gridList: {
    width: 5000,
    height: 1000,

  },
  subheader: {
    width: '100%',
  },
});

function ImageGridList(props) {
  const { classes } = props;

  return (

    <div className={classes.root}>
      <GridList cellHeight={450} className={classes.gridList} cols={3}>
        {gridlistData.map(tile => (
          <GridListTile key={tile.img} cols={tile.cols || 3}>
            <Link to={tile.link}><img src={tile.img} alt={tile.title} /></Link>
          </GridListTile>
        ))}
      </GridList>
    </div>

  );
}

ImageGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageGridList);
