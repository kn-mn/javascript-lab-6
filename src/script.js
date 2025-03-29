// Simulate Data Fetching Using Promises
function fetchUserProfile(){
    return new Promise((resolve) => {
        setTimeout(() => {
          resolve("user");
        }, 1000);
      });
    }

function fetchUserPosts(){
return new Promise((resolve) => {
    setTimeout(() => {
        resolve(["my first post", "my second post", "my last post"]);
    }, 1000);
    });
}

function fetchUserComments(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() >= 0.5) {
                resolve(["good job", "thank you"]);
            }
            else {
                reject("error");
            }}, 1000);
        });
}

// Implement Sequential and Parallel Data Fetching // Try/Catch for Error Handling // Chaining Async Functions
async function getUserContent() {
    try{
        const profile = await fetchUserProfile();
        console.log('fetching Profile...', profile);
        const posts = await fetchUserPosts();
        console.log('fetching Posts...', posts);
        const comments = await fetchUserComments();
        console.log('fetching Comments...', comments);
    } catch (error) {
        console.error('Error fetching data', error);
    }
}

// Refactor with Async/Await
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function userProfile() {
    console.log('fetching Profile');
    await delay(1000);
    return { name: 'user' };
}

async function userPosts() {
    console.log('fetching Posts'); 
    await delay(1000);
    return ['post 1','post 2','post 3'];
}

async function userComments() {
    console.log('fetching Comments');
    await delay(1000);
    return ['comment 1','comment 2','comment 3'];
}

userProfile()
.then(profileResult => {
    console.log(profileResult);
  });
userPosts()
  .then(postsResult => {
    console.log(postsResult);
  });
userComments()
  .then(commentsResult => {
    console.log(commentsResult);
  });
  
// Implement Sequential and Parallel Data Fetching // Try/Catch for Error Handling // Chaining Async Functions
getUserContent();