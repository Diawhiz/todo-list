document.addEventListener('DOMContentLoaded', function() {

    // By default, submit button is disabled
    document.querySelector('#add-button').disabled = true;

    document.querySelector('#input-box').onkeyup = () => {
      if (document.querySelector('#input-box').value.length > 0) {
          document.querySelector('#add-button').disabled = false;
      }else {
          document.querySelector('#add-button').disabled = true;
      }
    }


    document.querySelector('form').onsubmit = () => {
        const task = document.querySelector('#input-box').value;

        const li = document.createElement("li");
        const check = document.createElement("span")
        const remove = document.createElement("span")
        li.className = 'list-container';

        
        check.innerHTML = '<i class="far fa-circle fa-lg" aria-hidden="true"></i>';
        li.innerHTML = task;
        remove.innerHTML = '<i class="fa fa-x fa-lg" aria-hidden="true"></i>';
        

        document.querySelector('#list-container').appendChild(li);
        document.querySelector('#delete').append(remove);
        document.querySelector('#check').append(check);
        document.querySelector('#input-box').value = '';

        // Stops form from submitting
        return false;
    }
});