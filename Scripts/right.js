function onEntry(entry) {
    entry.forEach( (change) => {
    if (change.isIntersecting) {
     change.target.classList.add('act');
  } else {
        change.target.classList.remove('act');
    }
  });
}

let options_right = {
  threshold: [0.5] };
let observer_right = new IntersectionObserver(onEntry, options_right);
let elements_right = document.querySelectorAll('.right');

for (let elm of elements_right) {
  observer_right.observe(elm);
}

