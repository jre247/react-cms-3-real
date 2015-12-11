import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Venue from './components/Venue';
import Accomodations from './components/Accomodations';
import TheProposal from './components/TheProposal';
import PhotoAlbum from './components/PhotoAlbum';
import EditVenue from './components/EditVenue';
import EditTheProposal from './components/EditTheProposal';
import GiftRegistry from './components/GiftRegistry';
import ThingsToDo from './components/ThingsToDo';
import EditThingsToDo from './components/EditThingsToDo';

export default (
  <Route component={App}>
    <Route path='/' component={Home} />
    <Route path='/the-proposal' component={TheProposal} />
    <Route path='/venue' component={Venue} />
    <Route path='/venue/edit' component={EditVenue} />
    <Route path='/the-proposal/edit' component={EditTheProposal} />
    <Route path='/photo-album' component={PhotoAlbum} />
    <Route path='/accomodations' component={Accomodations} />
    <Route path='/gift-registry' component={GiftRegistry} />
    <Route path='/things-to-do' component={ThingsToDo} />
    <Route path='/things-to-do/edit' component={EditThingsToDo} />
  </Route>
);
