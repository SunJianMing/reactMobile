import React,{Component} from 'react'
import S from './style.scss'
export default function(){
  return (
    <footer>
        <div className={S.footer_nav}>
          <p className={`${S.footer_content} ${S.clear}`}>
            <a href="maillto:18273965210@163.com" className='iconfont icon-youxiang'>xxxxxx@163.com</a>
            <a href="tel:18273965210@163" className='iconfont icon-icon-'>18273965210</a>
          </p>
          <nav className={S.clear}>
              <a href="https://">首页</a>
              <a href="https://">课程安排</a>
              <a href="https://">学员作品</a>
              <a href="https://">视频教学</a>
              <a href="https://">关于我们</a>
              <a href="https://">在线留言</a>
              <a href="https://">常见问题</a>
          </nav>
        </div>
        <p className={S.footer_copy}>版权所有</p>
    </footer>
  )
}
