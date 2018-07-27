import { connect } from 'react-redux';
import { showPlayer, changeSong, setSongs } from '@/redux/action.js';
import Album from '../components/album/Album' ;

const mapDispatchToProps = (dispatch) => ({
  changeCurrentSong: (song) => {
    dispatch(changeSong(song));//只有dispatch才能执行redux里面actions里的方法
  },
  setSongs: (songs) => {
    dispatch(setSongs(songs))
  },
  showMusicPlayer: (status) => {
    dispatch(showPlayer(status))
  }
})

export default connect(null, mapDispatchToProps)(Album);