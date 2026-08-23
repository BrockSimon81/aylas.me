export default function Home() {
  return (
    <main className="shell">
      <section className="hero" aria-labelledby="page-title">
        <div className="sparkle sparkle-one" aria-hidden="true">
          ✦
        </div>
        <div className="sparkle sparkle-two" aria-hidden="true">
          ✦
        </div>
        <p className="eyebrow">A little corner of the internet for</p>
        <h1 id="page-title">Ayla</h1>
        <p className="intro">
          A place for ideas, projects, and whatever comes next.
        </p>
        <div className="status" role="status">
          <span className="status-dot" aria-hidden="true" />
          This site is just getting started
        </div>
      </section>

      <footer>
        <p>Made with care.</p>
        <p className="domain">aylas.me</p>
      </footer>
    </main>
  );
}
