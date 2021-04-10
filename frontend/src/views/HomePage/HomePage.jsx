import { Component } from 'react';
import { connect } from 'react-redux';
import { bitcoinService } from '../../services/bitcoinService.js';
import { setUser } from '../../store/actions/userActions.js';
import { MoveList } from '../../cmps/MoveList/MoveList.jsx';
import { Line } from 'react-chartjs-2';

import './HomePage.scss';

class _HomePage extends Component {
  state = {
    bitcoinRate: null,
  };

  async componentDidMount() {
    await this.props.setUser();
    const bitcoinRate = await bitcoinService.getRate(this.props.user.coins);
    this.setState({ bitcoinRate });
  }

  render() {
    const { user } = this.props;
    if (!user) return <div>Loading...</div>;
    return (
      <section className='flex justify-center bgc-img main-layout home-page'>
        <div className='flex column align-center home-page-content'>
          <h1>Hello, {user.username}!</h1>
          <div className='flex align-center container'>
            <img alt='' src={require('../../assets/img/coins.png').default} />
            <p>
              Coins: <span>{user.coins}</span>
            </p>
          </div>
          <div className='flex align-center container'>
            <img alt='' src={require('../../assets/img/bitcoin.png').default} />
            <p>
              BTC: <span>{this.state.bitcoinRate}</span>
            </p>
          </div>
        </div>
        {user.moves && user.moves.length > 0 && (
          <MoveList moves={user.moves.slice(0, 3)} title='Your last 3 moves:' isHomePage={true}></MoveList>
        )}
        <div className='flex justify-center align-start user-stat'>
          <div style={{ backgroundColor: '#ED6694' }} className='flex column justify-center align-center'>
            <p>Transactions</p>
            <p>{user.moves.length}</p>
          </div>
          <div style={{ backgroundColor: '#6268F2' }} className='flex column justify-center align-center'>
            <p>Coins Spent</p>
            <p>{100 - user.coins}</p>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.userReducer.user,
});

const mapDispatchToProps = {
  setUser,
};

export const HomePage = connect(mapStateToProps, mapDispatchToProps)(_HomePage);
