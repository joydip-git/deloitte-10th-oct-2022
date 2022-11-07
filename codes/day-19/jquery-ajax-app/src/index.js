//1. using pure AJAX
/*
window.addEventListener(
    'DOMContentLoaded',
    function () {
        const button = this.document.querySelector('button.btn.btn-primary')
        //const button = $('button.btn.btn-primary')
        console.log(button)
        button.addEventListener(
            'click',
            function () {
                //console.log(this)
                //created XMLHttpRequest object (readyState=0)
                const reqeustObj = new XMLHttpRequest()
                console.log(`readystate=${reqeustObj.readyState}`)

                //providing handler (callback function) for readystatechange event (this event gets fired every time readystate property value changes [0=>1=>2=>3=>4]) of XMLHttpRequest object
                reqeustObj.addEventListener(
                    'readystatechange',
                    function () {
                        console.log(`readystatechange fired: readystate=${reqeustObj.readyState}`)

                        if (reqeustObj.readyState === 4 && reqeustObj.status === 200) {
                            const posts = JSON.parse(reqeustObj.responseText)
                            console.log(posts.slice(0, 5))
                        }
                    }
                )

                //XMLHttpRequest object is ready to send a request to the URL using GET method of HTTP protocol, asynchornously (readyState=1)
                reqeustObj.open('GET', 'https://jsonplaceholder.typicode.com/todos', true)

                //sending the request (readyState=2)
                reqeustObj.send()
            }
        )
    }
)
*/
//2. using fetch() API
// window.addEventListener(
//     'DOMContentLoaded',
//     function () {
//         const button = this.document.querySelector('button.btn.btn-primary')
//         button.addEventListener(
//             'click',
//             async function () {
//                 const responseObj = await fetch('https://jsonplaceholder.typicode.com/posts')
//                 const posts = await responseObj.json()
//                 console.log(posts.slice(0, 5))
//             }
//         )
//     }
// )

//3. using jQuery Ajax
$(function () {
    $('button.btn.btn-primary')
        .on(
            'click',
            async function () {
                // const responseObj = await fetch('https://jsonplaceholder.typicode.com/posts')
                // const posts = await responseObj.json()
                // console.log(posts.slice(0, 5))
                $.ajax({
                    method: 'GET',
                    url: 'https://jsonplaceholder.typicode.com/posts',
                    success: function (data) {
                        console.log(data.slice(0, 5))
                    },
                    error: function (err) {
                        console.log(err)
                    }
                })

            }
        )
})