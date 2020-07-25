import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {List} from '../../components';
import {colors, fonts} from '../../utils';

const Messages = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>
        <List
          profile={{uri: 'https://placeimg.com/480/480/people'}}
          name="Alexa Rachel"
          desc="Oke menurut pak dokter bagaimana unt..."
          onPress={() => navigation.navigate('Chatting')}
        />
        <List
          profile={{uri: 'https://placeimg.com/480/480/people'}}
          name="Alexa Rachel"
          desc="Oke menurut pak dokter bagaimana unt..."
        />
        <List
          profile={{uri: 'https://placeimg.com/480/480/people'}}
          name="Alexa Rachel"
          desc="Oke menurut pak dokter bagaimana unt..."
        />
      </View>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.secondary, flex: 1},
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginLeft: 16,
  },
});
