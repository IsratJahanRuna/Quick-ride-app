// import React, { useState } from 'react';
// import firebase from "firebase/app";
// import "firebase/auth";
// import firebaseConfig from '../../firebase.config';


// if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig);
// } else {
//     firebase.app(); // if already initialized, use that one
// }

// const Login = () => {
//     const [user, setUser] = useState({
//         isSignedIn: false,
//         name: '',
//         email: '',
//         password: ''

//     })
//     const provider = new firebase.auth.GoogleAuthProvider();
//     const fbProvider = new firebase.auth.FacebookAuthProvider();
//     const handleGoogleSignIn = () => {

//         firebase.auth()
//             .signInWithPopup(provider)
//             .then((result) => {
//                 var credential = result.credential;
//                 var token = credential.accessToken;
//                 var user = result.user;
//                 console.log(user);
//                 setUser(user);


//             }).catch((error) => {
//                 var errorCode = error.code;
//                 var errorMessage = error.message;
//                 var email = error.email;
//                 var credential = error.credential;
//                 console.log(errorCode, errorMessage, email);
//             });
//         // console.log('shdfb');
//     }
//     const handleFacebookSignIn = () => {
//         firebase
//             .auth()
//             .signInWithPopup(fbProvider)
//             .then((result) => {
//                 const credential = result.credential;

//                 const user = result.user;

//                 const accessToken = credential.accessToken;
//                 console.log(user);
//                 setUser(user);


//             })
//             .catch((error) => {
//                 const errorCode = error.code;
//                 const errorMessage = error.message;
//                 const email = error.email;
//                 const credential = error.credential;
//                 console.log(errorCode, errorMessage, email, credential);


//             });
//     }

//     const handleChange = (e) => {

//         let isFieldValid = true;
//         if (e.target.name === 'email') {
//             isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
//         }
//         else if (e.target.name === 'password') {
//             const isPasswordValid = e.target.value.length > 6;
//             const isPasswordHasNumber = /\d{1}/.test(e.target.value);
//             isFieldValid = isPasswordValid && isPasswordHasNumber;
//         }

//         if (isFieldValid) {
//             const newUserInfo = { ...user };
//             newUserInfo[e.target.name] = e.target.value;
//             setUser(newUserInfo);
//         }
//     }

//     const handleSubmit = (e) => {
//         console.log(user);
//         if (user.email && user.password) {
//             firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
//             .then(res => {
//                 const newUserInfo = { ...user };
//                 newUserInfo.error = '';
//                 newUserInfo.success = true;
//                 setUser(newUserInfo);
//                 updateUserName(user.name);
//                 })
//                 .catch((error) => {
//                     const newUserInfo = { ...user };
//                     newUserInfo.error = error.message;
//                     newUserInfo.success = false;
//                     setUser(newUserInfo);

//                 });
//         }

//         const updateUserName = name => {
//             const user = firebase.auth().currentUser;

//             user.updateProfile({
//                 displayName: name

//             })
//                 .then(function () {
//                     console.log('user name Updated SuccessFully');
//                 })
//                 .catch(function (error) {
//                     console.log(error);
//                 });
//         }
//     }

//     return (
//         <div>
//             <div className="container">
//                 <div className="col-md-12">
//                     <div className="card bg-dark text-white mx-auto mt-5" style={{ width: '30rem', height: '33rem' }}>
//                         <form className="p-3" onBlur={handleSubmit}>
//                             <h2 className="text-center">Create An Account</h2>
//                             <label  className="p-2">Name:</label>
//                             <input type="text" name="name" onBlur={handleChange} className="form-control"  placeholder="Your Name" required></input>
//                             <label  className="p-2">Username or Email</label>
//                             <input type="text" name="email" onBlur={handleChange} className="form-control"  placeholder="Your Email" required></input>
//                             <label  className="p-2">Password</label>
//                             <input type="password" name="password" onBlur={handleChange} className="form-control"  placeholder="password" required></input>
//                             {/* <label for="" class="p-2">Confirm Password</label>
//                             <input type="password" onChange={handleChange} class="form-control" id="" placeholder="password" required></input> */}
//                             <input type="submit" value="Create an account" className=" form-control mt-4 w-100 bg-primary text-white rounded border-primary" style={{ height: '40px' }} ></input>
//                             {/* <button className="btn btn-primary mt-4 w-100" type="submit">Create an account</button> */}
//                             <p className="mt-3">Already have an account?<a href="#">Login</a></p>
//                         </form>


//                     </div>
//                 </div>
//             </div>
//             <br />



//             <button className="btn btn-light mt-3 w-25 shadow border" onClick={handleGoogleSignIn}><img style={{ width: '50px', height: '50px' }} src="https://play-lh.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1" alt="" /> Continue with Google</button>
//             <br />
//             <br />
//             <button className="btn btn-light mb-5 mt-2 w-25 shadow border" onClick={handleFacebookSignIn}> <img style={{ width: '70px', height: '40px', marginTop: '5px' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5zB4b4hobVU9YVNhH7mh507OaQLfVNSdEDU9hz9iOe3S3USTWJhW4ct9SWPKQT1qGCJQ&usqp=CAU" alt="" />Continue with Facebook</button>

//         </div>
//     );
// };

// export default Login;


import React, { useState } from 'react';
// import './Login.css';
// import google from '../../images/google.png';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}


const Login = () => {
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: '',
        error: '',
        success: false
    });

    //........................................//

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    //........................................//
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };


    //........................................//


    //........................................//
    //google sign in

    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signedInUser = { name: displayName, email }
                setLoggedInUser(signedInUser);
                console.log(signedInUser);
                history.replace(from);

                /** @type {firebase.auth.OAuthCredential} */
                var user = result.user;

                // ...
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage);
                // ...
            });
    }
    //........................................//



    //........................................//


    // const handleFacebookSignIn = () => {
    //     const fbProvider = new firebase.auth.FacebookAuthProvider();
    //             firebase
    //                 .auth()
    //                 .signInWithPopup(fbProvider)
    //                 .then((result) => {
    //                     const credential = result.credential;

    //                     const user = result.user;

    //                     const accessToken = credential.accessToken;
    //                     console.log(user);
    //                     setUser(user);


    //                 })
    //                 .catch((error) => {
    //                     const errorCode = error.code;
    //                     const errorMessage = error.message;
    //                     const email = error.email;
    //                     const credential = error.credential;
    //                     console.log(errorCode, errorMessage, email, credential);


    //                 });
    //         }
    //handleBlur
    const handleBlur = (e) => {
        let isFieldValid = true;
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);

        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }
    //........................................//


    //........................................//
    //handleSubmit
    const handleSubmit = (e) => {
        // create new user
        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    updateUserName(user.name);
                    console.log(newUserInfo);
                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });
        }


        // login existing user
        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    setLoggedInUser(newUserInfo);
                    console.log(newUser);
                    console.log('sign in user info', res.user);
                    history.replace(from);
                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });

        }
        e.preventDefault();
    }
    //........................................//




    //........................................//
    //update User Name
    const updateUserName = name => {
        const user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: name

        })
            .then(function () {
                console.log('user name Updated SuccessFully');
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    //........................................//

    return (
        <div className="container">
            <div className="col-md-12">
                <div className="card shadow text-white mx-auto mt-4" style={{ width: '30rem', height: '32rem', backgroundColor: 'lightblue' }}>

                    {/* Login form */}
                    <form className="p-3" onSubmit={handleSubmit}>
                        <h2 className="border-bottom" >{newUser ? 'Create An Account' : 'Login'}</h2>
                        <label for="" class="p-2">{newUser ? 'Name' : 'Username or Email'}</label>
                        {
                            newUser &&
                            <input type="text" class="form-control" name="name" placeholder="Your Name" onBlur={handleBlur} required />
                        }
                        <label for="" class="p-2">{newUser ? 'Username or Email' : ''}</label>
                        <input type="text" class="form-control" name="email" placeholder="Your Email" onBlur={handleBlur} required />
                        <label for="" class="p-2">Password</label>
                        <input type="password" class="form-control" name="password" placeholder="password" onBlur={handleBlur} />
                        <label for="" class="p-2">{newUser ? 'Confirm Password' : ''}</label>
                        {
                            newUser && <input type="password" class="form-control" id="" placeholder="password"></input>
                        }
                        <button className="btn btn-primary mt-3 w-100">{newUser ? 'Create An Account' : 'Login'}</button>
                        <p className="mt-2 text-center"> {newUser ? 'Already have an account?' : 'Do not have an account?'} <a href="#" onClick={() => setNewUser(!newUser)} name="newUser"> {newUser ? 'Login' : 'Create An Account'}</a></p>
                    </form>
                </div>

                {/* show error message */}
                <div>
                    <p style={{ color: 'red', textAlign: 'center' }}>{user.error}</p>
                    {user.success && <p style={{ color: 'green', textAlign: 'center' }}>User {newUser ? 'Created' : 'logged In'} Successfully.</p>}
                </div>


                {/* Show google login */}
                <div className="text-center mt-3 mb-3">
                    <h5>or</h5>
                    <button className="btn btn-light mt-3 w-25 shadow border" onClick={handleGoogleSignIn}><img style={{ width: '50px', height: '50px' }} src="https://play-lh.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1" alt="" />Continue with google</button>
                </div>


                {/* <br />
                <br />
                <button className="btn btn-light mb-5 mt-2 w-25 shadow border" onClick={handleFacebookSignIn}> <img style={{ width: '70px', height: '40px', marginTop: '5px' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5zB4b4hobVU9YVNhH7mh507OaQLfVNSdEDU9hz9iOe3S3USTWJhW4ct9SWPKQT1qGCJQ&usqp=CAU" alt="" />Continue with Facebook</button> */}
            </div>
        </div>
    );
};

export default Login;