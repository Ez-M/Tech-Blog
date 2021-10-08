module.exports = {
    // the helper method 'format_time' will take in a timestamp and return a string with only the time
    post_link: (data) => {
      // We use the 'toLocaleTimeString()' method to format the time as H:MM:SS AM/PM
      return "/api/posts/"+data;
    },
  };
     