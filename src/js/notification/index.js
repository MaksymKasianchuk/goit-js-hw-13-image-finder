import '@pnotify/mobile/dist/PNotifyMobile.css';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/Material.css';
import { defaults } from '@pnotify/core';

defaults.delay = 3000;
defaults.styling = 'material';

const { alert, info, success, error } = require('@pnotify/core');

  function errorNotif() {
    error('No such images');
  }
  function succsessNotif() {
    success('We find it!!!');
  }
  function emptyNotif() {
      alert('Enter a value to search, please!');
  }
  function loadMoreNotif() {
    info("Hey catch more images! :)");
  }
  export default {
    errorNotif,
    succsessNotif,
    emptyNotif,
    loadMoreNotif,
  };