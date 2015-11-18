'use strict';

var React = require('react-native');
var {
 AppRegistry,
 StyleSheet,
 Text,View,
 TouchableOpacity,
 NativeModules,
} = React;

exports.displayName = (undefined: ?string);
exports.description = 'DatePicker examples.';
exports.title = '<DatePicker>';
exports.examples = [
{
  title: '<DatePicker>',
  description: 'Thirdparty date picker demo',
    render: function() {
        return (
          <TextOnPressBox/>
        );
    }
 }, 
];

var TextOnPressBox = React.createClass({
  getInitialState: function() {
    return {
      title: 'Click Me',
    };
  },
  updateTitle: function(title) {
    this.setState({ title: title });
  },
  datePickerCallback: function(hour, minute) {
      var text =  hour + ":" + minute;
      this.updateTitle(text);
      console.log(text);
  },
  handleClick: function () {
    this.updateTitle('click' + NativeModules.DateAndroid);
    NativeModules.DateAndroid.showTimepicker(function() {}, this.datePickerCallback.bind(this));
  },
  render: function() {
    return (
            <View style={styles.container}>
              <TouchableOpacity onPress={this.handleClick}>
                <Text style={styles.instructions}>
                  { this.state.title } 
                </Text>
              </TouchableOpacity>
            </View>
    );
  }
});

var styles = StyleSheet.create({
  instructions: {
    textAlign: 'center',
    color: '#333333',
    margin: 5,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

