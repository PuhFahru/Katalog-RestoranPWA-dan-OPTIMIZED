class CustomFooterItem extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer tabindex="0">
        <ul>
          <li> Copyright @ 2023 - Kelru Restaurant - Indonesia Foods </li>          
        </ul>
      </footer>
    `;
  }
}

customElements.define('custom-footer', CustomFooterItem);
