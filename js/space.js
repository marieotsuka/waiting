
  const ref = new Firebase("https://comment-2.firebaseio.com/space/");
  const form = document.querySelector("form");

  form.addEventListener("submit", postComment);

  const timeStamp = () => {
    let options = {
      month: '2-digit',
      day: '2-digit',
      year: '2-digit',
      hour: '2-digit',
      minute:'2-digit'
    };
    let now = new Date().toLocaleString('en-US', options);
    return now;
  };

  function postComment(e) {
    e.preventDefault();
    
      ref.push({
        time: timeStamp()
      });

  };

  ref.on("child_added", function(snapshot) {
    let comment = snapshot.val();
    addComment(comment.time);
  });

  const addComment = (timeStamp) => {
    comments.innerHTML = `<div class="bar"><div class="time">${timeStamp}</div></div>${comments.innerHTML}`;
  }

