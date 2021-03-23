const posts = [
  {
    title: "Post One",
    body: "This is post one",
  },
  {
    title: "Post Two",
    body: "This is post two",
  },
];

function getPost() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`; //sets output to post title
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    //resolve = when you want to resolve a promise, reject = error/somethign goes wrong
    setTimeout(() => {
      posts.push(post);

      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("Error: Something went wrong");
      }
    }, 2000);
  });
}

//Single Promise
// createPost({
//     title: "Post Three",
//     body: "This is post three"
// }).then(getPost)
// .catch(err => console.log(err)); // is error= true then this will return clean error

// Async / Await
// async function init(){
//     await createPost({ //waits for this to be done before getPost is called, have to have async before function
//             title: "Post Three",
//             body: "This is post three"
//         });
//         getPost();
// }

// init();


//Async / Await with fetch
async function fetchUsers(){
    const res = await fetch("https://jsonplaceholder.typicode.com/users");

    const data = await res.json();
    console.log(data);
}

fetchUsers();


//Promise.all
// const promise1 = Promise.resolve("Hello World");
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 2000, "Goodbye");
// });
// const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()); //.then formats JSON

// Promise.all([promise1, promise2, promise3, promise4]).then((values) =>
//   console.log(values)
// ); //takes however long the longest promise is to return


