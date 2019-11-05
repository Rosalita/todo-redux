import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native"
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return (
        { tasks: state.tasks }
    )
}

class TaskList extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>Task List</Text>
                <FlatList
                    style={styles.list}
                    data={this.props.tasks}
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

export default connect(mapStateToProps)(TaskList)



