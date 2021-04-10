import './MovePreview.scss';

export const MovePreview = ({move, isHomePage}) => {
  return (
    <li className='move-preview'>
      {isHomePage && <p>To: {move.to}</p>}
      <p>At: {new Date(move.at).toLocaleDateString()}</p>
      <p>Amount: {move.amount} coins</p>
    </li>
  );
};
