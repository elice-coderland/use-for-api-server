const postBtn = document.getElementById('postBtn');
postBtn.addEventListener('click', () => {
  form.style.display = 'block';
})
const cancelBtn = document.querySelector('#cancelBtn');
cancelBtn.addEventListener('click', () => {
  form.style.display = 'none';
})



const form = document.querySelector('#form-wrapper');

const getAllPosts = () => {
  fetch('http://localhost:8080/posts')
    .then((res) => res.json())
    .then((posts) => posts.forEach((post) => {
      const postingArea = document.getElementById('posts-container');
      const postId = post._id;
      postingArea.innerHTML += `<div class="post-item" data-id=${postId}>
      <h2>${post.title}</h2>
      <p>${post.content}</p>
      <div class="detailBtn">
        <button class="updateBtn">수정</button>
        <button class="deleteBtn" data-id="${postId}">삭제</button>
      </div>
    </div>`;

    const deleteBtns = document.querySelectorAll('.deleteBtn');
console.log(deleteBtns);
deleteBtns.forEach(deleteBtn => {
  deleteBtn.addEventListener('click', (e) => {
    console.log('Delete button clicked');
  });
});

    }));
}



const submitBtn = document.querySelector('#submitBtn');
submitBtn.addEventListener('click', () => {
  const title = document.getElementById('form-title').value;
  const content = document.getElementById('form-content').value;
  console.log(title, content);

  fetch('http://localhost:8080/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title,
      content
    })
  })
  .then((response) => {
    if (response.ok) {
      location.reload();
    }
    throw new Error('Network response was not ok.');
  })
  .catch((error) => console.error('Error:', error))
  .then(() => location.reload())
})


const updateBtns = document.querySelectorAll('.updateBtn');

const update = (updateBtns) => {
  updateBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const postId = e.target.dataset.id;
      const postItem = document.querySelector(`.post-item[data-id="${postId}"]`);
      postItem.innerHTML = `<div class="post-item" data-id=${postId}>
      <input class="edit-title" value="${post.title}">
      <p><textarea class="edit-content" value=${post.content}></textarea></p>
      <div class="detailBtn">
        <button class="saveBtn" data-id=${postId}>수정</button>
        <button class="cancelBtn">취소</button>
      </div>
    </div>`;
    })
  })
}
const saveBtn = documnet.querySelector('.saveBtn');
saveBtn.addEventListener('click', () => {
  const id = document.querySelector(`.post-item[data-id="${postId}"]`)
  const editTitle = document.querySelector('.edit-title').value;
  const editContent = document.querySelector('.edit-content').value;
  fetch(`http://localhost:8080/posts/${postId}`)
})

document.addEventListener('DOMContentLoaded', function() {
  getAllPosts();
  const deleteBtns = document.querySelectorAll('.deleteBtn');
  deleteBtns.forEach(deleteBtn => {
    deleteBtn.addEventListener('click', (e) => {
      console.log('Delete button clicked');
    });
  });
});
// const updateBtn = document.querySelector('.updateBtn');
// const deleteBtn = document.querySelector('.deleteBtn');

// updateBtn,addEventListener('click', (e))

