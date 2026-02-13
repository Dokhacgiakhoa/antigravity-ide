# Downgrading Angular → AngularJS

```typescript
// Angular service
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class NewService {
  getData() {
    return 'data from Angular';
  }
}

// Make available to AngularJS
import { downgradeInjectable } from '@angular/upgrade/static';

angular.module('myApp')
  .factory('newService', downgradeInjectable(NewService));

// Use in AngularJS
angular.module('myApp').controller('OldController', function(newService) {
  console.log(newService.getData());
});
```