import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity  } from 'react-native';

const MainScreen = ({ onLoginAsPlayer, onLoginAsLeading }) => {
    return (
      <View style={styles.container}>
            <View style={styles.buttonWrap}>
                <TouchableOpacity onPress={onLoginAsPlayer} style={styles.button}>
                    <Text style={styles.buttonText}>Войти как игрок</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onLoginAsLeading} style={styles.button}>
                    <Text style={styles.buttonText}>Войти как ведущий</Text>
                 </TouchableOpacity>
            </View>
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: 10,
        paddingRight: 10,
    },
    buttonWrap: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        alignItems: 'center',
        backgroundColor: 'rgba(8,22,68,.8)',
        padding: 10,
        borderRadius: 2
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    }
});
  
  export default MainScreen;