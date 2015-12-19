import React from 'react';
import {Route} from 'react-router';
import App from './components/app';
import Home from './components/Home';
import Venue from './components/Venue/Venue';
import EditVenue from './components/Venue/EditVenue';
import Accomodations from './components/Accomodations/Accomodations';
import TheProposal from './components/TheProposal/TheProposal';
import EditTheProposal from './components/TheProposal/EditTheProposal';
import PhotoAlbum from './components/PhotoAlbum/PhotoAlbum';
import EditPhotoAlbum from './components/PhotoAlbum/EditPhotoAlbum';
import GiftRegistry from './components/GiftRegistry/GiftRegistry';
import ThingsToDo from './components/ThingsToDo/ThingsToDo';
import EditThingsToDo from './components/ThingsToDo/EditThingsToDo';

export default (
  <Route component={App}>
    <Route path='/' component={Home} />
    <Route path='/the-proposal' component={TheProposal} />
    <Route path='/venue' component={Venue} />
    <Route path='/venue/edit' component={EditVenue} />
    <Route path='/the-proposal/edit' component={EditTheProposal} />
    <Route path='/photo-album' component={PhotoAlbum} />
    <Route path='/photo-album/edit' component={EditPhotoAlbum} />
    <Route path='/accomodations' component={Accomodations} />
    <Route path='/gift-registry' component={GiftRegistry} />
    <Route path='/things-to-do' component={ThingsToDo} />
    <Route path='/things-to-do/edit' component={EditThingsToDo} />
  </Route>
);
