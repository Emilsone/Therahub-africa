const about = document.querySelector('#media-section');
const buttons = document.querySelectorAll ('.tab-btn');
const contents = document.querySelectorAll('.contain-flex');

about.addEventListener('click', function(e){
  e.preventDefault();
  const id = e.target.dataset.id;
  if(id) {
    //remove active from all btns
    buttons.forEach(function(btn) {
      btn.classList.remove('active');
      e.target.classList.add ('active');
    });
    //hide th articles
    contents.forEach(function(content) {
      content.classList.remove ('show');
    });
    let content = document.getElementById(id);
    console.log(content)
    content.classList.add('show');
  }
});