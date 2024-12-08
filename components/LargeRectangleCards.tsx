import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

const LargeRectangleCards = ({title,desc,image}) => {
  return (
    <View style={styles.card}>
      {/* Left Section: Text */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>
          {desc}
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>

      {/* Right Section: Image */}
      <Image
        source={{
          uri: "https://petapixel.com/assets/uploads/2022/09/SportsPhotographerBasketball3-800x800.jpeg", // Replace with your actual image URL
        }}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',     backgroundColor: '#F9F4EC', // Background color matches the card
    borderRadius: 20, // Smooth rounded corners
    padding: 20, // Inner padding inside the card
    width: 360, // Exact width of the card
    height: 'auto', // Exact height of the card
    margin: 10, // Outer margin for spacing between cards
     shadowColor: '#000', // Shadow for depth
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Shadow for Android
    
  },
  textContainer: {
    flex: 2, // Text container takes up more space
    paddingRight: 30, // Space between text and the image
  },
  title: {
    fontSize: 22, // Title font size matches the design
    fontWeight: 'bold', // Bold font for the title
    color: '#333333', // Darker color for text
    marginBottom: 8, // Space below the title
  },
  description: {
    fontSize: 15, // Description font size slightly smaller than the title
    color: '#666666', // Muted gray color for the description
    marginBottom: 20, // Space below the description
  },
  button: {
    backgroundColor: '#EADFD2', // Button background color to match the design
    paddingVertical: 8, // Vertical padding inside the button
    paddingHorizontal: 16, // Horizontal padding inside the button
    borderRadius: 12, // Rounded button shape
    width: 120
  },
  buttonText: {
    fontSize: 14, // Button text size
    color: '#333333', // Button text color matches the design
    fontWeight: '600', // Semi-bold for emphasis
  },
  image: {
    flex: 1, // Image takes up the remaining space
    width: 120, // Exact width of the image
    height: 120, // Exact height of the image
    borderRadius: 10, // Rounded corners for the image
  },
});

export default LargeRectangleCards;