import { NextPage } from 'next'
import { getAllPostIds, getPostData } from '../../../../lib/obsidian/post'
type PostData = {
  title: string
  id: string
  date: string
}

type PostProps = {
  postData: PostData
}

export const revalidate = 30

export async function generateStaticParams() {
  const paths = getAllPostIds()

  return paths
}

export async function getPost(params: { id: string }): Promise<PostData> {
  const postData = await getPostData(params.id)
  return postData
}

const Post: NextPage<PostProps> = ({ postData }) => {
  return (
    <>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
    </>
  )
}

export default async function ({ params }) {
  // const params = { id: 'first-post' }
  const postData = await getPost(params)
  return <Post postData={postData} />
}
