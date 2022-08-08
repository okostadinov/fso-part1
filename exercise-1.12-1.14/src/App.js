import { useState } from "react";

const Subtitle = ({ text }) => <h2>{text}</h2>;

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const Anecdote = ({ anecdote }) => (
  <div>
    <p>{anecdote.text}</p>
    <p>has {anecdote.votes} votes</p>
  </div>
);

const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    { text: "If it hurts, do it more often.", votes: 0 },
    {
      text: "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
      votes: 0,
    },
    {
      text: "Adding manpower to a late software project makes it later!",
      votes: 0,
    },
    {
      text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
      votes: 0,
    },
    { text: "Premature optimization is the root of all evil.", votes: 0 },
    {
      text: "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
      votes: 0,
    },
    {
      text: "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
      votes: 0,
    },
  ]);

  const [selected, setSelected] = useState(0);

  const setRandomAnecdote = () => {
    const randomAnecdoteIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomAnecdoteIndex);
  };

  const addAnecdoteVote = () => {
    const anecdotesCopy = [...anecdotes];
    anecdotesCopy[selected].votes++;

    setAnecdotes(anecdotesCopy);
  };

  const getMostVotedAnecdote = () => {
    let currentMostVoted = anecdotes[0];

    anecdotes.forEach((ancdt) => {
      if (ancdt.votes > currentMostVoted.votes) {
        currentMostVoted = ancdt;
      }
    });

    return currentMostVoted;
  };

  return (
    <>
      <Subtitle text={"Anecdote of the day"} />
      <Anecdote anecdote={anecdotes[selected]} />
      <Button onClick={addAnecdoteVote} text={"vote"} />
      <Button onClick={setRandomAnecdote} text={"next anecdote"} />
      <Subtitle text={"Anecdote with most votes"} />
      <Anecdote anecdote={getMostVotedAnecdote()} />
    </>
  );
};

export default App;
