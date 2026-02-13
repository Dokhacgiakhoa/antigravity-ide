# AngularJS Controller → Angular Component

```javascript
// Before: AngularJS controller
angular.module('myApp').controller('UserController', function($scope, UserService) {
  $scope.user = {};

  $scope.loadUser = function(id) {
    UserService.getUser(id).then(function(user) {
      $scope.user = user;
    });
  };

  $scope.saveUser = function() {
    UserService.saveUser($scope.user);
  };
});
```

```typescript
// After: Angular component
import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  template: `
    <div>
      <h2>{{ user.name }}</h2>
      <button (click)="saveUser()">Save</button>
    </div>
  `
})
export class UserComponent implements OnInit {
  user: any = {};

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadUser(1);
  }

  loadUser(id: number) {
    this.userService.getUser(id).subscribe(user => {
      this.user = user;
    });
  }

  saveUser() {
    this.userService.saveUser(this.user);
  }
}
```