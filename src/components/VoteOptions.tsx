import type { VoteType } from "../types/votes.ts";
import css from "./VoteOptions.module.css";

interface VoteOptionsProps {
  onVote: (vote: VoteType) => void;
  onReset: () => void;
  canReset: bool;
}

function VoteOptions(props: VoteOptionsProps) {
  return (
    <div className={css.container}>
      <button
        className={css.button}
        onClick={() => props.onVote("good")}
        disabled={!props.canReset}
      >
        Good
      </button>
      <button
        className={css.button}
        onClick={() => props.onVote("neutral")}
        disabled={!props.canReset}
      >
        Neutral
      </button>
      <button
        className={css.button}
        onClick={() => props.onVote("bad")}
        disabled={!props.canReset}
      >
        Bad
      </button>
      <button
        className={`${css.button} ${css.reset}`}
        onClick={() => props.onReset()}
        disabled={!props.canReset}
      >
        Reset
      </button>
    </div>
  );
}

export default VoteOptions;
