var posts=["2025/01/02/hello-world/","2025/02/26/第一篇博客/","2025/02/27/markdown语法总结/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };