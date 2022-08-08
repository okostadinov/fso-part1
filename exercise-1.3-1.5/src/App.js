const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  );
};

const Header = (props) => <h1>{props.course}</h1>;

const Content = (props) => (
  <div>
    <Part title={props.parts[0].name} exerciseAmount={props.parts[0].exercises} />
    <Part title={props.parts[1].name} exerciseAmount={props.parts[1].exercises} />
    <Part title={props.parts[2].name} exerciseAmount={props.parts[2].exercises} />
  </div>
);

const Part = (props) => (
  <p>
    {props.title} {props.exerciseAmount}
  </p>
);

const Total = (props) => <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>;

export default App;
