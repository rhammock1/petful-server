'use strict';

const maleNames = ['Rocko', 'Max', 'Buddy', 'Roscoe', 'Charlie', 'Kevin', 'Lucky', 'Buster', 'Oliver', 'Teddy'];
// maleNames[Math.floor(Math.random() * maleNames.length)];

const femaleNames = ['Bella', 'Lucy', 'Polly', 'Nahla', 'Jasmine', 'Daisy', 'Ginger', 'Coco', 'Sasha', 'Lola'];
// femaleNames[Math.floor(Math.random() * femaleNames.length)];

const stories = ['They were thrown on the street', 'They were left behind when the previous owner moved', 'Previous owner passed away and the family couldn\'t keep them', 'Couldn\'t keep them becuase there were too many pets in the household', 'The previous owner did not have enough time for them', 'Someone in the previous owner\'s family was allergic', 'They were found sleeping on the street and eating scraps', 'The previous owner moved and the new landlord did not allow pets', 'The owner could not afford to keep them', 'They got sick and the owner couldn\'t continue to care for them'];

const cats = [
  {
    imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: maleNames[Math.floor(Math.random() * maleNames.length)],
    sex: 'Male',
    age: 2,
    breed: 'Bengal',
    story: stories[Math.floor(Math.random() * stories.length)]
  },
  {
    imageURL:'https://static.scientificamerican.com/sciam/cache/file/32665E6F-8D90-4567-9769D59E11DB7F26_source.jpg?w=590&h=800&7E4B4CAD-CAE1-4726-93D6A160C2B068B2', 
    imageDescription: 'Tan Domestic Long Hair cat sticking his tongue out.',
    name: femaleNames[Math.floor(Math.random() * femaleNames.length)],
    sex: 'female',
    age: 3,
    breed: 'Domestic Long Hair',
    story: stories[Math.floor(Math.random() * stories.length)]
  },
  {
    imageURL:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlNyI5Bbsl1vq1BQjH9XA-Z4j0Kkk0cEpAnA&usqp=CAU', 
    imageDescription: 'White Domestic Short Hair cat with Heterochromia Iridis',
    name: maleNames[Math.floor(Math.random() * maleNames.length)],
    sex: 'Male',
    age: 1,
    breed: 'Domestic Short Hair',
    story: stories[Math.floor(Math.random() * stories.length)]
  },
  {
    imageURL:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjOQPpkOjhrAgg8hrhisEqOf-Cpbi9fYTRDA&usqp=CAU', 
    imageDescription: 'Adorable short hair kitten missing an eye',
    name: femaleNames[Math.floor(Math.random() * femaleNames.length)],
    sex: 'female',
    age: 1,
    breed: 'Domestic Short Hair',
    story: stories[Math.floor(Math.random() * stories.length)]
  },
  {
    imageURL:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM44430OV4S8zI71m_HHhsZRILQ73p4NjH7A&usqp=CAU', 
    imageDescription: 'Grey kitty waiting longingly to be adopted ',
    name: maleNames[Math.floor(Math.random() * maleNames.length)],
    sex: 'Male',
    age: 5,
    breed: 'Chartreux',
    story: stories[Math.floor(Math.random() * stories.length)]
  },
  {
    imageURL:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO5EEPwwnBXXX24LS-FMmccZrkEayWgYdP8w&usqp=CAU', 
    imageDescription: 'Dark grey kitty staying safe, wearing their mask during the Covid-19 pandemic',
    name: femaleNames[Math.floor(Math.random() * femaleNames.length)],
    sex: 'Female',
    age: 2,
    breed: 'Ragdoll',
    story: stories[Math.floor(Math.random() * stories.length)]
  },
];

const dogs = [
  {
    imageURL:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*', 
    imageDescription: 'Golden retriever puppy sitting in field around autumn leaves',
    name: femaleNames[Math.floor(Math.random() * femaleNames.length)],
    sex: 'Female',
    age: 1,
    breed: 'Golden Retriver',
    story: stories[Math.floor(Math.random() * stories.length)]
  },
  {
    imageURL:'https://thehappypuppysite.com/wp-content/uploads/2019/06/Chihuahua-pics-HP-long.jpg', 
    imageDescription: 'Loyal and Fearless, this little guy will be a lifelong companion',
    name: maleNames[Math.floor(Math.random() * maleNames.length )],
    sex: 'Male',
    age: 3,
    breed: 'Chihuahua',
    story: stories[Math.floor(Math.random() * stories.length)]
  },
  {
    imageURL:'https://www.pitbullinfo.org/uploads/7/8/9/7/7897520/pitbull-dog-1_2_orig.jpg', 
    imageDescription: 'Friendly pitbull smiling',
    name: femaleNames[Math.floor(Math.random() * femaleNames.length)],
    sex: 'female',
    age: 4,
    breed: 'Pit Bull',
    story: stories[Math.floor(Math.random() * stories.length)]
  },
  {
    imageURL:'https://img.dog-learn.com/dog-breeds/german-shepherd/german-shepherd-sz6.jpg', 
    imageDescription: 'Long-hair German Shepard relaxing on the grass',
    name: maleNames[Math.floor(Math.random() * maleNames.length)],
    sex: 'Male',
    age: 6,
    breed: 'German Shepard',
    story: stories[Math.floor(Math.random() * stories.length)]
  },
  {
    imageURL:'https://figopetinsurance.com/sites/default/files/imagedogsenglish-bulldog-just-being-adorable-porchblog.jpg', 
    imageDescription: 'English Bulldog waiting patiently to be adopted',
    name: 'Chunk',
    sex: 'Female',
    age: 3,
    breed: 'English Bulldog',
    story: stories[Math.floor(Math.random() * stories.length)]
  },

];

const people = [
  'Jerry Terry',
  'Merry Werry',
  'Larry Lobster',
  'Bobby Wobby',
  'Joe Shmoe'
];

module.exports = { cats, dogs, people };