
document.writeln('<div id="status"><div id="content"></div><div id="timeago"></div></div>');
fetch("https://status.cafe/users/pixie/status.json")
  .then( r => r.json() )
  .then( r => {
    if (!r.content.length) {
      document.getElementById("statuscafe-content").innerHTML = "no status!"
      return
    }
    document.getElementById("content").innerHTML = '"' + r.content + '"'
    document.getElementById("timeago").innerHTML = r.timeAgo
  })
