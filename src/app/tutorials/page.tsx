import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tutorials',
  description:
    'Launch your website effortlessly with our complimentary 8-part video tutorial series for Edutech.',
}

const tutorials = [
  {
    id: '01',
    title: 'Editing Navigation Menu',
    desc: 'In this tutorial, we will cover how to edit the navigation menu for both desktop and mobile and edit elements such as logo, links & buttons.',
    next: '#tutorial-02',
    nextLabel: 'Next Tutorial',
    video: 'https://vz-ef2f768d-ab6.b-cdn.net/a3594aa1-cdf1-42d6-ab40-a521d40598ae/play_720p.mp4',
    poster:
      'https://vz-ef2f768d-ab6.b-cdn.net/a3594aa1-cdf1-42d6-ab40-a521d40598ae/thumbnail_db519253.jpg',
  },
  {
    id: '02',
    title: 'Editing Text & Colours',
    desc: 'In this tutorial, we will cover how to edit text components, change fonts, sizing and how colour styles work and how to edit them.',
    next: '#tutorial-03',
    nextLabel: 'Next Tutorial',
    video: 'https://vz-ef2f768d-ab6.b-cdn.net/49242d28-ba7a-401a-903d-cb45208f9197/play_720p.mp4',
    poster:
      'https://vz-ef2f768d-ab6.b-cdn.net/49242d28-ba7a-401a-903d-cb45208f9197/thumbnail_704f598a.jpg',
  },
  {
    id: '03',
    title: 'Editing Content & Components',
    desc: 'In this tutorial, we will cover how to edit content such as videos & images as well as editing components such as icons, tickers and more.',
    next: '#tutorial-04',
    nextLabel: 'Next Tutorial',
    video: 'https://vz-ef2f768d-ab6.b-cdn.net/b505f952-c12d-40bd-897a-ee9c44747f85/play_720p.mp4',
    poster: 'https://vz-ef2f768d-ab6.b-cdn.net/b505f952-c12d-40bd-897a-ee9c44747f85/thumbnail.jpg',
  },
  {
    id: '04',
    title: 'Editing Pricing Table',
    desc: 'In this tutorial, we will cover how to edit the pricing table including how many spots left, pricing, add-ons, and features.',
    next: '#tutorial-05',
    nextLabel: 'Next Tutorial',
    video: 'https://vz-ef2f768d-ab6.b-cdn.net/2b15b112-670a-4f68-81ef-3cdd5ccb8b7b/play_720p.mp4',
    poster: 'https://vz-ef2f768d-ab6.b-cdn.net/2b15b112-670a-4f68-81ef-3cdd5ccb8b7b/thumbnail.jpg',
  },
  {
    id: '05',
    title: 'Editing FAQ',
    desc: 'In this tutorial, we will cover how to edit the FAQ including editing, adding and removing questions.',
    next: '#tutorial-06',
    nextLabel: 'Next Tutorial',
    video: 'https://vz-ef2f768d-ab6.b-cdn.net/9cfa1032-a5a9-4d53-8e34-d253dc8a189c/play_720p.mp4',
    poster: 'https://vz-ef2f768d-ab6.b-cdn.net/9cfa1032-a5a9-4d53-8e34-d253dc8a189c/thumbnail.jpg',
  },
  {
    id: '06',
    title: 'Editing Footer',
    desc: 'In this tutorial, we will cover how to edit the Footer including how to edit the badge, text, buttons and links.',
    next: '#tutorial-07',
    nextLabel: 'Next Tutorial',
    video: 'https://vz-ef2f768d-ab6.b-cdn.net/8db9196c-c5ea-4fb5-b375-d820567d9f9f/play_720p.mp4',
    poster: 'https://vz-ef2f768d-ab6.b-cdn.net/8db9196c-c5ea-4fb5-b375-d820567d9f9f/thumbnail.jpg',
  },
  {
    id: '07',
    title: 'Editing SEO & Site Settings',
    desc: 'In this tutorial, we will cover how to edit SEO metadata, and go over Site Settings including analytics and plans.',
    next: '#tutorial-08',
    nextLabel: 'Next Tutorial',
    video: 'https://vz-ef2f768d-ab6.b-cdn.net/694f78c1-a563-424a-a4da-2f39691d5ac0/play_720p.mp4',
    poster: 'https://vz-ef2f768d-ab6.b-cdn.net/694f78c1-a563-424a-a4da-2f39691d5ac0/thumbnail.jpg',
  },
  {
    id: '08',
    title: 'Enabling Staging & Versions',
    desc: 'In this tutorial, we will cover how to enable staging & versions so that you can go restore your site in case you make a mistake.',
    next: '/book-call',
    nextLabel: 'Book a call',
    video: 'https://vz-ef2f768d-ab6.b-cdn.net/a3594aa1-cdf1-42d6-ab40-a521d40598ae/play_720p.mp4',
    poster:
      'https://vz-ef2f768d-ab6.b-cdn.net/a3594aa1-cdf1-42d6-ab40-a521d40598ae/thumbnail_db519253.jpg',
  },
]

export default function TutorialsPage() {
  return (
    <>
      {/* Hero */}
      <section className="tutorials-hero">
        <div className="tutorials-hero-bg">
          <img src="/goodimage.jpg" alt="Tutorials" />
        </div>
        <div className="tutorials-hero-content">
          <div className="status-badge" style={{ marginBottom: 16 }}>
            <i className="serif">
              Limit<span className="dim">less</span>
            </i>{' '}
            Tutorials
          </div>
          <h1>
            Launch your website, <i className="serif">effortlessly.</i>
          </h1>
          <p>
            Limitless comes with a complimentary 8-part video tutorial series to help you get set up
            and customise your template.
          </p>
        </div>
      </section>

      {/* Tutorial List */}
      <section className="tutorial-list-section tutorials-last-block">
        <div className="section-container">
          <div className="tutorial-list">
            {tutorials.map((tutorial) => (
              <div key={tutorial.id} className="tutorial-item" id={`tutorial-${tutorial.id}`}>
                <div className="tutorial-item-content">
                  <span className="tutorial-badge">Tutorial {tutorial.id}</span>
                  <h3>{tutorial.title}</h3>
                  <p>{tutorial.desc}</p>
                  <a href={tutorial.next} className="btn btn-pill btn-primary btn-sm">
                    {tutorial.nextLabel}
                  </a>
                </div>
                <div className="tutorial-item-video">
                  <video
                    src={tutorial.video}
                    poster={tutorial.poster}
                    controls
                    preload="metadata"
                    playsInline
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
