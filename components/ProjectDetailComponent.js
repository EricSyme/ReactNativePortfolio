import React, { Component } from 'react';
import { Text, View, ScrollView, FlatList } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { PROJECTS } from '../shared/projects';
import { COMMENTS } from '../shared/comments';
import { postFavorite } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
      projects: state.projects,
      comments: state.comments,
      favorites: state.favorites
    }
  }

const mapDispatchToProps = dispatch => ({
    postFavorite: (projectId) => dispatch(postFavorite(projectId))
})



function RenderComments(props) {
    const comments = props.comments;
            
    const renderCommentItem = ({item, index}) => {
        return (
            <View key={index} style={{margin: 10}}>
                <Text style={{fontSize: 14}}>{item.comment}</Text>
                <Text style={{fontSize: 12}}>{item.rating} Stars</Text>
                <Text style={{fontSize: 12}}>{'-- ' + item.author + ', ' + item.date} </Text>
            </View>
        );
    };
    
    return (
        <Card title='Comments' >
        <FlatList 
            data={comments}
            renderItem={renderCommentItem}
            keyExtractor={item => item.id.toString()}
            />
        </Card>
    );
}


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
        //this.setState({favorites: this.state.favorites.concat(projectId)});
        this.props.postFavorite(projectId);
    }

    render() {
        const projectId = this.props.navigation.getParam('projectId','');
        return(
            <ScrollView>
                <RenderProject project={this.state.projects[+projectId]} favorite={this.props.favorites.some(el => el ===  projectId)} onPress={() => this.markFavorite(projectId)} />
                <RenderComments comments={this.state.comments.filter((comment) => comment.projectId === projectId)} />
            </ScrollView>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetail);