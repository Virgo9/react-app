import React from 'react';
import { List, Toast, ListItem, Left, Body, Right, Text, Thumbnail } from 'native-base';
import RnDetail from './Detail.js';

var details = [];
for(var a = 0; a < 100; a++) {
    details.push(Math.floor(Math.random() * 100));
}

class RnList extends React.Component {
    constructor(props) {
        super(props);
    }

    renderExpenseItem(item , i) {
        return <RnDetail key={i} detail={item} onClick={() => this.onClick(item)} />;
    }

    onClick(item) {
        Toast.show('' + item, Toast.SHORT);
    }

    render() {
        return (
            <List>
                { details.map((item, i) => this.renderExpenseItem(item, i)) }
            </List>
        )
    }
}

export default RnList;
