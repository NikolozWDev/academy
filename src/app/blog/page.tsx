import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Get expert insights, practical tips, and strategies to grow your digital marketing agency from the Edutech blog.',
}

export default function BlogPage() {
  const posts = [
    {
      slug: 'blog-chapter1',
      title: "5 Proven Strategies to Increase Your Agency's Lead Generation",
      tag: 'Digital Marketing',
      image: '/goodimage4.png',
    },
    {
      slug: 'blog-chapter2',
      title: 'How to Craft High-Converting Service Pages for Your Agency',
      tag: 'Websites',
      image: '/goodimage5.png',
    },
    {
      slug: 'blog-chapter3',
      title: 'Top Marketing Trends Every Agency Should Watch in 2024',
      tag: 'Trends',
      image: '/goodimage6.png',
    },
    {
      slug: 'blog-chapter4',
      title: 'Why Your Digital Marketing Agency Needs a Blog',
      tag: 'Digital Marketing',
      image: '/goodimage7.png',
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="blog-hero">
        <div className="blog-hero-bg">
          <img src="goodimage.jpg" alt="Blog" />
        </div>
        <div className="blog-hero-content">
          <h1>
            Welcome to the <i className="serif">blog.</i>
          </h1>
          <p>
            Get expert insights, practical tips, and strategies to grow your digital marketing
            agency tailored for ambitious agency owners like you.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="blog-grid-section blog-last-block">
        <div className="section-container">
          <div className="blog-grid">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card">
                <div className="blog-card-image">
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="blog-card-content">
                  <h3>{post.title}</h3>
                  <span className="blog-card-tag">{post.tag}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
