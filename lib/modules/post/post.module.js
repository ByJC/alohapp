import modConfig from './post.config';
import modController from './post.controller';

export default angular.module('alohapp.post', [])
    .config(modConfig)
    .controller('PostController', modController)
    .name;
