// Exercise 1: The book list
const books = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    alreadyRead: false,
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true,
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    alreadyRead: true,
  },
];
const ul = document.createElement('ul'); //ceate ul
document.body.appendChild(ul); // append it to the body
//for each element in the array books do as follows
books.forEach((element) => {
  const p = document.createElement('p'); //creates three paragraph's
  p.innerText = element.title;
  const li = document.createElement('li'); // create lists
  const image = document.createElement('img'); // create image element
  image.src = 'https://prodimage.images-bn.com/pimages/9780465050659_p0_v5_s1200x630.jpg'; // assigh the same source to the images
  ul.appendChild(li); // append lists to the ul
  li.appendChild(p);
  li.appendChild(image);
  //checks if the book is already read then gives list background color green
  if (element.alreadyRead) {
    li.style.backgroundColor = 'green';
    if (element.author === 'Brian Christian') {
      // checks the title and change the image source to the correct one
      image.src =
        'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1295465264l/8884400.jpg';
      li.style.margin = '0 1rem'; //gives margin left and right to the particular list
    } else {
      image.src = 'https://www.studystore.nl/images/9780132119177/3/1';
    }
  } else {
    // makes the background color read if not alreadyRead
    li.style.backgroundColor = 'red';
  }
});
