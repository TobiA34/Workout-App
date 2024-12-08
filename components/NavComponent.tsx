import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import FormModal from "./Modal/FormModal";

const NavComponent = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selected, setSelected] = useState([]);

  const handleFormSubmit = (formData) => {
    console.log("Form Data:", JSON.stringify(formData, null, 2));
    setModalVisible(false); // Close modal after submission
  };

  return (
    <View style={styles.nav}>
      {/* Image */}
      <Image
        source={{
          uri: "https://petapixel.com/assets/uploads/2022/09/SportsPhotographerBasketball3-800x800.jpeg",
        }}
        style={styles.image}
      />

      {/* Text */}
      <Text style={styles.text}>Insight</Text>

      {/* Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>

      <FormModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        handleFormSubmit={handleFormSubmit}
        selected={selected}
        setSelected={setSelected}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  nav: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  button: {
    flexDirection: "row",
    fontSize: 12,
    backgroundColor: "#EADFD2",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 50,
  },
  buttonText: {
    justifyContent: "center",
    fontSize: 32,
    color: "#333",
    fontWeight: "600",
  },
});

export default NavComponent;