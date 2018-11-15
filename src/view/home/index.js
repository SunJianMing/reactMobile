import React,{Component} from 'react'
import Header from 'layout/header'
import Footer from 'layout/footer'

export default class Home extends Component {
  render(){
    return (
        <div className="clear">
          <Header {...{
            menu:true,
            login:true
          }}/>
          <Footer></Footer>
        </div>
    )
  }
}
