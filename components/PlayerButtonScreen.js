import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity  } from 'react-native';

const PlayerButtonScreen = ({onVote}) => {
    return (
      <View style={styles.container}>
            <View style={styles.buttonBox}>
                <TouchableOpacity onPress={onVote} style={styles.voteButton}>
                    <Text style={styles.voteButtonText}>Проголосовать</Text>
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
        paddingRight: 10
    },
    voteButton: {
        alignItems: 'center',
        backgroundColor: 'rgba(8,22,68,.8)',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 100,
        paddingBottom: 100,
        borderRadius: 4,
        width: '80%'
    },
    buttonBox: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    voteButtonText: {
        color: '#fff',
        fontSize: 36,
        fontWeight: 'bold'
    }
  });

//   MainScreen.defaultProps = {
//   };

//   MainScreen.propTypes = {
//   };

//   Profile.propTypes = {
//     user: React.PropTypes.shape({       
//         firstName: React.PropTypes.string,
//         lastName: React.PropTypes.string,
//         photo: PropTypes: string
//     })
// };

  export default PlayerButtonScreen;