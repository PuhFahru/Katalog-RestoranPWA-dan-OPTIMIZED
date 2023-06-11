class HeroContentItem extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div tabindex="0" class="hero-text">
        <h1 class="hero-title">Kelru's Restaurant</h1>

        <p class="hero-subtitle">
          Anda lapar, Silahkan mampir disini.
        </p>
    `;
  }
}

customElements.define('hero-content', HeroContentItem);
