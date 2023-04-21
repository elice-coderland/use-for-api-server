const postBtn = document.getElementById('postBtn');
const cancelBtn = document.getElementById('cancelBtn');
const form = document.getElementById('form-wrapper');

postBtn.addEventListener('click', () => {
  form.style.display = 'block'
});

cancelBtn.addEventListener('click', () => {
  form.style.display = 'none'
})
