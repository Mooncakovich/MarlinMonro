function onEntry(entry) {
    entry.forEach( (change) => {
    if (change.isIntersecting) {
     change.target.classList.add('act');
    } else {
        change.target.classList.remove('act');
    }
  });
}

let options_bottom = {
  threshold: [0.6] };
let observer_bottom = new IntersectionObserver(onEntry, options_bottom);
let elements_bottom = document.querySelectorAll('.bottom');

for (let elm of elements_bottom) {
  observer_bottom.observe(elm);
}

