import React, { Component } from 'react';
import './album.styl';
import { CSSTransition } from 'react-transition-group';
import { getAlbumInfo } from '@/api/recommend';
// import { CODE_SUCCESS } from '@/api/config';
import Header from '@/common/header/Header.js';
import * as AlbumModel from '@/model/album';
import * as SongModel from '@/model/song'
import Loading from '@/common/loading/Loading';
import { CODE_SUCCESS } from '../../api/config';

class Album extends Component {
  constructor(props) {//constructor()在生成时执行
    super(props);//将父组件的构造函数实现一下
    this.state = {
      show: false,
      album: null,
      loading: true
    }
  }
  componentDidMount () {//componentDidMount ()在挂载后执行
    this.setState({
      show: true
    });
    getAlbumInfo(this.props.match.params.id).then(res => {
      console.log('已获取专辑💽');
      if(res.code === CODE_SUCCESS) {
        let album = AlbumModel.createAlbumByDetail(res.data);
        album.desc = res.data.desc;

        let songList = res.data.list;
        let songs = [];
        songList.forEach(item => {
          let song = SongModel.createSong(item);
          return song;
        })
        this.setState({
          album: album,
          songs: songList,
          loading: false
        })
      }
    })
  }
  render () {
    // let album = this.state.album
    return (
      <CSSTransition in={this.state.show} timeout={300} classNames="translate">
        <div className="music-album">
          <Header title="周杰伦" ref="header" >
          <div style={{position:"relative"}}>
                    <div ref="albumBg" className="album-img" >
                        <div className="filter"></div>
                    </div>
                    <div ref="albumFixedBg" className="album-img fixed" >
                        <div className="filter"></div>
                    </div>
                    <div className="play-wrapper" ref="playButtonWrapper">
                        <div className="play-button" onClick={this.playAll}>
                            <i className="icon-play"></i>
                            <span>播放全部</span>
                        </div>
                    </div>
                </div>
          </Header>
          <Loading title="正在加载中..." show={this.state.loading}></Loading>
        </div>
      </CSSTransition>
    )
  }
}

export default Album