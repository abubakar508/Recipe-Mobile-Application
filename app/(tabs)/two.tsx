import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const WishlistScreen = () => {
  const [wishlistItems, setWishlistItems] = useState([
    { id: 1, name: 'Sushi' },
    { id: 2, name: 'Hamburger' },
    { id: 3, name: 'Chicken Curry' },
  ]);

  const removeItem = (id) => {
    const updatedItems = wishlistItems.filter(item => item.id !== id);
    setWishlistItems(updatedItems);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Wishlist</Text>
      {wishlistItems.map(item => (
        <View key={item.id} style={styles.itemContainer}>
          <Text style={styles.itemText}>{item.name}</Text>
          <TouchableOpacity onPress={() => removeItem(item.id)}>
            <Text style={styles.removeItem}>Remove</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'gold',
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'gold',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  itemText: {
    fontSize: 16,
    color: 'black',
  },
  removeItem: {
    fontSize: 14,
    color: 'red', // Or any color you prefer for the "Remove" text
  },
});

export default WishlistScreen;
