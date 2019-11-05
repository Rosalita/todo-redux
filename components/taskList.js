import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native"

export default class TaskList extends React.Component {

    state = {
        tasks: ["Learn React Native", "Learn Redux", "Build final project"],
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Task List</Text>
                <FlatList
                    style={styles.list}
                    data={this.state.tasks}
                    renderItem={({ item, index }) => <View><Text>{index + 1}: {item}</Text></View>}
                    keyExtractor={(item, index) => `${item}-${index}`}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        alignItems: 'center',
        justifyContent: 'center',

    },

    list: {
        marginTop: 10,
    }
});


