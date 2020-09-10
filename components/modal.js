import React from 'react';
import {
  TextInput,
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';

const Popup = ({onChange, newTask, onSave, onCancel}) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        style={styles.modalView}
        animationType="slide"
        transparent={false}
        visible={true}>
        <View style={styles.centeredView}>
          <TextInput
            placeholder="New task"
            style={styles.textInput}
            value={newTask}
            onChangeText={onChange}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.modalButton} onPress={onCancel}>
              <Text style={styles.buttonText}>cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton} onPress={onSave}>
              <Text style={styles.buttonText}>save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    elevation: 2,
    paddingVertical: 20,
  },
  modalView: {
    margin: 20,
    borderRadius: 20,
    padding: 35,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textInput: {
    fontSize: 15,
    padding: 20,
    width: '90%',
    height: 60,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
  },
  modalButton: {
    marginLeft: 10,
    width: 150,
    height: 50,
    backgroundColor: '#f6f6f7',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ccc',
  },
  buttonText: {
    fontSize: 20,
    color: 'black',
  },
  buttonContainer: {
    marginTop: 10,
    width: '90%',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
});

export default Popup;
