import alt from '../alt';
import MealActions from '../actions/MealActions';
import {_} from 'underscore';

class MealStore {
  constructor() {
    this.bindActions(MealActions);
    this.meals = [];
    this.ajaxAnimationClass = '';
  }
  getMealsSuccess(meals){
    debugger;
    this.meals = meals;
  }

  getMealsFail(jqXhr){
    onsole.log('getAppSettingsFail');
    toastr.error(jqXhr.responseJSON.message);
  }

  onUpdateAjaxAnimation(className) {
    this.ajaxAnimationClass = className; //fadein or fadeout
  }
}

export default alt.createStore(MealStore);
