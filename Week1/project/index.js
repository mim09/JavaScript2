const quotes = [{
  quote: 'Wisely, and slow.They stumble that run fast.',
  by: ' William Shakespeare'
}, {
  quote: 'If you judge people, you have no time to love them.',
  by: 'Mother Teresa'
},
{
  quote: ' All that we are is the result of what we have thought.',
  by: 'Buddha'
},
{
  quote: 'The future belongs to those who prepare for it today.',
  by: 'Malcolm X'
},
{
  quote: 'It always seems impossible until it’s done.',
  by: 'Nelson Mandela'
},
{
  quote: 'I don’t think of all the misery but of the beauty that still remains.',
  by: 'Anne Frank'
}
]
const button = document.querySelector('button');
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
console.log(button);

window.addEventListener('load', generateQuote);

function generateQuote() {
  h1.innerHTML = quotes[random()].quote;
  h2.innerHTML = quotes[random()].by;
}

const random = () => Math.round(Math.random(quotes.length));
button.addEventListener('click', generateQuote)
