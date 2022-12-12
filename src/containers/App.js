import React, { Component } from 'react'
import CardList from '../components/CardList'
import Robot from '../components/Robot';
import SearchBox from '../components/SearchBox';
import 'tachyons';
import './App.css'
import Scroll from '../components/Scroll.js'
class App extends Component {
    constructor() {
        super()
        this.state = {
            Robot: Robot,
            searchField: ''
        }
    }
    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
    }
    render() {
        const filteredRobots = this.state.Robot.filter(Robot => {
            return Robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        if (this.state.Robot.length===0){
            return <h1 className='tc pa3'>LOADING...</h1>
        }
        else{
            return (
                <div className='tc'>
                    <h1 className="f1 ma4" >
                        RoboFriends
                    </h1>
                    <div>
                        <SearchBox searchChange={this.onSearchChange} />
                    </div>
                        <Scroll>
                            <CardList Robot={filteredRobots} />
                        </Scroll>
                    <div>
                        <h3 className="mr5 mt4 mb4 tr">Only for Gate Aspirants</h3>
                    </div>
                </div>

            )
        } 
    }
}
export default App;