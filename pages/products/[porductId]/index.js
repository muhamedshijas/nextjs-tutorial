import { useRouter } from "next/router"

function productDetials(){
    const router= useRouter()
    const id=router.query.porductId
return <>
<h1>product detials {id}</h1>
</>
}
export default productDetials