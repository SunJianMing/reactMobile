import React from 'react'
import {Link} from 'react-router-dom'
import S from './style.scss'


export default class Header extends React.Component {
  render(){
    let {menu,back,login} = this.props;
    return (
      <div className={S.header}>
        {menu?(<a href="Javascript:;" className={`${S.header_btn_left} iconfont icon-hycaidan`}></a>):null}

        {login?(  <Link to='/' className={`${S.header_btn_right} iconfont icon-login_user`}/>):null}

          {back?(<a href="Javascript:;" className={`${S.header_btn_left} iconfont icon-back`}></a>):null}
        {/* <Link to='/' className={`${S.header_btn_right} ${S.header_user}`}>miaovmiaov</Link> */}
        <img src={require('./img/logo.png')} alt="" className={S.logo} />

      </div>
    )
  }
}
