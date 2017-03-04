import React from 'react';

const LoginForm = (props) => (
  <div>
    {{msg}}
    <div ng-show="!newUser && !returningUser && !loggedInUser">
        <form ng-submit="checkUser()">
            <input type="email" name="email" ng-model="loginObj.email" placeholder="Email Please" autofocus required />
            <button type="submit">Start Now</button>
        </form>
    </div>
    <form ng-submit="skip()" ng-show="loggedInUser">
        <p>Hi, {props.email}</p>
        <div class="buttonGroup">
            <button type="submit">Start Building CV now</button>
            <button type="button" ng-click="logout()"><i class="icon-off"></i>Logout</button>
            <button>or</button>
        </div>
    </form>
    <form ng-submit="register()" ng-show="newUser">
        <div class="buttonGroup">
            <button type="button" ng-click="skip()">Skip</button>
            <button type="button" ng-click="newUser=null;returningUser=null;" class="fa fa-undo"></button>
        </div>
        <input type="password" name="password" ng-model="loginObj.password" placeholder="Password" required />
        <input type="password" name="cnfpassword" ng-model="loginObj.cnfpassword" placeholder="Confirm Password" required />
        <button type="submit">Register</button>
    </form>
    <form sction="" ng-submit="login()" ng-show="returningUser">
        <p>Hi <span>{{loginObj.email}},</span></p>
        <div class="buttonGroup">
            <button type="button" ng-click="skip()">Skip</button>
            <button type="button" ng-click="newUser=null;returningUser=null;" class="fa fa-undo">&nbsp;Back</button>
        </div>
        <input type="password" name="password" ng-model="loginObj.password" placeholder="Password" autofocus required />
        <div class="buttonGroup">
            <button type="submit">Sign In</button>
            <button type="button">Forgot Password</button>
        </div>
    </form>
  </div>
);

export default LoginForm;
