import Link from 'next/link'
import { notFound } from 'next/navigation'
import { blogPosts } from '@/constants/blog'
import type { Metadata } from 'next'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts[slug as keyof typeof blogPosts]
  return {
    title: post?.title || 'Blog Post',
    description: post?.intro?.[0] || 'Read this post on Edutech blog.',
  }
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slug }))
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts[slug as keyof typeof blogPosts]
  if (!post) notFound()

  return (
    <>
      <article className="blog-post-section blog-post-last-block">
        <div className="section-container">
          <div className="blog-post-layout">
            {/* Main Content */}
            <div className="blog-post-main">
              <header className="blog-post-header">
                <span className="blog-post-category">{post.category}</span>
                <h1>{post.title}</h1>
                <div className="blog-post-meta">
                  <div className="blog-post-author">
                    <span>Written by</span>
                    <img src={post.avatar} alt={post.author} className="author-avatar" />
                    <span className="author-name">{post.author}</span>
                  </div>
                  <span className="blog-post-read-time">{post.readTime}</span>
                </div>
              </header>

              <figure className="blog-post-image">
                <img src={post.image} alt={post.title} />
              </figure>

              <div className="blog-post-intro">
                {post.intro.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <nav className="blog-post-toc">
                <h2>In this post:</h2>
                <ol>
                  {post.toc.map((item) => (
                    <li key={item.id}>
                      <a href={`#${item.id}`}>{item.label}</a>
                    </li>
                  ))}
                </ol>
              </nav>

              {post.sections.map((section) => (
                <section key={section.id} id={section.id} className="blog-post-section-content">
                  <h2>{section.title}</h2>
                  {section.content.map((block, i) => {
                    if (block.type === 'h3') return <h3 key={i}>{block.text}</h3>
                    return <p key={i}>{block.text}</p>
                  })}
                </section>
              ))}
            </div>

            {/* Sidebar */}
            <aside className="blog-post-sidebar">
              <div className="sidebar-cta">
                <h3>
                  The truly{' '}
                  <i className="serif">
                    Limit<span className="dim">less</span>
                  </i>{' '}
                  design subscription.
                </h3>
                <p>
                  Say goodbye to expensive freelancers, and hello to limitless, lightning fast
                  design.
                </p>
                <Link href="/book-call" className="btn btn-pill btn-primary btn-sm">
                  Book a call
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </>
  )
}
