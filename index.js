import { showForm, hideForm, renderPosts, editPost } from "./controllers/domControllers.js";
import { createPost, updatePost, deletePost } from "./controllers/apiControllers.js";

document.addEventListener('DOMContentLoaded', () => {
  renderPosts();
});

const postBtn = document.getElementById('postBtn');
const cancelBtn = document.getElementById('cancelBtn');
const form = document.getElementById('form-wrapper');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
})
postBtn.addEventListener('click', () => {
  showForm(form);
});

cancelBtn.addEventListener('click', () => {
  hideForm(form);
})


const submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', () => {
  const title = document.getElementById('form-title').value;
  const content = document.getElementById('form-content').value;

  if (title && content) {
    createPost(title, content)
      .then(() => alert('Sucess!'))
      .then(() => {
        hideForm(form);
        renderPosts();
      });
  }
})

const postsContainer = document.getElementById('posts-container');
postsContainer.addEventListener('click', (event) => {
  // Check if the clicked element is a delete button
  if (event.target.classList.contains('deleteBtn')) {
    const id = event.target.getAttribute('data-id');
    console.log(id)
    deletePost(id)
      .then(() => renderPosts());
  } else if (event.target.classList.contains('updateBtn')) {
    editPost(event);
  } else if (event.target.classList.contains('saveBtn')) {
    const id = event.target.getAttribute('data-id');
    const title = document.querySelector('.edit-title').value;
    const content = document.querySelector('.edit-content').value;
    updatePost(id, title, content)
      .then(() => renderPosts());
  } else if (event.target.classList.contains('undoBtn')) {
    const undoBtn = document.querySelector('.undoBtn');
    undoBtn.addEventListener('click', () => {
      alert('click')
      renderPosts();
    });
  }
});
