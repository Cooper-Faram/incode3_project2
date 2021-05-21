document.getElementById('submit').addEventListener('click', function() {

    const form = document.querySelector('#form')
    const formLast = document.querySelector('#last')
    const formFirst = document.querySelector('#first')
    const formEmail = document.querySelector('#email')
    const formPhone = document.querySelector('#phone')
    const formMessage = document.querySelector('#message')
    const formButton = document.querySelector('#submit')
    const popUp = document.querySelector('modal')

    form.onsubmit = (e) => {
        e.preventDefault()

        validLast = /[^0-9\.\,\"\?\!\;\:\#\$\%\&\(\)\*\+\-\/\<\>\=\@\[\]\\\^\_\{\}\|\~]+/.test(formLast.value)
        validFirst = /[^0-9\.\,\"\?\!\;\:\#\$\%\&\(\)\*\+\-\/\<\>\=\@\[\]\\\^\_\{\}\|\~]+/.test(formFirst.value)
        validPhone = /^\s*(?:\+?(\d{1,3}))?([-, (]*(\d{3})[-, ]*(\d{2,4})(7:[-,x ]*(\d+))?)\s*$/gm.test(formPhone.value)
        validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formEmail.value)
        // another version of email is: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        let emptyPhone = false

        if (phone.value === '') {
            emptyPhone = true
        }

        if (validLast && validFirst && validEmail === true) {
            console.log('Correct values input.')

            console.log(formFirst.value)
            console.log(formLast.value)
            console.log(formPhone.value)
            console.log(formEmail.value)
            console.log(formMessage.value)

            document.querySelector('.modal').style.display = 'flex';
    
            document.querySelector('.mbutton').addEventListener('click', function(){
            document.querySelector('.modal').style.display = 'none';
        });
            form.reset()
        } else {
            alert('Incorrect values input.')
        }
        
    }

});