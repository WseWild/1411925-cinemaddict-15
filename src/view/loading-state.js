import AbstractView from './abstract.js';

const createSiteLoadingStateTemplate = () => ( '<h2 class="films-list__title">Loading...</h2>');

export default class SiteLoadingState extends AbstractView {

  getTemplate() {
    return createSiteLoadingStateTemplate();
  }

}

