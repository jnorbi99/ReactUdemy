//ourdomain.com/news/something-important
import { useRouter } from 'next/router'

const ImportantPage = () => {
  const router = useRouter()
  const newsId = router.query.newsId

  return <h1>ImportantPage Page</h1>
}

export default ImportantPage
