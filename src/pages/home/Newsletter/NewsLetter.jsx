
const NewsLetter = () => {
  return (
    <div
  className="hero min-h-[calc(100dvh-200px)] "
  style={{
    backgroundImage: "url(https://i.postimg.cc/2yvw21z6/email-network-communication-perforated-paper-sign.jpg)",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
          <section >
    
      <h1 className='text-4xl font-black'>Subscribe to Travel Vista! </h1>
      <form className="card-body">
      <div className="join">
        <input
          type="text"
          placeholder="username@site.com"
          className="input input-bordered join-item" />
        <button className="btn btn-primary join-item">Subscribe</button>
      </div>
      </form>
    </section>
  </div>
</div>

  );
};

export default NewsLetter;