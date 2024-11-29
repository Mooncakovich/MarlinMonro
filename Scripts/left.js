function onEntry(entry) {
    entry.forEach( (change) => {
    if (change.isIntersecting) {
     change.target.classList.add('act');
    } else {
        change.target.classList.remove('act');
    }
  });
}

let options_left = {
  threshold: [0.5] };
let observer_left = new IntersectionObserver(onEntry, options_left);
let elements_left = document.querySelectorAll('.left');

for (let elm of elements_left) {
  observer_left.observe(elm);
}

