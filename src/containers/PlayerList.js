import { connect } from 'react-redux';
import PlayerList from '../components/play/PlayerList';
import { changeSong } from '../redux/action';

const mapStateToProps = (state) => ({
  currentSong: state.song,//左边为定义名(当前播放)，右边为要取出的数据名
  playSongs: state.songs//左边为定义名(播放总列表)，右边为要取出的数据名
})

const mapDispatchToProps = (dispatch) => ({
  changeCurrentSong: (song) => {
    dispatch(changeSong(song));//dispatch到actions的方法上
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(PlayerList);//第二个括号里传入要连接的组件名

