const url = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]


Promise.all(url.map(url => {
    return fetch(url).then(resp => resp.json())

})).then(results =>{
    console.log(results[0])
    console.log(results[1])
    console.log(results[2])
}).catch(() => console.log('errororor'))



async function fetchUsers() {
    const resp = await fetch ('https://jsonplaceholder.typicode.com/users')
    const data = await resp.json();
    console.log(data)
}

///////////////////////////

const getData = async function name() {
    try {
        const [users, post, albums] = await Promise.all(url.map(url => 
            fetch(url).then(resp => resp.json())
        ));
        console.log(users, post, albums);
    } catch (err) {

           console.log('ups')
    }
    
   
}

const animals = {
    tiger: 23,
    lion: 5,
    monkey: 2
}

const {tiger, ...rest} = animals



async function fetchUsers() {
    const resp = await fetch ('https://jsonplaceholder.typicode.com/users')
    const data = await resp.json()
    console.log(data);
};




const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
];

const gettData = async function () {
    const [users, posts, albums ] = await Promise.all(urls.map(url => {
        return fetch(url).then(resp => resp.json())
    }));
    console.log('users', users)
    console.log('posts', posts)
    console.log('albums', albums)
}



const loopThroughtUrls = url => {
    for(url of urls)
    console.log(url)
}

const getData2 = async function () {
    const arrayOfPromises  = urls.map(url => fetch(url));
    for await (let request of arrayOfPromises) {
        const data = await request.json();
        console.log(data);
    };
    
};

const promiseOne = new Promise((resolve, reject) => 
    setTimeout(resolve, 3000));
const promiseTwo = new Promise((resolve, reject) =>
    setTimeout(reject, 3000));

Promise.allSettled([promiseOne, promiseTwo]).then(data => console.log(data))
    .catch(e => console.log('something failed', e));





