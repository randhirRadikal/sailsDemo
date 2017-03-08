this["JST"] = this["JST"] || {};

this["JST"]["assets/templates/users/add.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '  <h2>Vertical (basic) form</h2>\r\n  <form name="userAddForm" id="userAddForm" ng-submit="addUser(picFile,user);">\r\n    <div class="form-group">\r\n      <label for="name">Name : </label>\r\n      <input type="text" class="form-control" id="name" name="name" ng-model="user.name" placeholder="Enter name">\r\n    </div>\r\n    <div class="form-group">\r\n      <label for="email">Email :</label>\r\n      <input type="email" class="form-control" id="email" name="email" ng-model="user.email" placeholder="Enter email">\r\n    </div>\r\n    <div class="form-group">\r\n      <label for="profilePic">Profile Pics</label>\r\n      <button class="btn btn-default" ngf-select ng-model="picFile" name="file"\r\n            accept="image/*" ngf-max-size="2MB" required\r\n            ngf-model-invalid="errorFile">Upload</button>\r\n      <!-- <input type="file" class="btn btn-default" ngf-select ng-model="picFile" name="file"\r\n            accept="image/*" ngf-max-size="2MB" required\r\n            ngf-model-invalid="errorFile" value="Upload"> -->\r\n      <i ng-show="myForm.file.$error.required">*required</i><br>\r\n      <i ng-show="myForm.file.$error.maxSize">File too large\r\n          {{errorFile.size / 1000000|number:1}}MB: max 2M</i>\r\n      <img ng-show="myForm.file.$valid" style="width:100px; height:100px;" ngf-thumbnail="picFile" class="thumb">\r\n      <button ng-click="picFile = null" ng-show="picFile">Remove</button>\r\n    </div>\r\n    <button type="submit" class="btn btn-default">Submit</button>\r\n  </form>\r\n';

}
return __p
};

this["JST"]["assets/templates/users/index.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div>\r\n  <table class="table table-bordered">\r\n    <thead>\r\n      <tr>\r\n        <th colspan="7"><h3 class="text-center">Users List</h3></th>\r\n        <th><a href="#!/users/add" class="btn btn-primary" >Add</a></th>\r\n      </tr>\r\n      <tr>\r\n        <th>S. no.</th>\r\n        <th>Id</th>\r\n        <th>Name</th>\r\n        <th>Email</th>\r\n        <th>Image</th>\r\n        <th>Created</th>\r\n        <th>Updated</th>\r\n        <th>Action</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr ng-repeat="user in users">\r\n        <td>{{$index+1}}</td>\r\n        <td>{{user.id}}</td>\r\n        <td>{{user.name}}</td>\r\n        <td>{{user.email}}</td>\r\n        <td ng-if="user.profilePicName">\r\n          <img src="/images/{{user.profilePicName}}" style="width:100px; height:100px;">\r\n        </td>\r\n        <td>{{user.createdAt|date}}</td>\r\n        <td>{{user.updatedAt|date}}</td>\r\n        <td>\r\n          <input type="button" class="btn btn-primary" ng-click="deleteUser(user,$index);" name="delete" value="Delete" >\r\n          <input type="button" class="btn btn-primary" name="edit" value="Edit" ng-click="EditUser(user,$index);"></td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n';

}
return __p
};