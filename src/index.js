import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

class newApp extends Component {
    state = {
      response: '',
      post: '',
      responseToPost: '',
    };
    
    componentDidMount() {
      this.callApi()
        .then(res => this.setState({ response: res.express }))
        .catch(err => console.log(err));
    }
    callApi = async () => {
        const response = await fetch('/note');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        
        return body;
      };
};

ReactDOM.render(<App />,document.getElementById("root"));