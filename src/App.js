import { Component } from 'react';
import './App.css';
import CardList from './component/card-list/card-list';
import SeachBox from './component/search-box/search-box';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monster: [],
      searchfeild: '',
      put:'',
      hw:'kush'
    }
  }
  componentDidMount() {
    var a=async() =>{
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const movies = await response.json();
      return movies;
    }
    a().then((resolve)=>this.setState({monster:resolve}))

  }

  oncheange = ((Event) => {
    var searchfeild = Event.target.value.toLowerCase()
    this.setState({ searchfeild })

  })

  e = ((e) => {
    var put = e.target.value.toLowerCase()
    this.setState({ put })

  })
  render() {
    const { searchfeild, monster } = this.state
    var cheak = monster.filter((monster) => {
      return monster.name.toLowerCase().includes(searchfeild)

    });

    return (
      <div className="App">
        <header className="App-header">
          <>
           this is input : <input type='text' onChange={this.e}/>
           <div>
           <h1>{this.state.put}</h1>
           </div>
          </>
          
          <h1 className='font-creat'>Monster Boost</h1>
          <SeachBox className={'search box'} type={'search'} placeholder={'search me'} trigger={this.oncheange} />
          <CardList monster={cheak} />
        </header>
      </div>
    );
  }

}

export default App;
