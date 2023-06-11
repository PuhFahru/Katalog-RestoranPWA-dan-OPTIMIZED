class NavbarItem extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <nav>
        <div class="menu-hp">
          <div>
            <a href="/" class="logo-font"> Kelru's Restaurant </a>
          </div>
          <div class="menu-container">
            <button class="menu" aria-label="button menu dropdown on mobile" type="button">
              <span class="fa fa-bars"></span>
            </button>
          </div>
        </div>
        <ul class="nav-list">
          <li class="nav-item"><a href="/">Home</a></li>
          <li class="nav-item"><a href="#/favorite">Favorite</a></li>
          <li class="nav-item">
            <a href="https://www.linkedin.com/in/fahru-alfarizi-hananza-putrawan-94379b26a/" target="_blank" rel="">About</a>
          </li>
        </ul>
      </nav>
    `;
  }
}

customElements.define('nav-bar', NavbarItem);
