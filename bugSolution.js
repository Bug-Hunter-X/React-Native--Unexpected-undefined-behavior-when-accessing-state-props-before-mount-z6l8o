```javascript
// Solution component
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render() {
    // Solution: Conditional rendering
    if (!this.state.data) {
      return <Text>Loading...</Text>;
    }
    return (
      <View>
        <Text>{this.state.data.name}</Text>
      </View>
    );
  }
}
```