import AbstractView from './abstract.js';


export const createListEmptyTemplate  = () => (
  '<h2 class="films-list__title">There are no movies in our database</h2>'
);

export default class SiteListEmpty extends AbstractView {

  getTemplate() {
    return createListEmptyTemplate();
  }

}
