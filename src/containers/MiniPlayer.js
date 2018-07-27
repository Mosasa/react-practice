// import React, { Component } from 'react';
import MiniPlayer from '../components/play/MiniPlayer';
import { connect } from 'react-redux';
import { changeSong } from '../redux/action';

const mapStateToProps = (state) => ({
  currentSong: state.song,
  playSongs: state.songs
})
const mapDispatchToProps = (dispatch) => ({//该方法用来修改状态
  changeCurrentSong: (song) => {//会接收外界传过来的参数song
    dispatch(changeSong(song));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(MiniPlayer);//将state映射过来变成props属性