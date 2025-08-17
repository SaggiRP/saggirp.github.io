const posts = [
  {
    title: "My First Post",
    date: "April 5, 2025",
    url: "posts/my-first-post.html",
    excerpt: "This is where I began. Simple thoughts, quiet mind."
  },
  {
    title: "Second Thoughts",
    date: "March 28, 2025",
    url: "posts/second-thoughts.html",
    excerpt: "Thinking again. Maybe I was wrong. Or maybe I'm growing."
  },
  {
    title: "By the Time You Learn the Rules, You Don’t Want to Play the Game Anymore",
    date: "March 28, 2025",
    url: "posts/play rules.html",
    excerpt: "There comes a point in life when understanding replaces ambition."
  }

];

function loadPosts() {
  const container = document.getElementById('posts');
  const template = document.getElementById('post-template').innerHTML;

  let html = '';
  posts.forEach(post => {
    let item = template;
    item = item.replace(/{{title}}/g, post.title);
    item = item.replace(/{{date}}/g, post.date);
    item = item.replace(/{{url}}/g, post.url);
    item = item.replace(/{{excerpt}}/g, post.excerpt);
    html += item;
  });

  container.innerHTML = html;
}

document.getElementById('search').addEventListener('input', function (e) {
  const query = e.target.value.toLowerCase();
  const filtered = posts.filter(post =>
    post.title.toLowerCase().includes(query) ||
    post.excerpt.toLowerCase().includes(query)
  );

  const container = document.getElementById('posts');
  if (query && filtered.length === 0) {
    container.innerHTML = '<p>No posts found.</p>';
    return;
  }

  let html = '';
  filtered.forEach(post => {
    let item = document.getElementById('post-template').innerHTML;
    item = item.replace(/{{title}}/g, post.title);
    item = item.replace(/{{date}}/g, post.date);
    item = item.replace(/{{url}}/g, post.url);
    item = item.replace(/{{excerpt}}/g, post.excerpt);
    html += item;
  });
  container.innerHTML = html;
});

loadPosts();
