import React from 'react';
import { ListItem, Left, Thumbnail, Body, Text, Right } from 'native-base';

class RnDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ListItem avatar onPress={() => this.onClick()}>
                <Left>
                    <Thumbnail source={require('../icons/cancel.png')} />
                </Left>
                <Body>
                     <Text>the random is: {this.props.detail}</Text>
                     <Text note>detail: {this.props.detail}</Text>
                </Body>
                <Right>
                    <Text note>3:43 pm</Text>
                </Right>
            </ListItem>
        )
    }

    onClick() {
        this.props.onClick();
    }
}

export default RnDetail;
