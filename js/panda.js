console.log('Welcome to Panda world');


const h2Styles = document.getElementsByTagName('h2')

for(const h2 of h2Styles){
    h2.style.color = 'lightblue '
}

const bags = document.getElementById('bags')
bags.style.backgroundColor = 'tomato '

const cards = document.querySelectorAll('.card')

for(const card of cards){
    card.style.borderRadius = '30px'
}

function something(){
    console.log('just testing purpose');
}

const bagContainer = document.getElementById('bag-container')
bagContainer.addEventListener('click', function(event){
    console.log(event.target.parentNode.removeChild(event.target));
})