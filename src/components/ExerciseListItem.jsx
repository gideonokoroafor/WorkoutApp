import { StyleSheet, Text, View } from 'react-native';

export default function ExerciseListItem({item}){
  return (
    <View style={styles.exerciseContainer}>
      <Text style={styles.exerciseName}>{item.name}</Text>
      <Text style={styles.exerciseSubtitle}>
        <Text style={styles.subValue}>{item.muscle}</Text> | 
        <Text style={styles.subValue}>{item.equipment}</Text>
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  exerciseContainer: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    gap: 5,
    marginHorizontal: 10,

    // shadow
    shadowColor: "#000000",
    shadowOffset: {
    width: 0,
    height: 3,
    },
    shadowOpacity:  0.17,
    shadowRadius: 3.05,
    elevation: 4
  },

  exerciseName: {
    fontSize: 25,
    fontWeight: '500',

  },

  exerciseSubtitle: {
    color: 'dimgrey'
  },

  subValue: {
    textTransform: 'capitalize', //capitalize the first letter
  }
});