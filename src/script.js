// Simulate Data Fetching Using Promises
function fetchUserProfile(){
    return new Promise((resolve) => {
        setTimeout(() => {
          resolve("user");
        }, 500);
      });
    }

function fetchUserPosts(){
return new Promise((resolve) => {
    setTimeout(() => {
        resolve(["my first post", "my second post", "my last post"]);
    }, 500);
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
            }}, 500);
        });
}

// Implement Sequential Data Fetching // Try/Catch for Error Handling

getUserContent();

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

// Refactor with Async/Await // Chaining Async Functions
function delay(ms) {
}

async function userProfile() {
    console.log('fetching Profile');
    await delay(2500);
    return { name: 'user' };
}

async function userPosts() {
    console.log('fetching Posts'); 
    await delay(2500);
    return ['post 1','post 2','post 3'];
}

async function userComments() {
    console.log('fetching Comments');
    await delay(2500);
    return ['comment 1','comment 2','comment 3'];
}

// Implement Parallel Data Fetching

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