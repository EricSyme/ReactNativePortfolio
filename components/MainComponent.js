import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import ProjectDetail from './ProjectDetailComponent';
import { View, Platform, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { createStackNavigator, createDrawerNavigator, DrawerItems, SafeAreaView } from 'react-navigation';
import { Icon } from 'react-native-elements';

const MenuNavigator = createStackNavigator({
        Menu: { screen: Menu,
        navigationOptions: ({ navigation }) => ({
          headerLeft: <Icon name="menu" size={24}
          color='white'
          onPress= { () => navigation.toggleDrawer() } />
        }) },
        ProjectDetail: { screen: ProjectDetail }
    }, {
        initialRouteName: 'Menu',
        navigationOptions: {
            headerStyle: {
                backgroundColor: "#F82105"
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: "#fff"            
            }
        }
    }
);

const AboutNavigator = createStackNavigator({
  About: { screen: About, }
}, {
  initialRouteName: 'About',
  navigationOptions: ({ navigation }) => ({
      headerStyle: {
          backgroundColor: "#F82105"
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
          color: "#fff"            
      },
      headerLeft: <Icon name="menu" size={24}
        color='white'
        onPress={ () => navigation.toggleDrawer() } />
  })
}
);

const ContactNavigator = createStackNavigator({
  Contact: { screen: Contact }
}, {
  initialRouteName: 'Contact',
  navigationOptions: ({ navigation }) => ({
    headerStyle: {
        backgroundColor: "#F82105"
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        color: "#fff"            
    },
    headerLeft: <Icon name="menu" size={24}
      color='white'
      onPress={ () => navigation.toggleDrawer() } />
    })
}
);

const HomeNavigator = createStackNavigator({
    Home: { screen: Home }
  }, {
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
          backgroundColor: "#F82105"
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
          color: "#fff"            
      },
      headerLeft: <Icon name="menu" size={24}
        color='white'
        onPress={ () => navigation.toggleDrawer() } />
  })
});

const CustomDrawerContentComponent = (props) => (
  <ScrollView>
    <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
      <View style={styles.drawerHeader}>
        <View style={{flex:1}}>
        <Image source={require('./images/ESlogo.png')} style={styles.drawerImage} />
        </View>
        <View style={{flex: 2}}>
          <Text style={styles.drawerHeaderText}>Eric Syme, Aspiring Web Developer</Text>
        </View>
      </View>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

const MainNavigator = createDrawerNavigator({
    Home: {
      screen: HomeNavigator,
      navigationOptions: {
        title: 'Home',
        drawerLabel: 'Home',
          drawerIcon: ({ tintColor, focused }) => (
            <Icon
              name='home'
              type='font-awesome'            
              size={24}
              color={tintColor}
            />
          )
      }
    },
    About: {
      screen: AboutNavigator,
      navigationOptions: {
        title: 'About Me',
        drawerLabel: 'About Me',
          drawerIcon: ({ tintColor, focused }) => (
            <Icon
              name='info-circle'
              type='font-awesome'            
              size={24}
              color={tintColor}
            />
          )
      }
    },
    Menu: {
      screen: MenuNavigator,
      navigationOptions: {
        title: 'Menu',
        drawerLabel: 'Menu',
          drawerIcon: ({ tintColor, focused }) => (
            <Icon
              name='list'
              type='font-awesome'            
              size={24}
              color={tintColor}
            />
          )
      }
    },
    Contact: {
      screen: ContactNavigator,
      navigationOptions: {
        title: 'Contact Me',
            drawerLabel: 'Contact Me',
            drawerIcon: ({ tintColor, focused }) => (
              <Icon
                name='address-card'
                type='font-awesome'            
                size={22}
                color={tintColor}
              />
            )
      }
    }
  }, {    drawerBackgroundColor: '#FFC180',
  contentComponent: CustomDrawerContentComponent
});

class Main extends Component {
  render() {
    return(
      <View style={{flex:1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
        <MainNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerHeader: {
    backgroundColor: '#512DA8',
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row'
  },
  drawerHeaderText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  },
  drawerImage: {
    margin: 10,
    width: 80,
    height: 60
  }
});

export default Main;