import { useState } from "react";

const Subtitle = ({ text }) => <h2>{text}</h2>;

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const Statistics = ({ stats }) => {
  return (
    <table>
      <tbody>
        <StatisticLine text={"good"} value={stats.good} />
        <StatisticLine text={"neutral"} value={stats.neutral} />
        <StatisticLine text={"bad"} value={stats.bad} />
        <StatisticLine text={"all"} value={stats.all} />
        <StatisticLine text={"average"} value={stats.average} />
        <StatisticLine text={"positive"} value={stats.positive + " %"} />
      </tbody>
    </table>
  );
};

const App = () => {
  const [stats, setStats] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    all: 0,
    average: 0,
    positive: 0,
  });

  const [hasFeedback, setFeedback] = useState(false);

  const updateFeedback = () => {
    if (!hasFeedback) setFeedback(true);
  };

  const getPositivePercent = (stats) => {
    return (stats.good / (stats.good + stats.neutral + stats.bad)) * 100 || 0;
  };

  const getAverage = (stats) => {
    return (
      (stats.good * 1 + stats.neutral * 0 + stats.bad * -1) /
      (stats.good + stats.neutral + stats.bad)
    );
  };

  const getAll = (stats) => {
    return stats.good + stats.neutral + stats.bad;
  };

  const updateStats = (targetStat) => () => {
    const newStats = Object.create(stats);

    newStats[targetStat] = stats[targetStat] + 1;

    newStats.all = getAll(newStats);

    newStats.positive = getPositivePercent(newStats);

    newStats.average = getAverage(newStats);

    setStats(newStats);

    updateFeedback();
  };

  return (
    <>
      <Subtitle text="give feedback" />
      <Button onClick={updateStats("good")} text="good" />
      <Button onClick={updateStats("neutral")} text="neutral" />
      <Button onClick={updateStats("bad")} text="bad" />
      <Subtitle text="statistics" />
      {hasFeedback && <Statistics stats={stats} />}
      {!hasFeedback && <p>No feedback given</p>}
    </>
  );
};

export default App;
