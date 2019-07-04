database.ref('expenses').on('child_removed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

database.ref('expenses').on('child_changed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

database.ref('expenses').on('child_added', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

database.ref('expenses').on('value', (snapshot) => {
  const expenses = [];

  snapshot.forEach((childSnapshot) => {
    expenses.push({
      id: childSnapshot.key,
      ...childSnapshot.val()
    });
  });

  console.log(expenses);
})

database.ref('expenses').push({
  description: 'Rent',
  note: 'Pennies for Rent',
  amount: 800,
  createdAt: 34532543654456
});

database.ref('expenses').push({
  description: 'Phone',
  note: 'Pennies for my Phone',
  amount: 20,
  createdAt: 45930275934
});

database.ref('expenses').push({
  description: 'Food',
  note: 'Gotta eat',
  amount: 100,
  createdAt: 34390850912
});

database.ref('notes/-LiTfQ_Rtg9AjsXwie73').update({
  body: 'Get crunk'
});

database.ref('notes/-LiTfQ_Rtg9AjsXwie73').remove();

database.ref('notes').push({
  title: 'Course Topics',
  body: 'React, New React, Even Newer React'
});

database.ref().on('value', (snapshot) => {
  const val = snapshot.val();
  console.log(`${val.name} is a ${val.job.title} in ${val.job.company}`)
})

database.ref().set({
  name: 'Warren',
  age: 28,
  stressLevel: 6,
  job: {
    title: 'Front End Developer',
    company: 'Google'
  },
  isMale: true,
  location: {
    city: 'Didcot',
    country: 'UK'
  }
}).then(() => {
  console.log('data is saved')
}).catch((e) => {
  console.log('this failed', e);
});

database.ref().update({
  stressLevel: 9,
  'job/company': 'Amazon',
  'location/city': 'Seattle'
});

database.ref('isMale')
  .remove()
  .then(() => {
    console.log('this has been removed')
  });
