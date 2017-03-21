
  const ref = new Firebase("https://comment-2.firebaseio.com/type/");
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
    let text = document.getElementById("text").value;
    // let comment = document.getElementById("comment").value;

    // // if (name && comment) {
      ref.push({
        text: text,
        // comment: comment,
        time: timeStamp()
      });
    // }

    document.getElementById("text").value = '';
    // document.getElementById("comment").value = '';
  };

  ref.on("child_added", function(snapshot) {
    let comment = snapshot.val();
    addComment(comment.text, comment.time);
  });

  const addComment = (text, timeStamp) => {
    comments.innerHTML = `<div class="post"><div class="text">${text}</div><div class="time">${timeStamp}</div></div>${comments.innerHTML}`;
  }

