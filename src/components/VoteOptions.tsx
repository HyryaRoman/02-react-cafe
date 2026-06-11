import type { VoteType } from "../types/votes.ts";
import css from "./VoteOptions.module.css";

interface VoteOptionsProps {
  onVote: (vote: VoteType) => void;
  onReset: () => void;
  canReset: boolean;
}

function VoteOptions(props: VoteOptionsProps) {
  return (
    <div className={css.container}>
      <button className={css.button} onClick={() => props.onVote("good")}>
        Good
      </button>
      <button className={css.button} onClick={() => props.onVote("neutral")}>
        Neutral
      </button>
      <button className={css.button} onClick={() => props.onVote("bad")}>
        Bad
      </button>
      {props.canReset && (
        <button
          className={`${css.button} ${css.reset}`}
          onClick={() => props.onReset()}
        >
          Reset
        </button>
      )}
    </div>
  );
}

export default VoteOptions;
