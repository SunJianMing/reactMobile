import React from 'react'
import {Link} from 'react-router-dom'
import S from './style.scss'
export default function (){
  return (
    <nav className={S.menu}>
      <Link to="/">首页</Link>
      <Link to="/course">讲师团队</Link>
      <Link to="/lecturer">课程安排</Link>
    </nav>
  )
}
