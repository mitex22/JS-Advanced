function search() {

   // targets
   const listItems = Array.from(document.querySelectorAll('#towns li'));
   const searchString = document.querySelector('#searchText').value;
   const result = document.querySelector('#result');

   // clear
   result.textContent = '';
   listItems.forEach((el) => {
      el.style.fontWeight = 'normal';
      el.style.textDecorationLine = 'none';
   });

   let matchesCount = 0;

   listItems.forEach((el, i) => {
      if (el.textContent.includes(searchString) && searchString !== '') {
         el.style.fontWeight = 'bold';
         el.style.textDecorationLine = 'underline';
         matchesCount++;
      }
   })

   result.textContent = `${matchesCount} matches found`;

}
