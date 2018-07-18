import React from 'react';
// react 模板编译，有一个专门的库， 就是 react-dom
import ReactDOM from 'react-dom';
import './index.css';//全局样式文件
import 'semantic-ui-css/semantic.min.css' 
import App from './App';//引入根组件
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
