import React, { Component, Fragment } from 'react';
import Container from '@material-ui/core/Container';
import './App.css';
import { Header, Footer } from './components/layouts';
import Exercises from './components/Exercises';
import { exercises, muscles } from './store';

class App extends Component {
  state = {
    exercises: exercises
  };

  getExercisesByMuscles() {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise;
        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise];
        return exercises;
      }, {})
    );
  }
  render() {
    const exercises = this.getExercisesByMuscles();
    return (
      <Fragment>
        <Container>
          <Header />
          <Exercises exercises={exercises} />
          <Footer muscles={muscles} />
        </Container>
      </Fragment>
    );
  }
}

export default App;
