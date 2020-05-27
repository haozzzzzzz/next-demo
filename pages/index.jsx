import Head from 'next/head'
import Hello from './hello'
import React, { useState } from 'react'
import Link from 'next/link'
import Router from 'next/router'
import './../../static/test.css'
const Home = () => {

  function gotoA() {
    Router.push('/TestA')
  }
  function gotoC() {
    Router.push({
      pathname: '/TestC',
      query: {
        name: '测试大师-李小龙?'
      }
    })
  }
  const [color, setColor] = useState('blue')
  const changeColor = () => {
    setColor(color == 'blue' ? 'red' : 'blue')
  }
  Router.events.on('routeChangeStart', (...args) => {
    console.log('1.routeChangeStart->路由开始变化,参数为:', ...args)
  })

  Router.events.on('routeChangeComplete', (...args) => {
    console.log('2.routeChangeComplete->路由结束变化,参数为:', ...args)
  })

  Router.events.on('beforeHistoryChange', (...args) => {
    console.log('3,beforeHistoryChange->在改变浏览器 history之前触发,参数为:', ...args)
  })

  Router.events.on('routeChangeError', (...args) => {
    console.log('4,routeChangeError->跳转发生错误,参数为:', ...args)
  })

  Router.events.on('hashChangeStart', (...args) => {
    console.log('5,hashChangeStart->hash跳转开始时执行,参数为:', ...args)
  })

  Router.events.on('hashChangeComplete', (...args) => {
    console.log('6,hashChangeComplete->hash跳转完成时,参数为:', ...args)
  })
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div>
          我是首页
        </div>
        <div>
          <button onClick={gotoA}>测试A</button>
        </div>
        <div>
          <Link href="/TestB"><a><span>去测试B</span></a></Link>
        </div>

        <div>
          {/* <Link href="/TestC?name=宗师叶问"><a><span>去测试c</span></a></Link> */}
          <button onClick={gotoC}>测试C</button>
        </div>
        <div>
          <Link href="#TestB"><a><span>去测试D</span></a></Link>
        </div>
      </div>
      <style jsx>
        {`
          div{color:red;},
          button{color:${color}}
          `}
      </style>
      <div>
        <button onClick={changeColor}>测试按钮</button>
      </div>
      <main>
        <Hello child="按钮测试"></Hello >
      </main>
    </div>
  )
}
export default Home
