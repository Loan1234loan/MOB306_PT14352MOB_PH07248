import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert, Image, Modal, ScrollView, TextInput } from 'react-native';


export default function subjectItem({ item, handleDelete }) {

    const [showModal, setShowModal] = useState(false);

    const alertDelete = (name, handleDelete) => {
        return Alert.alert(
            'Delete Subject', // tham so dau tien: title
            `Bạn có muốn xóa truyện ${name} không?`, // tham so t2: content
            [
                {
                    text: 'yes',
                    onPress: () => { handleDelete(name) }
                },
                {
                    text: 'No',
                    onPress: () => { }
                }
            ],
            { cancleable: false } // cho click ra ben ngoai alert hay khong (true -> disable)
        )
    };

    return (
        < View style={styles.container}>
            <View style={style.row}>
                <View>
                    
                    <Image style={style.image} source={{ uri: item.thumbnail }} />
                    <Text>{`Tên truyện: ${item.name}`}</Text>
                    <Text>{`Thể loại truyện: ${item.category}`}</Text>
                    <Text>{`Số chương: ${item.total_chapters}`}</Text>

                    <Text>{`Tình trạng: ${item.is_full ? 'Full' : 'Chưa full'}`}</Text>
                    <Text>............................</Text>
                </View>

            </View>
            <View >
                <Button color="#00FFFF" title='DETAIL' onPress={() => setShowModal(true)} />
                <Button color="#FF00FF" title='DELETE' onPress={() => { alertDelete(item.name, handleDelete) }} />
            </View>

            <Modal visible={showModal} >
                <ScrollView>

                <View style={style.row}>
                <View>
                
                    <Image style={style.image} source={{ uri: item.thumbnail }} />

                    
                    <Text>{`Tên truyện: ${item.name}`}</Text>
                    <Text>{`Thể loại truyện: ${item.category}`}</Text>
                    <Text>{`Số chương: ${item.total_chapters}`}</Text>

                    <Text>{`Tình trạng: ${item.is_full ? 'Full' : 'Chưa full'}`}</Text>
                    <Button
                            title="Thoat"
                            onPress= {() => setShowModal(false)}
                            
                        />
                </View>

            </View>
                
                </ScrollView>

            </Modal>


        </View>
    )
}

const style = StyleSheet.create({
    row: {
        padding: 8,
        flex: 1,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',


    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 200
    },




});

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#fff',
        marginLeft: 20,

        paddingRight:15
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
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        margin: 10,

    },

});
