import React, {useState} from 'react';
import {View, SafeAreaView, Text, FlatList, TouchableOpacity, } from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../routes/AppRouter'
import {API_END_POINT_PERSONS, Person} from '../../App';
import Card from '../components/Card';
import { Cache } from "react-native-cache";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({navigation}) => {
    let [persons, setPersons] = useState<Person[]>([]);
  
    React.useEffect(() => {
        const cache = new Cache({
            namespace: "PersonApp",
            policy: {
                maxEntries: 300, 
                stdTTL: 0 // the standard ttl as number in seconds, default: 0 (unlimited)
            },
            backend: AsyncStorage
        });

        (async () => {
            // remove comment below line to remove cached data by force.
            // cache.remove(API_END_POINT_PERSONS);

            const personlistCached = await cache.get(API_END_POINT_PERSONS);
            if(personlistCached){
                setPersons(personlistCached) 
            }else{
                fetch(API_END_POINT_PERSONS)
                    .then((res) => res.json())
                    .then((json) => {
                        console.log(json)
                        setPersons(json.persons) 
                        cache.set(API_END_POINT_PERSONS, json.persons);
                    })
            }
        })();
    }, [])

    return (
        <SafeAreaView style={{flex: 1}}>
            <FlatList data={persons} renderItem={({ item }) => (
                <View style={{marginVertical:5, marginHorizontal: 10}}>
                    <Card>
                        <TouchableOpacity onPress={() => navigation.navigate('PersonDetails', item)}>
                            <View style={{marginHorizontal: 20, marginVertical: 20}}>
                                <Text>{ item.firstName }</Text>
                            </View>
                        </TouchableOpacity>
                    </Card>
                </View>
            )} />
        </SafeAreaView>
    );
}

export default Home;