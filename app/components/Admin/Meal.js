import React from 'react';
import {_} from 'underscore';
import MealStore from '../../stores/MealStore';
import MealActions from '../../actions/MealActions';
import API from '../../API';
var self;

class Meal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {meal: {}};
    this.mealState = MealStore.getState();
    this.onChange = this.onChange.bind(this);
    self = this;
  }

  componentDidMount() {
    MealStore.listen(this.onChange);
    this.getMeal();
  }
  componentWillUnmount() {
    MealStore.unlisten(this.onChange);
  }
  onChange(state) {
    self.setState(state);
  }
  getMeal(){
    var meals = this.mealState.meals;
    if(meals){
      var meal = _.findWhere(meals, {id: parseInt(this.props.params.id)});
      if(meal){
        self.setState({meal: meal});
      }
    }
  }
  handleSubmit(event) {
    event.preventDefault();
  }

  submit(event){
    API.saveMeal(this.state.meal).then(function(){
      self.props.history.pushState(null, '/admin/meals');
    })
  }

  onNameChange(event){
    this.state.meal.name = event.target.value;
    this.setState({meal: this.state.meal});
  }

  render() {
    return(
      <div className='Content-panel'>
        <div>
            <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" name="name" value={this.state.meal.name}
                  onChange={this.onNameChange.bind(this)} />
            </div>

            <button type="button" className="btn btn-primary btn-lg" onClick={this.submit.bind(this)}>Save</button>
        </div>
      </div>
    );

  }
}

export default Meal;
