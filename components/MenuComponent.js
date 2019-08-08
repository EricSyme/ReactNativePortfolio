import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { Tile } from 'react-native-elements';
import { PROJECTS } from '../shared/projects';


class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            projects: PROJECTS
        };
    }

    static navigationOptions = {
        title: 'Menu'
    };
    
    render() {
        const renderMenuItem = ({item, index}) => {

            return (
                <Tile
                key={index}
                title={item.name}
                subtitle={item.description}
                onPress={() => navigate('ProjectDetail', { projectId: item.id })}
                leftAvatar={{ source: require('./images/cellophane.jpg')}} 
              />
            );
        };

        const { navigate } = this.props.navigation;

        return (
            <FlatList 
                data={this.state.projects}
                renderItem={renderMenuItem}
                keyExtractor={item => item.id.toString()}
                />
        );
    }
}

export default Menu;