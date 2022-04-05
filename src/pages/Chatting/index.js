import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ChatItem, Header, InputChat} from '../../components';
import {colors, fonts, getData, showError} from '../../utils';
import {Fire} from '../../config';

const Chatting = ({navigation, route}) => {
  const dataDoctor = route.params;
  const [chatContent, setChatContent] = useState('');
  const [user, setUser] = useState({});

  useEffect(() => {
    getData('user').then(res => {
      console.log('user login: ', res);
      setUser(res);
    });
  }, []);

  const chatSend = () => {
    console.log('chat Send Press', chatContent);
    const today = new Date();
    const hour = today.getHours();
    const minute = today.getMinutes();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const data = {
      sendBy: user.uid,
      chatDate: new Date().getTime(),
      chatTime: `${hour}:${minute} ${hour > 12 ? 'PM' : 'AM'}`,
      chatContent: chatContent,
    };
    console.log('data utk di kirim: ', data);
    console.log(
      'url firebase: ',
      `chatting/${user.uid}_${dataDoctor.data.uid}/allChat/${year}-${month}-${date}`,
    );

    Fire.database()
      .ref(
        `chatting/${user.uid}_${dataDoctor.data.uid}/allChat/${year}-${month}-${date}`,
      )
      .push(data)
      .then(() => {
        setChatContent('');
      })
      .catch(err => {
        showError(err.message);
      });
  };
  return (
    <View style={styles.page}>
      <Header
        type="dark-profile"
        title={dataDoctor.data.fullName}
        desc={dataDoctor.data.category}
        photo={{uri: dataDoctor.data.photo}}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.chatDate}>Senin, 21 Januari 2022</Text>
          <ChatItem isMe />
          <ChatItem />
          <ChatItem isMe />
        </ScrollView>
      </View>
      <InputChat
        value={chatContent}
        onChangeText={value => setChatContent(value)}
        onButtonPress={chatSend}
      />
    </View>
  );
};

export default Chatting;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    flex: 1,
  },
  chatDate: {
    fontSize: 11,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginVertical: 20,
    textAlign: 'center',
  },
});
