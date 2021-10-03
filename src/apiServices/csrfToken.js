export function GetCsrfToken(){
    fetch(
        'http://127.0.0.1:8000/get-csrf-token/'
    )
    .then(rensponse =>{
        return rensponse.json()
    })
    .then((data) => {
        console.log(data)
        
    })

}


function getToken(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
var csrftoken = getToken('csrftoken');

export function PostRequest(url, data){
    fetch(
        url,
        {
            method : 'POST',
            credentials: 'same-origin',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                // "X-CSRFToken" : csrftoken,
            },
            body:JSON.stringify(data),
        }
        
    )
    .then(rensponse =>{
        return rensponse.json()
    })
    // .then((data) => {
    //     setPaymentResp(data)
    //     setIsLoading(false)
        
    // })
}