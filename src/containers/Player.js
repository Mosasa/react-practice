// import React, { Component } from 'react';
import { connect } from 'react-redux';
import Player from '../components/play/Player';
import { changeSong } from '../redux/action';//引入actions文件中定义的changeSong()方法

const mapStateToProps = (state) => ({
  currentSong: state.song,//左边为定义名(当前播放)，右边为要取出的数据名
  playSongs: state.songs//左边为定义名(播放总列表)，右边为要取出的数据名
})

const MapDispatchToProps = (dispatch) => ({
  changeCurrentSong: (song) => {
    dispatch(changeSong(song));//dispatch到actions的方法上
  }
})

// connect的两个参数mapStateToProps、MapDispatchToProps，分别将state、actions传出去
export default connect(mapStateToProps, MapDispatchToProps)(Player);//第二个括号里传入要连接的组件名

