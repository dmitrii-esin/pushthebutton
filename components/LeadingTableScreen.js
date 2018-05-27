import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';

const LeadingTableScreen = ({ playersData, onMainScreen, onResetAll }) => {
    return (
      <View style={styles.container}>
          <Text style={styles.title} numberOfLines={1}>Результаты голосования:</Text>
          <View style={styles.listContainer}>
              <FlatList
                  data={playersData}
                  renderItem={({item}) => <Text style={[styles.item, item.isVote && styles.isVote]}>{item.player} : {item.isVote ? 'Игрок проголосовал за!' : 'Игрок не проголосовал'}</Text>}
              />
           </View>
            <View style={styles.buttonWrap}>
                <TouchableOpacity onPress={onMainScreen} style={styles.button}>
                    <Text style={styles.buttonText}>На главный экран</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onResetAll} style={styles.button}>
                        <Text style={styles.buttonText}>Сбросить</Text>
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
    title: {
        color: 'rgba(8,22,68,.8)',
        fontSize: 20,
        marginBottom: 20,
        textAlign: 'left',
        fontWeight: 'bold'
    },
    listContainer: {
      flex: 1,
      marginBottom: 20
    },
    item: {
      color:  'rgba(8,22,68,.8)',
      fontSize: 18,
      fontWeight: 'bold'
    },
    isVote: {
      fontWeight: 'bold',
      color: 'rgb(0,225,137)'
    },
    buttonWrap: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },
    button: {
      alignItems: 'center',
      backgroundColor: 'rgba(8,22,68,.8)',
      padding: 10,
      borderRadius: 2
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

  export default LeadingTableScreen;