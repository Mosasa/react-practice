import React, { Component } from 'react'
import Note from './Note'

class Notes extends Component {
  // state => vue data
  state = {
    entities : [
      '邪不压正，如何？',
      '我不是药神， 印度什么药都有'
    ]
  }
  createEntry () {
    console.log(this.state.entities)
  }
  destoryEntity (entity) {
    console.log(entity);
  }
  render () {
    // react 独有的JSX 模板引擎
    // 在 js 里直接写 html => jsx
    // class 是 js的关键字
    const entities = this.state.entities;
    const noteItems = entities.map((entity, index) => 
      <Note key={index} entity={entity}  destoryEntity={ this.destoryEntity }/>
    )
    // console.log(noteItems);
    return (
     
      <div className="ui container notes">
        <h4 className="ui horizontal divider header">
          <i className="paw icon">
          </i>
          Notes App_React.js
        </h4>
        <button className="ui divided items" onClick={ this.createEntry.bind(this) }>
          添加笔记
        </button>
        <div className="ui divided items">
          {
            // js数组.map => jsx数组
            //自动将jsx数组在当前占位符中输出
            noteItems
          }
          {!this.state.entities.length && <span className="ui small disabled header">还没有笔记，请先添加</span>}
        </div>
      </div>
    )
  }
}

export default Notes