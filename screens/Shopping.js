import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'

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
    {
        id: 4,
        imageUri: 'https://sunrisefruits.com/wp-content/uploads/2018/05/Productos-Pimientos-Peppers-Sunrisefruitscompany.jpg',
        itemName: 'Capsicum',
        expiryDays: 2,
      },
      {
          id: 5,
          imageUri: 'https://www.southernliving.com/thmb/zCKBQZG85v0gxUpn5Nm_8elGJaA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1413944242-79c406e0bbe4435596bc671f95a949cb.jpg',
          itemName: 'Milk',
          expiryDays: 1,
      },
      {
      id: 6,
      imageUri: 'https://www.allrecipes.com/thmb/y_uvjwXWAuD6T0RxaS19jFvZyFU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1205638014-2000-d0fbf9170f2d43eeb046f56eec65319c.jpg',
      itemName: 'Oranges',
      expiryDays: 4,
      },

      {
        id: 7,
        imageUri: 'https://sunrisefruits.com/wp-content/uploads/2018/05/Productos-Pimientos-Peppers-Sunrisefruitscompany.jpg',
        itemName: 'Capsicum',
        expiryDays: 2,
      },
      {
          id: 8,
          imageUri: 'https://www.southernliving.com/thmb/zCKBQZG85v0gxUpn5Nm_8elGJaA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1413944242-79c406e0bbe4435596bc671f95a949cb.jpg',
          itemName: 'Milk',
          expiryDays: 1,
      },
      
      
    // Add more data objects as needed
  ];

  const Shopping = () => {
    return (
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {data.map((shoppingList, index) => (
          <View key={index} style={styles.dataBox}>
            <View style={styles.dataBoxHeader}>
              <Text style={styles.dataBoxHeaderText}>List {index + 1}</Text>
            </View>
            {/* Dynamic Table Content */}
            {data.map((item, itemIndex) => (
              <View key={itemIndex} style={styles.tableRow}>
                <View style={styles.details}>
                  <Text style={styles.detailsHeader}>{itemIndex + 1}. {item.itemName}</Text>
                </View>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
    );
  };
  
  const styles = StyleSheet.create({
    scrollViewContent: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
    },
    dataBox: {
      margin: 10,
      backgroundColor: 'white',
      borderRadius: 10,
      padding: 10,
      flexBasis: '40%', // Adjust the width as needed
    },
    dataBoxHeader: {
      borderBottomWidth: 1,
      borderColor: '#ccc',
      paddingBottom: 8,
    },
    dataBoxHeaderText: {
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
      borderRadius: 30,
      borderWidth: 1,
      borderColor: '#ccc',
    },
    details: {
      flex: 1,
    },
    detailsHeader: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    detailsCaption: {
      color: 'gray',
      fontSize: 12,
    },
  });
  
  export default Shopping;