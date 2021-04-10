import { MovePreview } from '../MovePreview/MovePreview.jsx';
import './MoveList.scss';

export const MoveList = ({ moves, title, isHomePage }) => {
  console.log(moves);
  return (
    <section className='move-list'>
      <h2>{title}</h2>
      <ul className='clean-list'>
        {moves.map((move, idx) => (
          <MovePreview move={move} key={idx} isHomePage={isHomePage}></MovePreview>
        ))}
      </ul>
    </section>
  );
};
