
import {useRouter} from 'next/router'
import {Button} from 'antd'
import Head from 'next/head'
export default function Index({list}) {
  const router=useRouter()
  const getDetail=()=>{
    router.push('/detail/'+router.query.id)
  }
  return (
    <div>
      <Head>
        <title>
          内容{router.query.id}
        </title>
      </Head>
      内容{router.query.id}
      name:{list.find((item=>item.id==router.query.id)).name}
      <Button type="primary" onClick={getDetail}>详情</Button> 
    </div>
  )
}
export async function getStaticPaths(){
  return {
    paths:[
      //一一对应路径,超过就不显示了
      {params:{id:'1'}},
      {params:{id:'2'}},
      {params:{id:'3'}},
      {params:{id:'4'}},
    ],
    fallback:false
  }

}
export async function getStaticProps(){
debugger
   return {
     props:{
       list:[
         {id:1,name:'xu1'},
         {id:2,name:'xu2'},
         {id:3,name:'xu3'},
         {id:4,name:'xu4'},
       ]
     }
   }
}