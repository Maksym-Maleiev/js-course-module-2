function slugify(title) {
  // Change code below this line
  let slug = '';

  const normalized = title.toLowerCase();
  slug = normalized.split(' ').join('-');

  return slug;
  // Change code above this line
}

console.log(slugify('Arrays for begginers'));

console.log(slugify('English for developer'));

console.log(slugify('Ten secrets of JavaScript'));

console.log(slugify('How to become a JUNIOR developer in TWO WEEKS'));
