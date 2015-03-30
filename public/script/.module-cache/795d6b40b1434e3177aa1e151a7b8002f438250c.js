
var CommentForm = React.createClass({displayName: "CommentForm",
  handleSubmit: function(e) {
    e.preventDefault();
    var author = this.refs.author.getDOMNode().value.trim();
    var text = this.refs.text.getDOMNode().value.trim();
    if (!text || !author) {
      return;
    }
    this.props.onCommentSubmit({author: author, text: text});
    this.refs.author.getDOMNode().value = '';
    this.refs.text.getDOMNode().value = '';
  },
  render: function() {
    return (
      React.createElement("form", {className: "commentForm", onSubmit: this.handleSubmit}, 
        React.createElement("input", {type: "text", placeholder: "式場名を入力", ref: "name"}), 

        React.createElement("input", {type: "submit", value: "Post"})
      )
    );
  }
});

var PlaceList = React.createClass({displayName: "PlaceList",
  render: function() {
    var placeNodes = this.props.data.map(function(place, index) {
      return (
        React.createElement(Place, {place: place.id, key: index}, 
          place.text
        )
      );
    });
    return (
      React.createElement("div", {className: "commentList"}, 
        placeNodes
      )
    );
  }
});


var CommentBox = React.createClass({displayName: "CommentBox",
  getInitialState: function() {
    return {data: [
    {
        "name": "式場名",
        "text": "テキスト"
    }

		]};
  },

  render: function() {
    return (
      React.createElement("div", {className: "commentBox"}, 
				React.createElement("h1", null, "式場一覧"), 
        React.createElement("p", null, "Hello, world! I am a CommentBox."), 
				React.createElement(CommentForm, null), 
				React.createElement(PlaceList, {data: this.state.data})
      )
    );
  }
});


React.render(
  React.createElement(CommentBox, null),
  document.getElementById('content')
);
