import React, { Component } from 'react';
import { Text, ScrollView, View } from 'react-native';
import { Card } from 'react-native-elements';
import { PROJECTS } from '../shared/projects';
import { CERTIFICATES } from '../shared/certificates';
import { BIOGRAPHY } from '../shared/biography';

function RenderItem(props) { 
    const item = props.item;
    if (item != null) {
        return(
            <Card
                featuredTitle={item.name}
                featuredSubtitle={item.designation}
                image={require('./images/work2.jpg')}>
                <Text
                    style={{margin: 10}}>
                    {item.description}</Text>
            </Card>
        );
    }
    else {
        return(<View></View>);
    }
}

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            projects: PROJECTS,
            certificates: CERTIFICATES,
            biography: BIOGRAPHY
        };
    }

    static navigationOptions = {
        title: 'Home',
    };

    render() {
        return(
            <ScrollView>
                <RenderItem item={this.state.projects.filter((project) => project.featured)[0]} />
                <RenderItem item={this.state.certificates.filter((certificate) => certificate.featured)[0]} />
                <RenderItem item={this.state.biography.filter((bio) => bio.featured)[0]} />
            </ScrollView>
        );
    }
}

export default Home;