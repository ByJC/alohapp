import ItemsService from './items.service';

export default angular.module('alohapp.items', [])
    .service('itemsService', ItemsService)
    .name;
