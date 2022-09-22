import axios from 'axios'


export const postAPI = () => {
axios.post('https://neko-cafe-back.herokuapp.com/auth/test', {success: true})
    .then(res => {console.log(res.status + ': ' + res.statusText)})
    .catch(err => console.log(err))}

// export const postAPI = () => {
//     fetch('https://neko-cafe-back.herokuapp.com/auth/test', {
//             method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//             body: JSON.stringify({success: true})
//         })
//         .then(res => console.log(res.status + ': ' + res.statusText))
//         .catch(err => console.log(err.data.errorText))
// }