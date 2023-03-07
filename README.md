# Angular-tutorial

#### Directives, filters

```html
  
<!doctype>
<html ng-app>
    <head>
        
    </head>
    <body>
        <div ng-hide="isHidden" ng-init="data={name:'hanuman',isShow:'false'}">
<!--        Name : <input type="text" ng-model="customFilter" />-->
<!--            Dynamic filter for table-->
            Name : <input type="text" ng-model="customFilter.name" />
            </div>
        <br />
        
        <div ng-switch on="true">
            <p ng-bind="data.name" ng-switch-when="true"> </p>
            <br />
            <p ng-switch-default>{"Sample"}</p>
        </div>
        <div ng-init="names=[{name:'Hanuman',salary:'20000'},{name:'Kumar',salary:'24000'},{name:'Venkat',salary:'24000'},{name:'Anil',salary:22000}]">
            <ul>
            <li ng-repeat="name in names">{{name.name}} is working with {{name.salary}}</li>
        </ul>
            
            <table border="1">
                <tr>
                    <th ng-click="sortBy='name';reverese=!reverse"> Name </th>
                    <th ng-click="sortBy='salary';reverse=!reverse"> Salary </th>
                </tr>
                
                <tr ng-repeat="name in names | filter: customFilter | orderBy:sortBy:reverese">
                    <td> {{name.name | uppercase }} </td>
                    <td> {{name.salary}} </td>
                </tr>
            </table>
            
        </div>
        Hide : <input type="checkbox" ng-model="isHidden" /> <br />
        <button ng-click="data.name='kumar'"> Change Name </button>
        <p ng-bind="data.name"></p>
        <script src="angular.js"></script>
    </body>
</html>
```
