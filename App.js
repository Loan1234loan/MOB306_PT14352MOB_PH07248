import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Modal, ScrollView, TextInput, Picker, Button } from 'react-native';
import SubjectItem from './index.js';

export default function App() {

  const [nameLogin, setNameLogin] = useState("");
  const [age, setYearOld] = useState();

  const userProfile = [
    {
      thumbnail: 'https://truyenhay.com/images/217/300/yzpb-bia-do-dan-phan-cong.jpg',
      name: 'Bia đỡ đạn phản công',
      category: 'Dị năng',
      total_chapters: 50,
      is_full: false,
    },
    {
      thumbnail: 'https://truyenhay.com/images/217/300/gazu-choc-tuc-vo-yeu-mua-mot-tang-mot.jpg',
      name: 'Chọc tức vợ yêu',
      category: 'Ngôn tình',
      total_chapters: 35,
      is_full: true,
    },
    {
      thumbnail: 'https://truyenhay.com/images/217/300/uvkw-nam-nhan-trong-guong.jpg',
      name: 'Nam nhân trong gương',
      category: 'Truyện ma',
      total_chapters: 9,
      is_full: false,
    }
    ,
    {
      thumbnail: 'https://truyenhay.com/images/217/300/zitw-toi-cuong-sinh-hoa-the.jpg',
      name: 'Tối cường sinh hóa thể',
      category: 'Phiêu lưu,Mạt Thế',
      total_chapters: 9,
      is_full: true,
    }
    ,
    {
      thumbnail: 'https://img.webtruyen.com/public/images/medium/tuchantuvannienGYIi1tj3Sr.jpg',
      name: 'Vô tiên',
      category: 'Tiên hiệp',
      total_chapters: 6,
      is_full: true,
    }
    ,
    {
      thumbnail: 'https://truyenhay.com/images/217/300/y1pk-quy-hon.jpg',
      name: 'Qủy hôn',
      category: 'Ngôn tình',
      total_chapters: 3,
      is_full: false,
    }
  ];

  const [user, setUser] = useState(userProfile);
  const [showModal, setShowModal] = useState(true);
  const [login, setLogin] = useState(false);
//xóa
  const handleDeleteSubject = (name) => {
    // su dung let de co the gan gia tri moi
    let newUser = user;
    // filter ((item) => tra ve dieu kien ma item do se duoc xu ly)
    // sau khi filter xong (chay het vong lap voi dieu kien dua ra) -> tra ve mang moi co cac item thoa man dk
    newUser = newUser.filter((userProfile) => userProfile.name != name);
    setUser(newUser);
  }

  function validateFrom() {
    if (nameLogin == '') {
        alert('Bạn chưa nhập tên');
    } else if (age == '') {
        alert('Vui lòng nhập tuổi');
    }
    else if (isNaN(age)) {
        alert("Tuổi phải là một số");
    }
    else if (age < 18) {
        alert('Bạn có chắc minh đã trên 18+');
    } else {
        
        setShowModal(false);
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.textNameLogin}>Người đọc: {nameLogin}</Text>
      <Text style={styles.textNameLogin}>Tuổi: {age}</Text>

      <FlatList
        data={user}
        renderItem={({ item }) => (
          <SubjectItem item={item} handleDelete={handleDeleteSubject} />
        )}
        keyExtractor={(item, index) => index}

      />
      <Modal visible={showModal} >
        <ScrollView>


          <View style={styles.modal}>
            <Text style={styles.text} >Nhập thông tin</Text>
            <Text style={styles.textModal} >Tên :</Text>
            <TextInput 
            
            placeholder="Nhập tên"
            style={styles.input} onChangeText={(valueName) => setNameLogin(valueName)} />

            <Text style={styles.textModal} >Tuổi :</Text>
            <TextInput 
            
            placeholder="Nhập tuổi"
            style={styles.input} onChangeText={(age) => setYearOld(age)} />

            < Button 
              title="Đăng nhập"
              onPress={() =>validateFrom()}
            />
          </View>
        </ScrollView>

      </Modal>
    </View>
  );



}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 30,
        alignItems:'stretch',
        justifyContent:'center',
        backgroundColor: '#fff',
        paddingLeft:16,
        paddingRight:16
  },
  textNameLogin: {
    fontSize: 23,
    fontStyle: 'italic'
  },
  textModal: {
    padding: 8,
    margin: 10,
  },
  modal: {
    flex: 1,
  },
  text: {
    fontSize: 30,
        color: 'red',
        textAlign: 'center',
        marginTop: 1
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,

  },

});
