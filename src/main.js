
var CommentForm = React.createClass({
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
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="式場名を入力" ref="name" />

        <input type="submit" value="Post" />
      </form>
    );
  }
});

var Place = React.createClass({
  render: function() {
    return (
				<div className="place">
        <h2 className="">{this.props.name}</h2>
				<img className="" src={this.props.text} />
				<p className="">{this.props.text}</p>
				</div>
    );
  }
});


var PlaceList = React.createClass({
  render: function() {
    var placeNodes = this.props.data.map(function(place, index) {
      return (
        <Place name={place.name} text={place.text} key={index}>
          {place.name}{place.text}
        </Place>
      );
    });
    return (
      <div className="placeList">

				{placeNodes}
      </div>
    );
  }
});


var CommentBox = React.createClass({
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
      <div className="commentBox">
				<h1>式場一覧</h1>
        <p>式場一覧が出ます</p>
				<PlaceList data={this.state.data} />
      </div>
    );
  }
});


React.render(
  <CommentBox />,
  document.getElementById('content')
);
