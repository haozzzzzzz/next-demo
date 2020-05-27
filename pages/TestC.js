
import { withRouter } from 'next/router'
import Link from 'next/link'
import axios from 'axios'
const TestC = ({ router, data }) => {
    console.log(data);

    return (
        <>
            <div>
                {router.query.name},是真的厉害呀！
            </div>   
            <Link href="/"><a>返回首页</a></Link>
        </>
    )
}
TestC.getInitialProps = async () => {
    const promise = new Promise((resolve) => {
        axios.get('http://rap2.taobao.org:38080/app/mock/242751/movielistinfo').then((res) => {
            console.log(res);
            resolve(res.data)
        })
    })
    return await promise
}
export default withRouter(TestC)