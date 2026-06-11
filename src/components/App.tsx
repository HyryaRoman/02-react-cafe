import { useState } from "react";

import type { Votes, VoteType } from "../types/votes.ts";
import CafeInfo from "./CafeInfo.tsx";
import VoteOptions from "./VoteOptions.tsx";
import VoteStats from "./VoteStats.tsx";
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
      <VoteOptions onVote={handleVote} onReset={resetVotes} canReset={true} />
      <VoteStats votes={votes} totalVotes={0} positiveRate={0} />
    </div>
  );
}

export default App;
