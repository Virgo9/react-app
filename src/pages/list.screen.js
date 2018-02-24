import React from 'react';
import { Content } from 'native-base';
import RnList from '../components/List.js';

export default class ListScreen extends React.Component {
    render () {
        return (
            <Content>
                <RnList />
            </Content>
        )
    }
}
