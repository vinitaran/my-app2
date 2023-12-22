import React, { useEffect, useState } from 'react';
import { View, Text, StatusBar, ImageBackground, StyleSheet, Image, ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { inventory } from '../assets/inventory';

const inventoryData = {
  "0": "123456",
  "1": "345678",
  "2": "123456",
  // ... more barcode values
};
  

const HomeScreen = () => {

  // const [inventoryData, setInventoryData] = useState({});

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('http://192.168.169.1/scan_state.json');
  //       const data = await response.json();
  //       setInventoryData(data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // const matchingItems = Object.values(inventoryData)
  // .map(barcode => inventory.find(item => item.barcode === barcode))
  // .filter(Boolean);

  const matchingItems = Object.values(inventoryData)
  .map(barcode => inventory.find(item => item.barcode === barcode))
  .filter(item => item && item.expiryDays <= 2);

  return (
    <View style={styles.container}>
      <ScrollView>
      <ImageBackground
        source={require('../assets/home.avif')} // Replace with the actual path to your image
        style={styles.backgroundImage}
        blurRadius={3}
      >
        <View style={styles.greetingBox}>
            <Text style={styles.greetings}>Smart Fridge</Text>
            <Text style={styles.greetingsName}>Welcome Vinita!</Text>
        </View>
        <View style={styles.dataBox}>
        <View style={styles.dataBoxHeader}>
            <Text style={styles.dataBoxHeaderText}>Inside fridge</Text>
          </View>
            <View style={styles.dataBoxEmojiContainer}>
              <View style={styles.dataBoxEmoji}>
                <Text style={styles.dataBoxEmojiContainerText}><MaterialCommunityIcons name="thermometer" size={56} color="lightblue"/></Text>
                <Text>2°C - Optimal and Stable</Text>
              </View>
              <View style={styles.dataBoxEmoji}><Text style={styles.dataBoxEmojiContainerText}>🤢</Text>
              <Text>Poor</Text>
              </View>
            </View>
        </View>
        <View style={styles.dataBox}>
          <View style={styles.dataBoxHeader}>
            <Text style={styles.dataBoxHeaderText}>Shopping lists</Text>
          </View>
          {/* Dynamic Table Content */}
          {matchingItems.map(item => (
            <View key={item.id} style={styles.tableRow}>
              <Image source={{ uri: item.imageUri }} style={styles.image} />
              <View style={styles.details}>
                <Text style={styles.detailsHeader}>{item.itemName}</Text>
                <Text style={styles.detailsCaption}>
                  {`Expires in ${item.expiryDays} day${item.expiryDays !== 1 ? 's' : ''}`}
                </Text>
              </View>
            </View>
          ))}
        </View>
        
      </ImageBackground>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' or 'contain'
    minHeight: "100%",
  },
  dataBox: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    flex: 1,
  },
  greetingBox: {
    padding: 10,
    height: 300,
  },
  greetings: {
    fontSize: 25,
    paddingTop: 60,
    color: '#FFFFFF',
  },
  greetingsName:{
    fontSize: 40,
    paddingTop: 60,
    color: '#FFFFFF',
  },
  dataBoxHeader: {
    borderBottomWidth: 1,  // Add a border only at the bottom
    borderColor: '#ccc',  // Border color
    paddingBottom: 8,    // Optional: Adjust the padding to create space between text and border
  },
  dataBoxHeaderText:{
    fontSize: 20,
    fontWeight: 'bold',
  },
  tableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 10,
    borderRadius: 30, // Optional: Set borderRadius for a circular image
    objectFit: "cover",
    borderWidth: 1,  // Add a border only at the bottom
    borderColor: '#ccc',  // Border color
    paddingBottom: 8,
  },
  details: {
    flex: 1,
  },
  detailsHeader:{
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  detailsCaption:{
    color: 'gray',
    fontSize: 12,
    
  },
  dataBoxEmoji:{
    width: '50%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dataBoxEmojiContainer:{
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'row',
    height: 80,
    padding: 10,
  },
  dataBoxEmojiContainerText:{
    fontSize: 50,
  }
});

export default HomeScreen;
