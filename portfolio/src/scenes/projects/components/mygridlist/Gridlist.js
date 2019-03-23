import React from 'react';
import ReactSVG from "react-svg";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import gridlistData from '../../../../data/gridlistData';
import gridlist2Data from '../../../../data/gridlist2Data';
import gridlist3Data from '../../../../data/gridlist3Data';
import gridlist4Data from '../../../../data/gridlist5Data';
import { Link } from 'react-router-dom';
import texturesky from './images/gridlistbackground/texturesky.png';



const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    backgroundImage:`url(${texturesky})`,
backgroundSize:'75%',


  },



  gridList: {
    width: 5000,
    height: 555,


  },

  subheader: {
    width: '100%',
  },

  gridListKid:{
    width: 5000,
    height: 555,
    marginTop: '-189px !important',
},

gridListKid2:{
  width: 5000,
  height: 555,
  marginTop: '-110px !important',
}





});

function ImageGridList(props) {
  const { classes } = props;

  return (


    <div className={classes.root}>


      <GridList cellHeight={450} className={classes.gridList} cols={3} >
        {gridlistData.map(tile => (
          <GridListTile className='omg' key={tile.img} cols={tile.cols || 3}>
            <Link to={tile.link}><img src={tile.img} alt={tile.title} className="gridimgs" /></Link>
          </GridListTile>
        ))}
      </GridList>

      <GridList cellHeight={450} className={classes.gridListKid} cols={3}>
        {gridlist2Data.map(tile => (
          <GridListTile className='omg' key={tile.img} cols={tile.cols || 3}>
            <Link to={tile.link}><img src={tile.img} alt={tile.title} className="gridimgs"/></Link>
          </GridListTile>
        ))}
      </GridList>
<h1 className="gridTitle" id="UrbanDesign">Urban Design</h1>

      <GridList cellHeight={450} className={classes.gridListKid2} cols={3}>
        {gridlist3Data.map(tile => (
          <GridListTile className='omg' key={tile.img} cols={tile.cols || 3}>
            <Link to={tile.link}><img src={tile.img} alt={tile.title} className="gridimgs"/></Link>
          </GridListTile>
        ))}
      </GridList>

      <h1 className="gridTitle" id = "Architecture">Architecture</h1>

      <GridList cellHeight={450} className={classes.gridListKid2} cols={3}>
        {gridlist4Data.map(tile => (
          <GridListTile className='omg'key={tile.img} cols={tile.cols || 3}>
            <Link to={tile.link}><img src={tile.img} alt={tile.title} className="gridimgs"/></Link>
          </GridListTile>
        ))}
      </GridList>
      <h1 className="gridTitle" id="UXDesign">UX Design</h1>
    </div>

  );
}

ImageGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageGridList);
