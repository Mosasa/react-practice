import React, { Component } from 'react';
import Player from '@/containers/Player';//当前播放(状态) -> 该组件里包括当前播放歌曲的歌名、歌手等一系列数据信息
import PlayerList from '@/containers/PlayerList'//播放列表 -> 该组件里包括多个Player

class MusicPlayer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      currentSongIndex: 0,//由Player与PlayerList的父组件统一管理currentSongIndex
      show: false
    }
  }
  render () {
    return (
      <div className="music-player">
        <Player currentIndex={this.state.currentSongIndex}></Player>
        <PlayerList currentIndex={this.state.currentSongIndex}></PlayerList>
      </div>
    )
  }
}

export default MusicPlayer