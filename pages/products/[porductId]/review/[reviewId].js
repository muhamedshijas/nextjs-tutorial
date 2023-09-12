import { useRouter } from "next/router"

function Review(){
    const router=useRouter()
    console.log(router.query)
    const {porductId, reviewId}=router.query

    return<>
    <h1>product {porductId} </h1>
    <h2>Review {reviewId}</h2>
    </>
}

export default Review