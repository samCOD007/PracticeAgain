// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Example: Load blog posts dynamically
    const posts = [
        {
            title: "First Post",
            content: "This is the content of the first post."
        },
        {
            title: "Second Post",
            content: "This is the content of the second post."
        }
    ];

    const postContainer = document.querySelector('#home .container');

    posts.forEach(post => {
        const article = document.createElement('article');
        article.className = 'post';
        article.innerHTML = `<h2>${post.title}</h2><p>${post.content}</p>`;
        postContainer.appendChild(article);
    });
});
