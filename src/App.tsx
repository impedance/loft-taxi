import React from 'react';
import Header  from './components/Header';
import Profile from './components/Profile';
import Map  from './components/Map/Map';
import Signin from './components/Signin';
import SignUp from './components/SignUp';

const paths = ['login', 'profile', 'map', 'signup'];

class App extends React.Component {
  state = {
    currentPath: 'signup'
  };
  onPathChange = (path: string) => {
    this.setState({currentPath: path})
  }
  renderCurrentComponent = (path: string) => {
    switch (path) {
      case 'profile':
        return <Profile />;
      case 'map':
        return <Map />;
      case 'signup':
        return <SignUp onPathChange={this.onPathChange}/>;
      default:
        return <Signin />;
    }
  }
  render() {
    const { currentPath } = this.state;
    return (
      <div>
        <Header 
          paths={paths} onPathChange={this.onPathChange} ></Header>
          {this.renderCurrentComponent(currentPath)}
      </div>
    );
  }
}

export default App;
