import * as firebase from 'firebase'

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
}

firebase.initializeApp(config)
const database = firebase.database()


export { firebase, database as default };

// const onValueChanged = (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot)=> {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     })
//
//   })
//   console.log(expenses)
// }
//
//
//
// database.ref('expenses')
//   .on('value', onValueChanged)
//
//
//
// database.ref('expenses').on('child_removed',(snapshot)=> {
//   console.log(snapshot.key, snapshot.val())
// })
//
// database.ref('expenses').on('child_changed',(snapshot)=> {
//   console.log(snapshot.key, snapshot.val())
// })
//
// database.ref('expenses').on('child_added',(snapshot)=> {
//   console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot)=> {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//       console.log(expenses)
//     })
// })

// database.ref('expenses').push({
//   description: 'Grilled Cheese ',
//   note:'Cheddar',
//   amount:225,
//   createdAt:200
// })

// database.ref('notes/-LIjs66SkOe9HFIMDw7X').update({body: 'To Run Faster'})
// database.ref('notes/-LIjsnNTuHkBLvR3gE0H').remove();
// database.ref().on('value', (snapshot) => {
//   const value = snapshot.val();
//   console.log(`${value.name} is a ${value.job.title} at ${value.job.company}`)
// });
//
// setTimeout(()=> {
//   database.ref().update({
//     name:'Behcet',
//     'job/location':'Yapitasi',
//     'job/title':'Shitfucker'
//   })
// },3500)

// const onValueChange = database.ref().on('value', (snapshot)=> {
//   console.log(snapshot.val())
//
// }, (e)=> {
//   console.log('Error with data fetching', e)
// });
//
// setTimeout(()=> {
//   database.ref('age').set({
//     age:100
//   });
// },3500)
//
// setTimeout(()=> {
//   database.ref().off(onValueChange);
// },3500)
//
// setTimeout(()=> {
//   database.ref('age').set({
//     age:500
//   });
//},3500)
// database.ref()
//   .once('value')
//   .then((snapshot)=> {
//     const val = snapshot.val();
//     console.log(val);
//   })

// database.ref().set({
//   name:'Cihat Karli',
//   age: 32,
//   stressLevel: 6,
//   location: {
//       city:"Istanbul",
//       country: "Turkey"
//   },
//   job: {
//     title: 'Software developer',
//     company: 'Google'
//   }
// }).then(()=> {
//   console.log('Data is saved')
// })
//   .catch((error)=> {
//     console.log('This failed.', error)
//   })
//
//
//
//
// database.ref().update({
//   stressLevel:9,
//   'location/city':'Seattle',
//   'job/company':'Amazon'
// }).then(()=> {
//   console.log('Attributes saved')
// }).catch((error)=>{
//   console.log('attributes save failed',error)
// })


