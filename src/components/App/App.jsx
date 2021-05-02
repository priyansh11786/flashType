import React from 'react';
import Nav from '../nav/nav'
import Landing from '../Landing/Landing'
import Footer from '../Footer/Footer'
import ChallengeSection from '../ChallengeSection/ChallengeSection'
import './App.css'
import { SAMPLE_PARAGRAPHS } from './../../data/SamplePara'

const totalTime = 60
const ServiceUrl = "https://baconipsum.com/api/?type=all-meat&paras=3&start-with-lorem=1&format=text"
const DefaultState = {
    SelectedPara: "Hello I am World!",
    timeStarted: false,
    timeRemaining: totalTime,
    words: 0,
    characters: 0,
    wpm: 0,
    testInfo: [],
};

class App extends React.Component {
    state = DefaultState

    fetchNewParaFallback = () => {
        const data = SAMPLE_PARAGRAPHS[
            Math.floor(Math.random() * SAMPLE_PARAGRAPHS.length)
        ]
        const SelectedParaArray = data.split("");
        const testInfo = SelectedParaArray.map(SelectedLetter => {
            return {
                testCharacter: SelectedLetter,
                status: "notAttempted",
            }
        })
        this.setState({
            ...DefaultState,
            testInfo,
            SelectedPara: data,
        })
}

fetchNewPara = () => {
    fetch(ServiceUrl)
        .then(component => component.text())
        .then((data) => {
            const SelectedParaArray = data.split("");
            const testInfo = SelectedParaArray.map(SelectedLetter => {
                return {
                    testCharacter: SelectedLetter,
                    status: "notAttempted",
                }
            })
            this.setState({
                ...DefaultState,
                testInfo,
                SelectedPara: data,
            })
        })
};

componentDidMount() {
    // fetch(ServiceUrl)
    //     .then(component => component.text())
    //     .then((data) => {
    //         const SelectedParaArray = data.split("");
    //         const testInfo = SelectedParaArray.map(SelectedLetter => {
    //             return {
    //                 testCharacter: SelectedLetter,
    //                 status: "notAttempted",
    //             }
    //         })
    //         this.setState({
    //             ...DefaultState,
    //             testInfo,
    //             SelectedPara: data,
    //         })
    //     })
    this.fetchNewParaFallback();
}

startTimer = () => {
    this.setState({ timeStarted: true })
    const timer = setInterval(() => {
        if (this.state.timeRemaining > 0) {
            const timeSpent = totalTime - this.state.timeRemaining;
            const wpm = timeSpent > 0 ? (this.state.words / timeSpent) * totalTime : 0
            this.setState({
                timeRemaining: this.state.timeRemaining - 1,
                wpm: parseInt(wpm),
            })
        } else {
            clearInterval(timer)
        }
    }, 1000)
}

startAgain = () => this.fetchNewParaFallback();

handleUserInput = (inputValue) => {
    if (!this.state.timeStarted) this.startTimer()


    const characters = inputValue.length;
    const words = inputValue.split(" ").length;
    const index = characters - 1

    // test for underflow condition
    if (index < 0) {
        this.setState({
            testInfo: [
                {
                    testCharacter: this.state.testInfo[0].testCharacter,
                    status: "notAttempted",
                },
                ...this.state.testInfo.slice(1),
            ],
            characters,
            words,
        })
        return;
    }

    // test for overflow condition
    if (index >= this.state.SelectedPara.length) {
        this.setState({ characters, words })
        return;
    }

    // make a copy of testInfo
    const testInfo = this.state.testInfo
    if (!(index === this.state.SelectedPara.length - 1))
        testInfo[index + 1].status = "notAttempted"

    //  check correct typed letter
    const testStatus = inputValue[index] === testInfo[index].testCharacter

    //  update the testInfo
    testInfo[index].status = testStatus ? "correct" : "incorrect"

    // update the status
    this.setState({
        testInfo,
        words,
        characters
    })
}

render() {
    return (
        <div className="main-container">
            <Nav />
            <Landing />
            <ChallengeSection startAgain={this.startAgain} onInputChange={this.handleUserInput} testInfo={this.state.testInfo} SelectedPara={this.state.SelectedPara} timeStarted={this.state.timeStarted} timeRemaining={this.state.timeRemaining} words={this.state.words} characters={this.state.characters} wpm={this.state.wpm} />
            <Footer />
        </div>
    )
}
}

export default App;