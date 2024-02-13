import { Pressable, StyleSheet, Text, View } from 'react-native';
import {Link} from 'expo-router'
export default function ExerciseListItem({item}){
  return (
    <Link href={`/${item.name}`} asChild>
        <Pressable style={styles.exerciseContainer}>
        <Text style={styles.exerciseName}>{item.name}</Text>
        <Text style={styles.exerciseSubtitle}>
            <Text style={styles.subValue}>{item.muscle}</Text> | 
            <Text style={styles.subValue}>{item.equipment}</Text>
        </Text>
        </Pressable>
    </Link>
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