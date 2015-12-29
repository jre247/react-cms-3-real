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
import EditGiftRegistry from './components/GiftRegistry/EditGiftRegistry';
import ThingsToDo from './components/ThingsToDo/ThingsToDo';
import EditThingsToDo from './components/ThingsToDo/EditThingsToDo';
import HowToGetThere from './components/HowToGetThere/HowToGetThere';
import EditHowToGetThere from './components/HowToGetThere/EditHowToGetThere';
import BridalParty from './components/BridalParty/BridalParty';
import EditBridalParty from './components/HowToGetThere/EditBridalParty';

export default (
  <Route component={App}>
    <Route path='/' component={Home} />
    <Route path='/our-story' component={TheProposal} />
    <Route path='/venue' component={Venue} />
    <Route path='/venue/edit' component={EditVenue} />
    <Route path='/our-story/edit' component={EditTheProposal} />
    <Route path='/photo-album' component={PhotoAlbum} />
    <Route path='/photo-album/edit' component={EditPhotoAlbum} />
    <Route path='/accomodations' component={Accomodations} />
    <Route path='/gift-registry' component={GiftRegistry} />
    <Route path='/gift-registry/edit' component={EditGiftRegistry} />
    <Route path='/things-to-do' component={ThingsToDo} />
    <Route path='/things-to-do/edit' component={EditThingsToDo} />
    <Route path='/how-to-get-there' component={HowToGetThere} />
    <Route path='/how-to-get-there/edit' component={EditHowToGetThere} />
    <Route path='/bridal-party' component={BridalParty} />
    <Route path='/bridal-party/edit' component={EditBridalParty} />
  </Route>
);
