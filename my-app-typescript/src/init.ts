//make intital call for the app in the mean time show the spinner


import { interval, Observable } from 'rxjs';
import { take,concatMap, map } from 'rxjs/operators';
import {  User} from './models/User';
import { Auth } from './models/Authorisation';
import { IUserAuthorisation } from './models/UserAuthorisation';


const numbers = interval(2000);
export const allIntialRequestComplete = numbers.pipe(take(1));
//takeFourNumbers.subscribe(x => console.log('Next: ', x));

export const getUserDetailsAndAuthorisation = () : Observable<any> => {
  

  //this also works fine but it is more clear with return statement
   const userDetalsAnsAuthorisation0 = getUserDetails(45).pipe(
    concatMap((param_user:User) => {
      return getAuthorisation(param_user);
    })).pipe(
      map((param_auth:IUserAuthorisation) => {
        return { auth: param_auth.auth, user:param_auth.user };
  })); 

  // const userDetalsAnsAuthorisation = getUserDetails(45)
  //   .pipe(concatMap((param_user:User) =>  getAuthorisation(param_user)))
  //   .pipe(map((param_auth:IUserAuthorisation) => {
  //     return { auth: param_auth.auth, user:param_auth.user };
  //   }));

  //userDetalsAnsAuthorisation0.subscribe(x => console.log('Concat Map Result' + JSON.stringify(x)));
  
  return userDetalsAnsAuthorisation0 as any;
}

//export const getUserDetails = () => {
export const getUserDetails = (id:number): Observable<User> => {

  //@ts-ignore
  const observable: Observable<User> = new Observable (async observer => {
    const response = await fetch(`https://react-app-a5e65-default-rtdb.firebaseio.com/user.json?employeeID=${id}`);
    if(!response.ok) {
        observer.error('Error in user details ' + JSON.stringify(response));  
    }
    const data = await response.json();
    const user = new User(data.employeeID, data.name, data.designation, data.country, data.state, data.dept);
    observer.next(user);
  });

  console.log('getUserDetails Complete');
  return observable;
}

export const getAuthorisation = (user:User):Observable<IUserAuthorisation>  => {
  //@ts-ignore
  const observable: Observable<IUserAuthorisation> = new Observable (async observer => {
    const response = await fetch(`https://react-app-a5e65-default-rtdb.firebaseio.com/access.json?deptNo=${user.getdept()}`);
    if(!response.ok) {
        observer.error('Error in getting access of user with=' + user.getEmployeeID() + ", message=" + JSON.stringify(response));  
    }
    const data = await response.json();
    const authorisation = new Auth(data.reports,data.hr);

    const userDetails : IUserAuthorisation = {
      auth: authorisation,
      user: user
    }

    observer.next(userDetails);
  });
  console.log('getAuthorisation Complete');
  return observable;
}