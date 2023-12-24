import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
  TextInput,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Picker, PickerIOS } from '@react-native-picker/picker';
import { inventory } from '../assets/inventory';

const Inventory = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [itemName, setItemName] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  const toggleModal = () => setIsModalVisible(!isModalVisible);

  const handleNameChange = (text) => setItemName(text);

  const handleCategoryChange = (value) => setSelectedCategory(value);

  const handleSubmit = () => {
    console.log('Item Name:', itemName);
    console.log('Selected Category:', selectedCategory);
    toggleModal();
  };

  // Sample inventory data, replace it with your actual data
  const inventoryData = {
    "0": "123456",
    "1": "345678",
    "2": "12345",
    // ... more barcode values
  };

  // Map barcode values to corresponding inventory items
  const matchingItems = Object.values(inventoryData)
    .map((barcode) => inventory.find((item) => item.barcode === barcode))
    .filter(Boolean);

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Render Inventory Sections */}
        {renderInventorySection('Inventory', matchingItems)}
        {renderInventorySection('Pantry', matchingItems)}

        {/* Modal */}
        <Modal visible={isModalVisible} animationType="slide" transparent={false}>
          <View style={styles.modal}>
            <View style={styles.modalContent}>
              {/* Text Input for Item Name */}
              <TextInput
                style={styles.input}
                placeholder="Enter Item Name"
                value={itemName}
                onChangeText={handleNameChange}
              />

              {/* Picker for Category */}
              <Picker
                selectedValue={selectedCategory}
                onValueChange={handleCategoryChange}
              >
                <Picker.Item label="Select Category" value={null} />
                <Picker.Item label="Category 1" value="category1" />
                <Picker.Item label="Category 2" value="category2" />
                {/* Add more categories as needed */}
              </Picker>

              {/* Submit and Close Buttons */}
              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={toggleModal}>
                <Text style={styles.buttonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ScrollView>

      {/* Button with plus icon */}
      <TouchableOpacity style={styles.addButton} onPress={toggleModal}>
        <FontAwesome name="plus" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );

  // Function to render each inventory section
  function renderInventorySection(title, items) {
    return (
      <View style={styles.dataBox}>
        <View style={styles.dataBoxHeader}>
          <Text style={styles.dataBoxHeaderText}>{title}</Text>
        </View>
        {items.map((item) => (
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
    );
  }
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dataBox: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    flex: 1,
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
    objectFit: 'cover',
    borderWidth: 1,
    borderColor: '#ccc',
    paddingBottom: 8,
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
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: 'blue',
    borderRadius: 30,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '90%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
});

export default Inventory;
