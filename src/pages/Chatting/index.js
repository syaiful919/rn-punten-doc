import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Header, ChatItem, InputChat} from '../../components';
import {fonts, colors} from '../../utils';

const Chatting = ({navigation}) => {
  const [chatContent, setChatContent] = useState('');
  const dataDoctor = {data: {fullName: 'tes'}};

  return (
    <View style={styles.page}>
      <Header
        type="dark-profile"
        title="Nairobi Putri Hayza"
        desc="Dokter Anak"
        photo={{uri: 'https://placeimg.com/480/480/people'}}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <Text style={styles.chatDate}>Senin, 21 Maret, 2020</Text>
            <ChatItem
              isMe
              text="Ibu dokter, apakah memakan
              jeruk tiap hari itu buruk?"
              date="4.20 AM"
            />
            <ChatItem
              text="Ibu dokter, apakah memakan
              jeruk tiap hari itu buruk?"
              date="4.20 AM"
              photo={{uri: 'https://placeimg.com/480/480/people'}}
            />
          </View>
        </ScrollView>
      </View>
      <InputChat
        value={chatContent}
        targetChat={dataDoctor}
        onChangeText={(value) => setChatContent(value)}
      />
    </View>
  );
};

export default Chatting;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
  content: {flex: 1},
  chatDate: {
    fontSize: 11,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginVertical: 20,
    textAlign: 'center',
  },
});
