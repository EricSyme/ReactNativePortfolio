import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { renderComponent } from 'recompose';


function RenderItem() {
    return(
        <Card title="Contact Information">
            <Text style={{margin: 10, textAlign: 'left'}}>{`
Downtown Seattle and Tacoma,

Immediate Location: Bremerton,Silverdale,

Kitsap County, WA, USA

Tel: (206)790-9142

Email: eric.onetenbalm@gmail.com
                `}
            </Text>
        </Card>
    );
}

class Contact extends Component {
    constructor(props){
        super(props);
    }

    static navigationOptions = {
        title: 'Contact',
    };

    render() {
        return(
            <ScrollView>
                <RenderItem />
            </ScrollView>
        );
    }
}


export default Contact;