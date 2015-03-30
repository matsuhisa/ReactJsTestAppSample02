
var CommentForm = React.createClass({displayName: "CommentForm",
  render: function() {
    return (
      React.createElement("div", {className: "CommentForm"}, 
        "Hello"

      )
    );
  }
});

var CommentBox = React.createClass({displayName: "CommentBox",
  render: function() {
    return (
      React.createElement("div", {className: "commentBox"}, 
        "Hello, world! I am a CommentBox.", 
			React.createElement(CommentForm, null)
      )
    );
  }
});


React.render(
  React.createElement(CommentBox, null),
  document.getElementById('content')
);
