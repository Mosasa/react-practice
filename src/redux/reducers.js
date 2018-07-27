import { combineReducers } from 'redux'
import * as ActionTypes from './actionTypes'

const initialState = {//定义组件依赖的状态，可用于多个组件
  song: {},
  songs: [],//当一首歌song(一个状态))播放到结束时，要从songs里取出另一首歌(另一个状态)
  showStatus: false,//播放列表是否弹出
}

function song(song = initialState.song, action) {
  switch(action.type) {
    case ActionTypes.CHANGE_SONG://actions里触发ActionTypes.CHANGE_SONG，返回action.song
      return action.song
    default: 
      return song
  }
}

function songs(songs = initialState.songs, action) {
  switch(action.type) {
    case ActionTypes.SET_SONGS://每个case代表一个action被触发，action触发后自动来到reducer，action定义方法里的type参数会与reducer里的type相匹配
      return action.songs;//来自action里的songs参数(一个状态)
    case ActionTypes.REMOVE_SONG_FROM_LIST:
      return songs.filter(song => song.id !== action.id);
    default: 
      return songs
  }
}

function showStatus(showStatus = initialState.showStatus, action) {
  switch (action.type) {
    case ActionTypes.SHOW_PLAYER:
      return action.showStatus
    default:
      return showStatus
  }
}



const reducer = combineReducers({//把一个由多个不同reducer函数作为value的object，合并成一个最终的reducer函数，然后就可以对这个reducer调用createStore。
  song,
  songs,
  showStatus
})//将reducer需要的数据都combine起来

export default reducer