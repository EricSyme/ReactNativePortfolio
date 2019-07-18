import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { PROJECTS } from '../shared/projects';


function RenderProject(props) {
    const project = props.project;
    
    if (project != null) {
        return(
            <Card
                featuredTitle={project.name}
                image={require('./images/cellophane.jpg')}>
                <Text style={{margin: 10}}>
                    {project.description}
                </Text>
                <Icon
                    raised
                    reverse
                    name={ props.favorite ? 'heart' : 'heart-o'}
                    type='font-awesome'
                    color='#f50'
                    onPress={() => props.favorite ? console.log('Already favorite') : props.onPress()}
                    />
            </Card>
        );
    }
    else {
        return(<View></View>);
    }
}

class ProjectDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: PROJECTS,
            comments: COMMENTS,
            favorites: []
        };
    }

    static navigationOptions = {
        title: 'Project Details'
    };

    markFavorite(projectId) {
        this.setState({favorites: this.state.favorites.concat(projectId)});
    }

    render() {
        const projectId = this.props.navigation.getParam('projectId','');
        return(
            <RenderProject project={this.state.projects[+projectId]}
                favorite={this.state.favorites.some(el => el === projectId)}
                onPress={() => this.markFavorite(projectId)} />
        );
    }
}

export default ProjectDetail;