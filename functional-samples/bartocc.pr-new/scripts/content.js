const badge = document.createElement('a');
badge.textContent = `Go to pr.new`;
badge.classList.add("btn", "ml-2", "d-none", "d-md-block")

badge.href = document.location.href.replace("github.com", "pr.new/github.com")
badge.target = "_blank"

const heading = document.getElementsByClassName('AppHeader-context-full')[0];

if (heading) {
  (heading).insertAdjacentElement('beforeend', badge);
}
