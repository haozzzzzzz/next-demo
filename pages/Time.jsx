import React, { useState } from 'react'
// import moment from 'moment'
import dynamic from 'next/dynamic'
const DemoA = dynamic(import('./DemoA'))
function Time() {
    const [nowTime, setNowTime] = useState(Date.now())
    const changeTime = async () => {   // 1.把方法变成异步模式
        const moment = await import('moment')  //2.等待moment加载完成
        setNowTime(moment.default(Date.now()).format())  // 3. 使用defalut
    }
    /*
    *缺存在着一个潜在的风险，就是如何有半数以上页面使用了这个momnet的库，那它就会以公共库的形式进行打包发布，
    *就算项目第一个页面不使用moment也会进行加载，这就是资源浪费，
    */
    return (
        <>
            <DemoA/>
            <div>显示时间为：{nowTime}</div>
            <button onClick={changeTime}>改变时间格式</button>
        </>
    )
}

export default Time