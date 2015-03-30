
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

var Place = React.createClass({displayName: "Place",
  render: function() {
    return (
				React.createElement("div", {className: "place"}, 
        React.createElement("h2", {className: "name"}, this.props.name), 
				React.createElement("img", {className: "text", src: this.props.text}), 
				React.createElement("p", {className: "text2"}, this.props.text)
				)
    );
  }
});


var PlaceList = React.createClass({displayName: "PlaceList",
  render: function() {
    var placeNodes = this.props.data.map(function(place, index) {
      return (
        React.createElement(Place, {name: place.name, text: place.text, key: index}, 
          place.name, place.text
        )
      );
    });
    return (
      React.createElement("div", {className: "placeList"}, 

				placeNodes
      )
    );
  }
});


var CommentBox = React.createClass({displayName: "CommentBox",
  getInitialState: function() {
    return {data: [
    {
        "name": "式場名1",
        "text": "https://farm8.staticflickr.com/7605/16937509026_ff0b7efb24_q_d.jpg"
    },
    {
        "name": "式場名2",
        "text": "https://farm8.staticflickr.com/7605/16937509026_ff0b7efb24_q_d.jpg"
    }

		]};
  },
  render: function() {
    return (
      React.createElement("div", {className: "commentBox"}, 
				React.createElement("h1", null, "式場一覧"), 
        React.createElement("p", null, "式場一覧が出ます"), 
				React.createElement(PlaceList, {data: this.state.data})
      )
    );
  }
});


React.render(
  React.createElement(CommentBox, null),
  document.getElementById('content')
);
