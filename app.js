const btns = document.querySelectorAll('.btn');
const steps = document.querySelectorAll('.step');
const bars = document.querySelectorAll('.bar');

let i = 1;

// Function for Numbered steps
const stepProgress = function(switchClass) {
  for(let step = 0; step < steps.length; step++){
    if (steps[step].classList.contains('step--' + (i + 1))) {
      steps[step].classList[switchClass]('active');
    }
  }
}

//Function for  In-between bars
const barProgress = function(switchClass) {
  for(let bar = 0; bar < bars.length; bar++){
    if (bars[bar].classList.contains('bar--' + i)) {
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
      if(i < 5) i++;
    }

    // Event Handler for prev Button
    if(btns[btn].classList.contains('prev')){
      if(i > 1) i--;
      stepProgress('remove');
      barProgress('remove');
    }

  });
}