const Post = ({ posts }) => {
  return (
    <div>
      <main>
        {posts.map((post) => {
          return (
            <section className="post" key={post.id}>
              <h1 className="post-title">{post.title}</h1>
              <div>
                <h3>{post.userId}</h3>
                <p className="post-body">{post.body}</p>
              </div>
            </section>
          );
        })}
      </main>
    </div>
  );
};

export default Post;
