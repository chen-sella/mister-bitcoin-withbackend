import './TransferFund.scss';

export const TransferFund = (props) => {

  return (
    <div className='transfer-fund'>
      <h3>Transfer coins to {props.name}</h3>
      <form onSubmit={props.onTransferCoins}>
        <label htmlFor='amount'>Amount:</label>
        <input type='number' name='amount' id='amount' onChange={props.handleChange}/>
        <button><img src={require('../../assets/icons/transfer/1x/baseline_east_black_24dp.png').default} alt=''/></button>
      </form>
    </div>
  );
};
