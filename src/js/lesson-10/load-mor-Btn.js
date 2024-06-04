export default class LoadMoreBtn {
  constructor({ selector, hidden = false }) {
    this.refs = this.getRefs(selector);

    hidden && this.hide();
  }
  getRefs(selector) {
    const refs = {};
    refs.button = document.querySelector(selector);
    refs.spiner = refs.button.querySelector('.spiner');
    refs.label = refs.button.querySelector('.label');
    return refs;
  }

  enable() {
    this.refs.button = false;
    this.refs.label.textContent = 'Show mor';
    this.refs.spiner.classList.add('is-hidden');
  }

  disable() {
    this.refs.button = true;
    this.refs.label.textContent = 'Load...';
    this.refs.spiner.classList.remove('is-hidden');
  }

  show() {
    this.refs.button.classList.remove('is-hidden');
  }

  hide() {
    this.refs.button.classList.add('is-hidden');
  }
}
