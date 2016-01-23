import alt from '../alt';
import {assign} from 'underscore';

class MealActions {
  constructor() {
    this.generateActions(
      'updateAjaxAnimation',
      'getMealsSuccess'
    );
  }

  getMeals() {
    $.ajax({
      url: '/api/meals'
    })
      .done((data) => {
        this.actions.getMealsSuccess(data);
      })
      .fail((jqXhr) => {
        this.actions.getMealsFail(jqXhr);
      });
  }

}

export default alt.createActions(MealActions);
