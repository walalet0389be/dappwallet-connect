<script>

onst content = document.querySelector('#content');
content.style.transformOrigin = 'top left';

window.addEventListener('resize', recalculateScale);

function recalculateScale() {
  const windowHeight = window.innerHeight;
  content.style.transform = `scale(${windowHeight / content.offsetHeight})`;
}

recalculateScale();
</script>