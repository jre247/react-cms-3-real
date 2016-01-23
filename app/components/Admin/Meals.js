import React from 'react';
import {_} from 'underscore';
import MealStore from '../../stores/MealStore';
import MealActions from '../../actions/MealActions';
import { createHistory } from 'history';
import Sortable from '../Widgets/Components/Sortable';
import API from '../../API';
var self;

class Meals extends React.Component {
  constructor(props) {
    super(props);
    this.state = MealStore.getState();
    this.onChange = this.onChange.bind(this);
    self = this;
  }

  componentDidMount() {
    MealStore.listen(this.onChange);
    MealActions.getMeals();
  }
  componentWillUnmount() {
    MealStore.unlisten(this.onChange);
  }
  onSortingUpdate(){
    API.saveSortingForMeals(self.state.meals);
  }
  onChange(state) {
    self.setState(state);
  }
  selectMeal(setting, event){
    self.props.history.pushState(null, '/admin/meals/' + setting.id + '/edit');
  }
  setStateForMeals(newMeals){
    self.setState({meals: newMeals});
  }

  render() {
    if(this.state.meals.length == 0){
      return(
        <span />
      );
    }
    else{
      var sortableProps = _.extend({sortableItemElement: 'tr', itemList: self.state.meals,
        itemPropertyToSortBy: 'sort_order', setStateForItemList: self.setStateForMeals.bind(this),
        onSortingUpdateCallback: self.onSortingUpdate.bind(this)},
        this.props);

      let nodes = this.state.meals.map((meal, index) => {
        return (
          <tr key={index} data-id={meal.id} onClick={this.selectMeal.bind(this, meal)}>
            <td>{meal.name}</td>
          </tr>
        );
      });

      return (
        <div className='Content-panel'>
          <div>
            <div className="table-responsive">
              <table className="table meals">
              <thead>
                <tr>
                  <th>Name</th>
                </tr>
              </thead>
              <Sortable {...sortableProps}>
                <tbody className="table-body">
                  {nodes}
                </tbody>
              </Sortable>
              </table>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Meals;
