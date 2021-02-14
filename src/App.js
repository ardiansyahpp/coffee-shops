import './App.css'
import Content from './components/Content';
import NavigationBar from './components/NavigationBar';
// import LessonThree from './components/NavigationBar';
// import LessonOne from './components/Lesson1'
// import LessonTwo from './components/Lesson2';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Content />
    </div>
  );
}

export default App;
