import type { Metadata } from 'next'
import {
  NEXT_PUBLIC_URL,
  NEXT_PUBLIC_SITE_TITLE,
  NEXT_PUBLIC_SITE_DESCRIPTION,
  // NUMBER_OF_POSTS_PER_PAGE,
} from '../server-constants'
import GoogleAnalytics from '../../components/google-analytics'
import {
  // BlogPostLink,
  // BlogTagLink,
  // NextPageLink,
  NoContents,
  // PostDate,
  // PostExcerpt,
  // PostTags,
  // PostTitle,
  // ReadMoreLink,
} from '../../components/blog-parts'
import styles from '../../styles/blog.module.css'
// import {
//   getPosts,
//   getFirstPost,
//   getRankedPosts,
//   getAllTags,
// } from '../../lib/notion/client'
import { getSortedPostsData } from '../../lib/obsidian/post'
import Link from 'next/link'
import obStyles from '../../styles/obsidian/blog.module.css'

export const revalidate = 60

export async function generateMetadata(): Promise<Metadata> {
  const title = `Blog - ${NEXT_PUBLIC_SITE_TITLE}`
  const description = NEXT_PUBLIC_SITE_DESCRIPTION
  const url = NEXT_PUBLIC_URL ? new URL('/blog', NEXT_PUBLIC_URL) : undefined
  const images = NEXT_PUBLIC_URL
    ? [{ url: new URL('/default.png', NEXT_PUBLIC_URL) }]
    : []

  const metadata: Metadata = {
    title: title,
    openGraph: {
      title: title,
      description: description,
      url: url,
      siteName: title,
      type: 'website',
      images: images,
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: images,
    },
    alternates: {
      canonical: url,
    },
  }

  return metadata
}

async function getAllPostsData() {
  const allPostsData = getSortedPostsData()

  return allPostsData
}

const BlogPage = async () => {
  // const [posts, firstPost, rankedPosts, tags] = await Promise.all([
  //   getPosts(NUMBER_OF_POSTS_PER_PAGE),
  //   getFirstPost(),
  //   getRankedPosts(),
  //   getAllTags(),
  // ])
  const allPostsData = await getAllPostsData()

  return (
    <>
      <GoogleAnalytics pageTitle="Blog" />
      <div className={styles.container}>
        <div className={styles.mainContent}>
          <div className={styles.post}>
            <h3>from:Obsidian</h3>
            <ul>
              {allPostsData.map(({ id, date, title }) => (
                <li key={id}>
                  {date}
                  <br />
                  <h3>
                    <Link href={`/blog/obsidian/${id}`}>{title}</Link>
                  </h3>
                </li>
              ))}
            </ul>
            <div className={obStyles.hr}></div>
          </div>
          {/* <NoContents contents={posts} /> */}

          {/* {posts.map((post) => {
            return (
              <div className={styles.post} key={post.Slug}>
                <PostDate post={post} />
                <PostTags post={post} />
                <PostTitle post={post} />
                <PostExcerpt post={post} />
                <ReadMoreLink post={post} />
              </div>
            )
          })} */}

          <footer>
            {/* <NextPageLink firstPost={firstPost} posts={posts} /> */}
          </footer>
        </div>

        <div className={styles.subContent}>
          <p>note数が増えたらコンポネント作る予定</p>
          {/* <BlogPostLink heading="Recommended" posts={rankedPosts} />
          <BlogTagLink heading="Categories" tags={tags} /> */}
        </div>
      </div>
    </>
  )
}

export default BlogPage
