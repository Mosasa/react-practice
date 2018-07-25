import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import BScroll from 'better-scroll';
import './scroll.styl';

class Scroll extends Component {
  componentDidUpdate () {
    //组件更新后
    if(this.bScroll && this.props.refresh === true) {
      this.bScroll.refresh();
    }
  }
  componentWillUnmount () {//在进行路由(页面)切换卸载组件之前
    this.bScroll.off('scroll');//取消scroll事件
    this.bScroll = null;//完成垃圾回收
  }
  componentDidMount () {
    this.scrollView = ReactDOM.findDOMNode(this.refs.scrollView);//refs指定结点
    if(!this.bScroll) {
      this.bScroll = new BScroll(this.scrollView, {
        probeType: 3,
        click: this.props.click
      });
      if(this.props.onScroll) {
        this.bScroll.on('scroll', (scroll) => {
          this.props.onScroll(scroll);
        })
      }
    }
  }
  refresh() {
    if(this.bScroll) {
      this.bScroll.refresh();
    }
  }
  render () {
    return (
      <div className="scroll-view" ref="scrollView">
        {/* ref钩子 better-scroll可以定义需要滚动的区域 */}
        {this.props.children}
      </div>
    )
  }
}

Scroll.defaultProps = {//Scroll对外界传参使用的默认值
  click: true,
  refresh: false,
  onScroll: null,
}
Scroll.propTypes = {
  click: PropTypes.bool,
  refresh: PropTypes.bool,
  onScroll: PropTypes.func
}

export default Scroll;