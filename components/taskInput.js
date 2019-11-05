import React from "react";
import { Button, StyleSheet, TextInput, View } from "react-native"


export default class TaskInput extends React.Component {

    state = {
        input: "",
    }

    handleInput = input => {
        this.setState({ input })
    }

    handleAdd = () => {

    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.textBox}
                    value={this.state.input}
                    onChangeText={this.handleInput}
                    placeholder="Add a task"
                />
                <Button
                    title="Add"
                    onPress={this.handleAdd}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        flexDirection: "row",
    },
    textBox: {
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: "white",
        minWidth: 200,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
    }
});


