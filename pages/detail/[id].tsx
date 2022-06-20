
import {useRouter} from 'next/router'
import axios from 'axios'

export default function Index({list}) {
  const router=useRouter()

  return (
    <div>
      详情{router.query.id}
      <div>
      {
        list.map((user:any)=>{
          return(
            <li key={user.id}>
              {user.title}
            </li>
          )
        })
      }
    </div>
    </div>
  )
}
export async function getServerSideProps(){
  const result=await axios.get('http://120.76.55.141:3005/products')
  return {
    props:{
      list:result.data
    }
  }
}
