/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import {createServer} from "miragejs"
import { NavigationContainer } from '@react-navigation/native';
import AppRouter from './src/routes/AppRouter';

export interface Person {
  id: string,
  birthday: string,
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  address: string,
  contactPerson: string,
  contactPersonPhoneNumber: string
}


export const API_END_POINT_PERSONS = "/api/personlist";

// @ts-expect-error TS(2304): Cannot find name 'window'.
window.server = createServer({
  routes() {
    this.get(API_END_POINT_PERSONS, () => {
      const persons: Person[] = [
        {
          id: "63c8d5f02ff81b5ec7cd59d9",
          birthday: "2004-03-04",
          firstName: "Belinda",
          lastName: "Freeman",
          email: "belindafreeman@ecstasia.com",
          phone: "075 8566474",
          address: "123 Falmouth Street, Bartonsville, New York, 2157",
          contactPerson: "Johnston Abbott",
          contactPersonPhoneNumber: "072 9068749"
        },
        {
          id: "63c8d5f0d0836a1dbb382855",
          birthday: "2005-03-27",
          firstName: "Moore",
          lastName: "Leblanc",
          email: "mooreleblanc@ecstasia.com",
          phone: "072 2903188",
          address: "839 Macon Street, Summertown, Alaska, 9363",
          contactPerson: "Enid Cooley",
          contactPersonPhoneNumber: "011 7917760"
        },
        {
          id: "63c8d5f0cf0b401b0c15c07f",
          birthday: "1994-07-22",
          firstName: "Harding",
          lastName: "Franco",
          email: "hardingfranco@ecstasia.com",
          phone: "075 8344654",
          address: "161 Bushwick Avenue, Juarez, New Jersey, 5121",
          contactPerson: "Gretchen Harper",
          contactPersonPhoneNumber: "077 1736977"
        },
        {
          id: "63c8d5f0639dedcf56a4f610",
          birthday: "1995-07-30",
          firstName: "Vargas",
          lastName: "Clemons",
          email: "vargasclemons@ecstasia.com",
          phone: "075 9251030",
          address: "575 Maple Street, Rodanthe, Colorado, 5929",
          contactPerson: "Harrington Fuller",
          contactPersonPhoneNumber: "075 7027081"
        },
        {
          id: "63c8d5f043c1c5858b90746e",
          birthday: "1998-05-23",
          firstName: "Margret",
          lastName: "Madden",
          email: "margretmadden@ecstasia.com",
          phone: "072 6625136",
          address: "513 Ira Court, Sanford, Rhode Island, 1425",
          contactPerson: "Henry Terry",
          contactPersonPhoneNumber: "075 7612193"
        },
        {
          id: "63c8d5f0fb9c9004b13fbe20",
          birthday: "1999-06-21",
          firstName: "Ross",
          lastName: "Ferrell",
          email: "rossferrell@ecstasia.com",
          phone: "011 6216809",
          address: "725 Desmond Court, Hickory, Missouri, 9424",
          contactPerson: "Geneva Kramer",
          contactPersonPhoneNumber: "077 1851332"
        }
      ];

      return {
        persons: persons
      }
    })
  },
})

const App: () => Node = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppRouter />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
