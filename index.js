import { showForm, hideForm } from "./controllers/domControllers.js";

const postBtn = document.getElementById('postBtn');
const cancelBtn = document.getElementById('cancelBtn');
const form = document.getElementById('form-wrapper');

postBtn.addEventListener('click', () => {
  showForm(form);
});

cancelBtn.addEventListener('click', () => {
  hideForm(form)
})
