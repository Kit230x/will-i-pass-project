const dropdownBtn = document.getElementById('dropdownBtn');
const dropdownCont = document.getElementById('dropdownCont');

    dropdownBtn.addEventListener('click', function() {
        if (dropdownCont.style.display === 'none' || dropdownCont.style.display === '') {
            dropdownCont.style.display = 'block';
        } else {
            dropdownCont.style.display = 'none';
        }
    });
