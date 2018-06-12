import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity  } from 'react-native';

const LeadingLoginScreen = ({onMainScreen, onAuth, onChangeLogin, onChangePassword, login, password}) => {
    return (
      <View style={styles.container}>
            <Text style={styles.title} numberOfLines={1}>Ведущий, введите логин и пароль:</Text>
            <Text style={styles.subtitle} numberOfLines={1}>Логин:</Text>
            <TextInput
                style={styles.input}
                editable = {true}
                placeholder={'example@mail.com'}
                placeholderTextColor={'#fff'}
                onChangeText={onChangeLogin}
                value={login}
            />
             <Text style={styles.subtitle} numberOfLines={1}>Пароль:</Text>
            <TextInput
                style={styles.input}
                editable = {true}
                placeholder={'mypassword123'}
                placeholderTextColor={'#fff'}
                onChangeText={onChangePassword}
                value={password}
            />
            <View style={styles.buttonBox}>
                <TouchableOpacity onPress={onAuth} style={styles.button}>
                    <Text style={styles.buttonText}>Войти</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onMainScreen} style={styles.button}>
                        <Text style={styles.buttonText}>Назад</Text>
                </TouchableOpacity>
            </View>
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 20
    },
    input: {
        backgroundColor: 'rgba(8,22,68,.8)',
        color: '#fff',
        width: '100%',
        marginBottom: 20
    },
    title: {
        color: 'rgba(8,22,68,.8)',
        fontSize: 20,
        marginBottom: 20,
        textAlign: 'left',
        fontWeight: 'bold'
    },
    subtitle: {
        color: 'rgba(8,22,68,.8)',
        fontSize: 16,
        marginBottom: 4,
        textAlign: 'left',
        fontWeight: 'normal'
    },
    button: {
        alignItems: 'center',
        backgroundColor: 'rgba(8,22,68,.8)',
        padding: 10,
        borderRadius: 2,
        width: 120
    },
    buttonBox: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    }
});
  
  export default LeadingLoginScreen;