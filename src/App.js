import React from 'react';
import './App.css';



class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        results: [],
      }
    }
    componentDidMount() {
      fetch('http://localhost:8001/api/shoe')
      .then((res) => res.json())
      .then(data => {
        console.log(data)
        this.setState({results: data})
      })
    }
    render() {
    return (
    <ul>
      {this.state.results.map((r) => (
      <>
      <h1>{r.brand_name}</h1>
      <li>size:{r.size}</li>
      <li>manufacturer:{r.manufacturer}</li>
      <li>color:{r.color}</li>
      <li>material:{r.material}</li>
      <li>shoe type:{r.shoe_type}</li>
      <li>fastener type:{r.fasten_type}</li>
      <br/>
      <br/>
      </>
    ))}</ul>
    );
    }
  }

export default App;
