//import { StatusBar, StyleSheet, Text, View } from 'react-native';
//import { useState } from 'react';
//import SegmentedControl from 'rn-segmented-control';
//import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
//import Americano from './Americano';
//import Latte from './Latte';
import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ff4081' }]}>
    <Text style={styles.text}>First Tab</Text>
  </View>
);

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]}>
    <Text style={styles.text}>Second Tab</Text>
  </View>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={styles.indicator}
    style={styles.tabBar}
    labelStyle={styles.label}
  />
);

const PriceScreen = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Americano' },
    { key: 'second', title: 'Latte' },
  ]);
  /*
  const [tabIndex, setTabIndex] = useState(1);
  const handleTabsChange = (index) => {
    setTabIndex(index);
  };*/

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Price</Text>
      {/*<SegmentedControl
        tabs={['Label', 'Label']}
        onChange={() => {}}
        paddingVertical={6}
      />
      <Text style={styles.textStyle}> Segmented Control with 3 labels</Text>
      <SegmentedControl
        tabs={['Label', 'Label', 'Label']}
        onChange={() => {}}
        paddingVertical={10}
      />
      <Text style={styles.textStyle}> Segmented Control with 4 labels</Text>
      <SegmentedControl
        tabs={['Label', 'Label', 'Label', 'Label']}
        onChange={() => {}}
        paddingVertical={14}
      />
      <Text style={styles.textStyle}>Customised Segmented Control</Text>
      <SegmentedControl
        tabs={['Shop', 'Discover', 'Brands']}
        currentIndex={tabIndex}
        onChange={handleTabsChange}
        segmentedControlBackgroundColor="#86c4fd"
        activeSegmentBackgroundColor="#0482f7"
        activeTextColor="white"
        textColor="black"
      paddingVertical={18}/>*/}

      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={renderTabBar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16,
  },
  textStyle: {
    fontSize: 24,
    textAlign: 'center',
    paddingVertical: 10,
  },
  scene: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
  tabBar: {
    backgroundColor: '#2196f3',
  },
  indicator: {
    backgroundColor: '#ffeb3b',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default PriceScreen;
