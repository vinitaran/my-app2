import React from 'react';
import { View, Text, StatusBar, ImageBackground, StyleSheet, Image, ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const data = [
    {
      id: 1,
      imageUri: 'https://sunrisefruits.com/wp-content/uploads/2018/05/Productos-Pimientos-Peppers-Sunrisefruitscompany.jpg',
      itemName: 'Capsicum',
      expiryDays: 2,
    },
    {
        id: 2,
        imageUri: 'https://www.southernliving.com/thmb/zCKBQZG85v0gxUpn5Nm_8elGJaA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1413944242-79c406e0bbe4435596bc671f95a949cb.jpg',
        itemName: 'Milk',
        expiryDays: 1,
      },
      {
        id: 3,
        imageUri: 'https://www.allrecipes.com/thmb/y_uvjwXWAuD6T0RxaS19jFvZyFU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1205638014-2000-d0fbf9170f2d43eeb046f56eec65319c.jpg',
        itemName: 'Oranges',
        expiryDays: 4,
      },
      
      
    // Add more data objects as needed
  ];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
      <ImageBackground
        source={require('../assets/home.avif')} // Replace with the actual path to your image
        style={styles.backgroundImage}
      >
        <View style={styles.greetingBox}>
            <Text style={styles.greetings}>Hello Vinita!</Text>
        </View>
        <View style={styles.dataBox}>
        <View style={styles.dataBoxHeader}>
            <Text style={styles.dataBoxHeaderText}>Inside fridge</Text>
          </View>
            <View style={styles.dataBoxEmojiContainer}>
              <View style={styles.dataBoxEmoji}><Text style={styles.dataBoxEmojiContainerText}><MaterialCommunityIcons name="thermometer" size={50} /></Text></View>
              <View style={styles.dataBoxEmoji}><Text style={styles.dataBoxEmojiContainerText}>🤢</Text></View>
            </View>
        </View>
        <View style={styles.dataBox}>
          <View style={styles.dataBoxHeader}>
            <Text style={styles.dataBoxHeaderText}>Shopping lists</Text>
          </View>
          {/* Dynamic Table Content */}
          {data.map(item => (
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
    minHeight: "100%"
  },
  dataBox: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    flex: 1,
  },
  greetingBox: {
    fontSize: 40,
    padding: 10,
    height: 300,
  },
  greetings: {
    fontSize: 40,
    paddingTop: 60,
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
    padding: 10,
  },
  dataBoxEmojiContainerText:{
    fontSize: 50,
  }
});

export default HomeScreen;
