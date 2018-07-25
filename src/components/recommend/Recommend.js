import React, { Component } from 'react';
import { getCarousel } from '@/api/recommend'
import Swiper from 'swiper';
import "swiper/dist/css/swiper.css"
import './recommend.styl';
import { CODE_SUCCESS } from '../../api/config';

class Recommend extends Component {
  constructor (props) {
    super(props);
    this.state = {
      sliderList: []
    }
  }
  componentDidMount () {
    getCarousel().then(res => {
      console.log(res);
      if(res.code === CODE_SUCCESS) {//CODE_SUCCESS为请求处理状态声明的一个常量
        this.setState({
          sliderList: res.data.slider
        }, () => {
          new Swiper('.slider-container', {
            loop: true,
            autoplay: 3000,
            autoplayDisableOnInteraction: false,
            pagination: '.swiper-pagination'
          })
        })
      }
    })
  }
  render () {
    return (
      <div className="music-recommend">
        <div className="slider-container">
          <div className="swiper-wrapper">
            {
              this.state.sliderList.map(slider => {//每个slider都负责返回一项数据(循环输出)
                return (
                  <div className="swiper-slide" key={slider.id}>
                    <a href="" className="slider-nav">
                      <img src={slider.picUrl} width="100%" height="100%" alt="推荐"/>
                    </a>
                  </div>
                )
              })
            }
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    )
  }
}

export default Recommend;