import React from 'react'
import Info from '../Miscellaneous/Info';
import Name from '../Miscellaneous/Name';
import Picture from '../Miscellaneous/Picture';
import Percentage from '../Miscellaneous/Percentage';
import Popularity from '../Miscellaneous/Popularity';
import Votes from '../Miscellaneous/Votes';
import Position from './Position';
import css from './candidate.module.css';

export default function Candidate({
  previousVote,
  previousPercentage,
  candidate,
  position,
}) {
  const { id, name, votes, percentage, popularity } = candidate;

  const imageSource = `${id}.png`;

  return (
    <div className={css.flexRow}>
      <Position>{position}</Position>
      <Picture imageSource={imageSource} description={name} />
      <Info>
        <Name>{name}</Name>

        <Votes value={votes} previous={previousVote} />

        <Percentage value={percentage} previous={previousPercentage}>
          {percentage}
        </Percentage>

        <Popularity value={popularity} />
      </Info>
    </div>
  );
}