const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <>
      <Header course={course} />
      <Content
        part1={part1}
        exercises1={exercises1}
        part2={part2}
        exercises2={exercises2}
        part3={part3}
        exercises3={exercises3}
      />
      <Total amount={exercises1 + exercises2 + exercises3} />
    </>
  );
};

const Header = (props) => <h1>{props.course}</h1>;

const Content = (props) => (
  <div>
    <Part title={props.part1} exerciseAmount={props.exercises1} />
    <Part title={props.part2} exerciseAmount={props.exercises2} />
    <Part title={props.part3} exerciseAmount={props.exercises3} />
  </div>
);

const Part = (props) => (
  <p>
    {props.title} {props.exerciseAmount}
  </p>
);

const Total = (props) => <p>Number of exercises {props.amount}</p>;

export default App;
