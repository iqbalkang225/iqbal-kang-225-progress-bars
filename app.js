const btns = document.querySelectorAll('.btn');
const steps = document.querySelectorAll('.step');
const bars = document.querySelectorAll('.bar');

let counter = 1;

// Function for Numbered steps
const stepProgress = function(switchClass) {
  for(let step = 0; step < steps.length; step++){
    if (steps[step].classList.contains('step--' + (counter + 1))) {
      steps[step].classList[switchClass]('active');
    }
  }
}

//Function for In-between bars
const barProgress = function(switchClass) {
  for(let bar = 0; bar < bars.length; bar++){
    if (bars[bar].classList.contains('bar--' + counter)) {
      bars[bar].classList[switchClass]('active');
    }
  }
}

for(let btn = 0; btn < btns.length; btn++){
  btns[btn].addEventListener('click', () => {

    // Event Handler for next buttom
    if(btns[btn].classList.contains('next')){ 
      stepProgress('add');
      barProgress('add');      
      if(counter < steps.length) counter++;
    }

    // Event Handler for prev Button
    if(btns[btn].classList.contains('prev')){
      if(counter > 1) counter--;
      stepProgress('remove');
      barProgress('remove');
    }

  });
}

// Try to implement progrees on Numbered steps
for(let step = 0; step < steps.length; step++){
  steps[step].addEventListener('click', () => {
    counter = Number(steps[step].textContent) - 1;
    stepProgress('add');
    barProgress('add');
  });
}