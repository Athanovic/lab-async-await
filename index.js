// API URL
const API_URL = "https://jsonplaceholder.typicode.com/posts";

// Function to display posts
function displayPosts(posts) {
  const postList = document.getElementById("post-list");

  // Clear existing posts
  postList.innerHTML = "";

  // Loop through posts
  posts.forEach(post => {
    // Create elements
    const li = document.createElement("li");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");

    // Add text content
    h1.textContent = post.title;
    p.textContent = post.body;

    // Append elements
    li.appendChild(h1);
    li.appendChild(p);
    postList.appendChild(li);
  });
}

// Async function to fetch posts
async function fetchPosts() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    // Display fetched posts
    displayPosts(data);
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}

// Call the function
fetchPosts();
