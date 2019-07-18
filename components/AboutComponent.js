import React, { Component } from 'react';
import { Text, ScrollView, FlatList  } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { BIOGRAPHY } from '../shared/biography';


function History(){
    return(
        <Card title='My Tech History'>
            <Text style={{margin: 10}}>{`
(UNDER CONSTRUCTION) Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            `}
            </Text>
        </Card>
    );
}


class About extends Component {
    constructor(props){
        super(props);
        this.state={
            biography: BIOGRAPHY
        };
    }
    static navigationOptions = {
        title: 'About Me'
    };

    render(){
        const renderBio = ({item, index}) => {

            return (
                <ListItem
                key={index}
                title={item.name}
                subtitle={item.description}
                leftAvatar={{ source: require('./images/alberto.png')}}
              />
            );
        };

        return(
            <ScrollView>
                <History />
                <Card title='Biography'>
                <FlatList 
                data={this.state.biography}
                renderItem={renderBio}
                keyExtractor={item => item.id.toString()}
                />
                </Card>
            </ScrollView>
        );
    }
}

export default About;