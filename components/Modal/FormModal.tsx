import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { MultiSelect } from "react-native-element-dropdown";
import DateTimePicker from "react-native-ui-datepicker";
import dayjs from "dayjs";
import Slider from "@react-native-community/slider";

const FormModal = ({ visible, onClose, onSubmit }) => {
  const [selected, setSelected] = useState([]);  
  const [date, setDate] = useState(dayjs()); 
  const [sliderValue, setSliderValue] = useState(0);  

  const data = [
    { label: "Running", value: "running" },
    { label: "Swimming", value: "swimming" },
    { label: "Cycling", value: "cycling" },
  ];

   const handleFormSubmit = () => {
    const formData = {
      activityType: selected,
      date: date.format("YYYY-MM-DD"),  
      intensity: sliderValue,
    };

     onSubmit(formData);

     onClose();
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}  
    >
      {/* Dismiss Modal on Outside Press */}
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.centeredView}>
          <TouchableWithoutFeedback onPress={() => {}}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Add Workout</Text>

              {/* MultiSelect Dropdown */}
              <View style={styles.field}>
                <Text style={styles.label}>Activity Type</Text>
                <MultiSelect
                  style={styles.dropdown}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  iconStyle={styles.iconStyle}
                  data={data}
                  labelField="label"
                  valueField="value"
                  placeholder="Select activity"
                  value={selected}
                  onChange={(value) => {
                    console.log("Selected activity:", value);   
                    setSelected(value);  
                  }}
                />
              </View>

              {/* Date Picker */}
              <View style={styles.field}>
                <Text style={styles.label}>Date</Text>
                <DateTimePicker
                  mode="single"
                  date={date}
                  onChange={(params) => setDate(params.date)} // Capture date value
                />
              </View>

              {/* Intensity Slider */}
              <View style={styles.field}>
                <Text style={styles.label}>Activity Intensity</Text>
                <Slider
                  style={styles.slider}
                  minimumValue={0}
                  maximumValue={5}
                  step={1}
                  value={sliderValue}
                  onValueChange={(value) => setSliderValue(value)}
                  minimumTrackTintColor="#6200EE"
                  maximumTrackTintColor="#C7C7C7"
                  thumbTintColor="#6200EE"
                />
                <Text style={styles.sliderValue}>Intensity: {sliderValue}</Text>
              </View>

              {/* Submit Button */}
              <TouchableOpacity style={styles.button} onPress={handleFormSubmit}>
                <Text style={styles.buttonText}>Add</Text>
              </TouchableOpacity>

              {/* Cancel Button */}
              <TouchableOpacity
                style={[styles.button, styles.cancelButton]}
                onPress={onClose}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

// Styles
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  field: {
    width: "100%",
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 5,
  },
  dropdown: {
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: "#FFFFFF",
  },
  placeholderStyle: {
    fontSize: 16,
    color: "gray",
  },
  selectedTextStyle: {
    fontSize: 16,
    color: "black",
  },
  slider: {
    width: "100%",
    height: 40,
  },
  sliderValue: {
    fontSize: 14,
    color: "#333",
    textAlign: "center",
    marginTop: 5,
  },
  button: {
    backgroundColor: "#6200EE",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    marginTop: 10,
    width: "100%",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  cancelButton: {
    backgroundColor: "white",
    borderColor: "#6200EE",
    borderWidth: 1,
  },
  cancelButtonText: {
    color: "#6200EE",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default FormModal;
