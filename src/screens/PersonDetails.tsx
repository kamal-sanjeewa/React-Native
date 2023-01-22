import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../routes/AppRouter'
import { Person } from '../../App';
import Card from '../components/Card';
import moment from "moment";

const calculateAge = (dateString: string) =>{
  return moment().diff(dateString, 'years');
}

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'PersonDetails'>;
const PersonDetails = ({navigation, route}: ScreenProps) => {
  const person: Person = route.params;
  return (
    <View style={styles.mainContainer}>
      <Card>
        <Text style={styles.textContainer}>First Name: {person.firstName}</Text>
        <Text style={styles.textContainer}>Last Name: {person.lastName}</Text>
        <Text style={styles.textContainer}>Birthday: {person.birthday}</Text>
        <Text style={styles.textContainer}>Age: {calculateAge(person.birthday)} </Text>
        <Text style={styles.textContainer}>Email Address: {person.email}</Text>
        <Text style={styles.textContainer}>Mobile Number: {person.phone}</Text>
        <Text style={styles.textContainer}>Address: {person.address}</Text>
        <Text style={styles.textContainer}>Contact Person: {person.contactPerson}</Text>
        <Text style={styles.textContainer}>Contact Person/'s Phone Number: {person.contactPersonPhoneNumber}</Text>
      </Card>
    </View>
  );
}


const styles = StyleSheet.create({
  mainContainer: {
    marginVertical:10, 
    marginHorizontal: 10
  },
  textContainer: {
      padding: 10
  }
})

export default PersonDetails;