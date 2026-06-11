import { useState } from "react";

import type { Votes, VoteType } from "../types/votes.ts";
import CafeInfo from "./CafeInfo.tsx";
import css from "./App.module.css";

function App() {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  function handleVote(type: VoteType) {
    setVotes({
      ...votes,
      [type]: votes[type] + 1,
    });
  }

  function resetVotes() {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  }

  return (
    <div className={css.app}>
      <CafeInfo />
    </div>
  );
}

export default App;
