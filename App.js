import React from 'react';
import { StatusBar, FlatList, Image } from 'react-native';
import { StyleSheet, View, Text } from 'react-native';
import { Tabs } from 'react-native-collapsible-tab-view';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Crush Motivation</Text>
    </View>
  );
};

const Example = () => {
  return (
    <Tabs.Container renderHeader={Header} headerHeight={100} revealHeaderOnScroll={true} snapThreshold={0.5}>
      <Tabs.Tab name="A">
        <ScreenA />
      </Tabs.Tab>
      <Tabs.Tab name="B">
        <ScreenB />
      </Tabs.Tab>
    </Tabs.Container>
  );
};

const ScreenA = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center' }}>
      <Text>Screen A</Text>
    </View>
  );
};

const ScreenB = () => {
  // Image data
  const images = [
    { id: 1, source: require('./assets/photos/download.jpg'), backgroundColor: '#ffcccc' },
    { id: 2, source: require('./assets/photos/dowload2.jpg'), backgroundColor: '#ccffcc' },
    { id: 3, source: require('./assets/photos/download3.jpg'), backgroundColor: '#ccccff' },
    { id: 4, source: require('./assets/photos/download4.jpg'), backgroundColor: '#ffffcc' },
    { id: 4, source: require('./assets/photos/download4.jpg'), backgroundColor: '#ffffcc' },
    { id: 4, source: require('./assets/photos/download4.jpg'), backgroundColor: '#ffffcc' },
    { id: 4, source: require('./assets/photos/download4.jpg'), backgroundColor: '#ffffcc' },
    { id: 4, source: require('./assets/photos/download4.jpg'), backgroundColor: '#ffffcc' },
    { id: 4, source: require('./assets/photos/download4.jpg'), backgroundColor: '#ffffcc' },
    { id: 4, source: require('./assets/photos/download4.jpg'), backgroundColor: '#ffffcc' },

    // { id: 5, source: require('./assets/photos/download5.jpg'), backgroundColor: '#ffccff' },
    // { id: 6, source: require('./assets/photos/download6.jpg'), backgroundColor: '#ccffff' },
  ];

  // Render item function for FlatList
  const renderItem = ({ item }) => (
    <View style={[styles.imageContainer, { backgroundColor: item.backgroundColor }]}>
      <Image source={item.source} style={styles.image} />
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2} // 2 images per row
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 100,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  imageContainer: {
    flex: 1,
    aspectRatio: 1, // Ensure square aspect ratio for images
    margin: 5,
    borderRadius: 20,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Example />
      <StatusBar style="auto" />
    </View>
  );
}
