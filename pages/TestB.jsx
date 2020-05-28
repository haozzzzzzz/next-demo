import Link from 'next/link'
import { Button } from 'antd'
export default () => {
    return (
        <>
            <div>
                测试B页面的数据
                <Button>B页面</Button>
            </div>
            <Link href="/"><a>返回首页</a></Link>
        </>
    )
}