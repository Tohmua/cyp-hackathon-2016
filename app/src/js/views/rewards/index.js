import React from 'react';
import Container from 'react-container'
import GridList from 'material-ui/lib/grid-list/grid-list';
import GridTile from 'material-ui/lib/grid-list/grid-tile';
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
        img: '../../../img/icons/calendar.png',
        title: '5 day streak',
    },
    {
        img: '../../../img/icons/cogwheel.png',
        title: '10 day streak',
    },
    {
        img: '../../../img/icons/medal.png',
        title: '15 day streak',
    },
    {
        img: '../../../img/icons/megaphone.png',
        title: '20 day streak',
    },
    {
        img: '../../../img/icons/multimedia.png',
        title: 'Completed a ...',
    },
    {
        img: '../../../img/icons/orientation.png',
        title: 'temp',
    },
    {
        img: '../../../img/icons/people.png',
        title: 'temp',
    },
    {
        img: '../../../img/icons/people-1.png',
        title: 'temp',
    },
    {
        img: '../../../img/icons/ring.png',
        title: 'temp',
    },
    {
        img: '../../../img/icons/signature.png',
        title: 'temp',
    },
];

const Rewards = React.createClass({
    statics: navigation('Rewards'),
    render () {
        return <Container fill justify="start" scrollable className="light-background">
                    <GridList cols={4}
                              rows={12}
                              cellHeight={100}
                              style={styles.gridList}
                    >
                        {tilesData.map(tile => (
                            <GridTile
                                key={tile.img}
                                style={styles.tile}
                            >
                                <img src={tile.img} onClick={function () {
                                alert(tile.title)
                            }}/>
                            </GridTile>
                        ))}
                    </GridList>
                </Container>
    }
});

export default Rewards;