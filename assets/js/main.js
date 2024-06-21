document.addEventListener("DOMContentLoaded", (event) => {
    // code for email subscribe 
    let inputBox = document.querySelector('footer input');
    document.querySelector('footer button').addEventListener('click', () => {
        if(inputBox.value !== ''){
                let email = inputBox.value;
                const emailPattern =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 
                const isValid = emailPattern.test(email);
                if(isValid){
                    let subscribe = localStorage.getItem('subscribe');
                    if(subscribe !== email){
                        localStorage.setItem('subscribe', email);
                        alert('Thank you for subscribing!')
                        inputBox.value = '';
                    }else{
                        alert(`You're already subscribed.\nTry with another email address.`);
                    }
                }else{
                    alert("Enter a Valid email like this\nexample123@gmail.com")
                }
        }else{
            alert("Please Enter a Email...");
        }
    })
});
// End code for email subscribe 

// code for search box 
$(document).ready(function(){
    $("nav form button").on("click", function(e) {
        e.preventDefault();
        var value = $('nav input').val().toLowerCase();
        if(value !== ''){
            $("main .card-title").filter(function() {
                if($(this).text().toLowerCase().indexOf(value) > -1){
                    $('.card').css('display', 'none')
                    $(this).parents('.card').show()
                }
            });
        }else{
            
            alert('Please enter search parameter');
        }
        console.log(value)
    
    });
});
// End code for search box 