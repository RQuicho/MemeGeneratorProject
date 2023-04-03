const topText = document.querySelector('input[name=topText]');
const botText = document.querySelector('input[name=bottomText]');
const img = document.querySelector('input[name=image]');
const button = document.querySelector('input[type=submit]');
const div = document.querySelector('div[class=container]');


button.addEventListener('click', function(event) {
  event.preventDefault();

  if(
    topText.value === '' ||
    botText.value === '' ||
    img.value === '') {
    alert('Please fill in all three inputs before generating a meme.');
    return; // if above true, doesn't continue with code below
  } 

  if(!img.value.includes('https')) {
    alert('Link must be URL and a secured site (e.g. https)');
    return;
  }

  const newDiv = document.createElement('div');
  newDiv.className = 'meme';

  if(topText.value && img.value && botText.value) {
    // creates unique div for Top Text
    const topTextDiv = document.createElement('div');
    topTextDiv.className = 'topText';
    topTextDiv.innerText = topText.value;
    newDiv.append(topTextDiv);
    div.append(newDiv);

    // creates unique div for Image
    const imgDiv = document.createElement('img');
    imgDiv.className = 'img';
    imgDiv.src = img.value;
    newDiv.append(imgDiv);
    div.append(newDiv);
  
    // creates unique div for Bottom Text
    const botTextDiv = document.createElement('div');
    botTextDiv.className = 'botText';
    botTextDiv.innerText = botText.value;
    newDiv.append(botTextDiv);
    div.append(newDiv);
    
    // creates button to delete entire meme
    const newButton = document.createElement('button');
    newButton.innerText = 'Remove';
    newButton.className = 'removeButton';
    newDiv.append(newButton);
    newButton.addEventListener('click', function(event) {
      event.target.parentElement.remove();
    })

    document.querySelector('form').reset();

  }
  });


  // if(topText.value) {
  //   newLi.innerText = topText.value;
  //   newButton.innerText = 'Remove';
  //   ul.append(newLi);
  //   newLi.append(newButton);
  //   newButton.addEventListener('click', function(event) {
  //   event.target.parentElement.remove();
  //   })
  // }

  // if(img.value) {
  //   newLi.innerText = img.value;
  //   newButton.innerText = 'Remove';
  //   ul.append(newLi);
  //   newLi.append(newButton);
  //   newButton.addEventListener('click', function(event) {
  //   event.target.parentElement.remove();
  //   })
  // }

  // if(botText.value) {
  //   newLi.innerText = botText.value;
  //   newButton.innerText = 'Remove';
  //   ul.append(newLi);
  //   newLi.append(newButton);
  //   newButton.addEventListener('click', function(event) {
  //   event.target.parentElement.remove();
  //   })
  // }  
  
  



// newLi.innerText = topText.value;
// newDiv.append(newLi);
// document.querySelector('form').reset();
// newButton.innerText = 'Remove';
// newLi.append(newButton);
// newButton.addEventListener('click', function(event) {
//   event.target.parentElement.remove();
// })




// else if(topText.value && img.value && botText.value) {
//   newLi.innerText = topText.value;
  
//   newButton.innerText = 'Remove';
  
//   newButton.addEventListener('click', function(event) {
//     event.target.parentElement.remove();

//     newLi.innerText = img.value;
//     newButton.innerText = 'Remove';

//     newLi.innerText = botText.value;
//     newButton.innerText = 'Remove';

//   })
// }
// ul.append(newLi);
// newLi.append(newButton);