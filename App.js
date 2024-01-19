import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Modal, Pressable } from 'react-native';
import React, { useState } from "react";

const App = () => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.container}>
            <Modal
                style={styles.modal}
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {setModalVisible(!modalVisible)}}
            >
                <View style={[styles.container, styles.modal]}>
                    <View style={styles.container}>
                        <Text style={styles.modalText}>This is modal</Text>
                        <Pressable onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.text}>Hide modal message</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <Pressable onPress={() => setModalVisible(true)}>
                <Text style={styles.text}>Show modal message</Text>
            </Pressable>
        </View>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    borderWidth: 1,
    height: 50,
    width: 200,
    borderColor: "black",
    textAlignVertical: "center",
    textAlign: "center",
  },
  modal: {
    borderWidth: 2,
    borderColor: "black",
  },
  modalText: {
    paddingBottom: 20,
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default App;
