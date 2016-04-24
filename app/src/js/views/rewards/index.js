import React      from 'react';
import Container  from 'react-container'
import GridList   from 'material-ui/lib/grid-list/grid-list';
import GridTile   from 'material-ui/lib/grid-list/grid-tile';
import StarBorder from 'material-ui/lib/svg-icons/toggle/star-border';
import IconButton from 'material-ui/lib/icon-button';
import navigation from '../../lib/navigation'

const styles = {
    gridList: {
        overflowY: 'auto',
    },
    tile: {
        padding: '20px'
    }
};

const tilesData = [
    {
        img: '../../../img/rosette/rosette-01.png',
        title: '5 day streak',
    },
    {
        img: '../../../img/rosette/rosette-02.png',
        title: '10 day streak',
    },
    {
        img: '../../../img/rosette/rosette-03.png',
        title: '15 day streak',
    },
    {
        img: '../../../img/rosette/rosette-04.png',
        title: '20 day streak',
    },
    {
        img: '../../../img/rosette/rosette-05.png',
        title: 'Completed a ...',
    },
    {
        img: '../../../img/rosette/rosette-06.png',
        title: 'temp',
    },
    {
        img: '../../../img/rosette/rosette-01.png',
        title: '5 day streak',
    },
    {
        img: '../../../img/rosette/rosette-02.png',
        title: '10 day streak',
    },
    {
        img: '../../../img/rosette/rosette-03.png',
        title: '15 day streak',
    },
    {
        img: '../../../img/rosette/rosette-04.png',
        title: '20 day streak',
    },
    {
        img: '../../../img/rosette/rosette-05.png',
        title: 'Completed a ...',
    },
    {
        img: '../../../img/rosette/rosette-06.png',
        title: 'temp',
    },
    {
        img: '../../../img/rosette/rosette-01.png',
        title: '5 day streak',
    },
    {
        img: '../../../img/rosette/rosette-02.png',
        title: '10 day streak',
    },
    {
        img: '../../../img/rosette/rosette-03.png',
        title: '15 day streak',
    },
    {
        img: '../../../img/rosette/rosette-04.png',
        title: '20 day streak',
    },
    {
        img: '../../../img/rosette/rosette-05.png',
        title: 'Completed a ...',
    },
    {
        img: '../../../img/rosette/rosette-06.png',
        title: 'temp',
    },

    {
        img: '../../../img/rosette/rosette-01.png',
        title: '5 day streak',
    },
    {
        img: '../../../img/rosette/rosette-02.png',
        title: '10 day streak',
    },
    {
        img: '../../../img/rosette/rosette-03.png',
        title: '15 day streak',
    },
    {
        img: '../../../img/rosette/rosette-04.png',
        title: '20 day streak',
    },
    {
        img: '../../../img/rosette/rosette-05.png',
        title: 'Completed a ...',
    },
    {
        img: '../../../img/rosette/rosette-06.png',
        title: 'temp',
    },
];

const Rewards = React.createClass({
    statics: navigation('Rewards'),
    handleClick (text) {alert(text)},
    render () {
      return (
        <Container fill justify="start" scrollable className="light-background">
          <GridList cols={4} rows={12} cellHeight={100} style={styles.gridList}>
            { tilesData.map((tile, i) => (
                <GridTile
                    onTouchTap={ () => this.handleClick(tile.title) }
                    onClick={ () => this.handleClick(tile.title) }
                    key={ i }
                    style={ styles.tile }>
                    <img src={ tile.img } />
                </GridTile>
              ))
            }
          </GridList>
        </Container>
      )
    }
});

export default Rewards;
