const URL = {//负责管理url接口地址的管理
  carousel: 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg',
  newalbum: 'https://u.y.qq.com/cgi-bin/musicu.fcg'
}

const PARAM = {//在请求接口时有时需要带上参数
  format: 'jsonp',
  inCharset: 'utf-8',
  outCharset: 'utf-8',
  notice: 0
}
const OPTION = {
  prefix: "callback",
  param: "jsonpCallback",
}
const CODE_SUCCESS = 0;//用于请求响应后成功响应的返回值

export { URL, PARAM, OPTION, CODE_SUCCESS }