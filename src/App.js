import React, { Component } from 'react';
import Notes from './components/Notes'
import 'semantic-ui-css/semantic.min.css'
import './App.css';//引入样式文件

// .vue 三部分：template js style
// react  .js  负责输出一个组件类，使用继承概念
  // template ? jsx语法 render，模板包在组件内部render
class App extends Component {//App继承自Component
  render() {
    return (
      // 负责提供模板
      <Notes />
    );
  }
}

export default App;
