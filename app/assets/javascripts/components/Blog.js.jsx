var Blog = React.createClass({
	changeBlog: function(blogId){
		this.setState({currentBlogId: blogId})
	},
	loadBlogs: function(){
		$.ajax({
			url: "/blogs/all",
			type: "get",
			dataType: 'json',
			success: function(blogsObject) {
				// [{blog: blog, comments: comments}]
				this.setState({blogsObject: blogsObject, currentBlogId: blogsObject.length-1});
			}.bind(this),
			error: function(data){
				console.log("didn't work");
			}
		});
	},
	getInitialState: function(){
		return {blogsObject: [], currentBlogId: null}
	},
	componentDidMount: function(){
		this.loadBlogs();
	},
	render: function(){
		var self = this;
		var blogs = this.state.blogsObject.map(function(blogObject){ return blogObject["blog"]});
		// console.log(this.state.blogs);

		return (
			<div className="wrap">
				<div id="layout">
					<div id="main">
							<NavBar blogSelf={self} blogs={blogs} currentBlogId={this.state.currentBlogId}/>
					</div>
				</div>

				<div id="layout">
					<div id="main">
							<BlogPost blogs={blogs} currentBlogId={this.state.currentBlogId} />
							<CommentForm blogSelf={self} />
							<CommentList currentBlogId={this.state.currentBlogId} blogsObject={this.state.blogsObject}/>
					</div>
				</div>
			</div>
		);
	}
});



var BlogPost = React.createClass({
	render: function(){
		var currentBlogId = this.props.currentBlogId;
		var currentBlog = this.props.blogs[currentBlogId]
		
		var date = currentBlogId !== null ? currentBlog.created_at.match(/\d{4}-\d{2}-\d{2}/).join("") : "date"
		var title = currentBlogId !== null ? currentBlog.title : "title"
		var content = currentBlogId !== null ? currentBlog.content : "title"
			return (
				// <h1 className="blog-title">{this.props.title}</h1>
				// <span className="blog-date">{this.props.date}</span>
				// <p className="blog-content">{this.props.content}</p>
				<div>
				  <div className="header">
		        <h1>{title}</h1>
		        <h2>{date}</h2>
			    </div>

			    <div className="content">
		        <h2 className="content-subhead">Post Written By Lukas Jones</h2>
		        <p dangerouslySetInnerHTML={{__html: content}} />

			    </div>
				</div>
			);
		}
});


var CommentList = React.createClass({
	render: function(){
		var comments = "hey ya"
		if (this.props.currentBlogId !== null) {
			comments = this.props.blogsObject[this.props.currentBlogId]["comments"];
			comments = comments.map(function(comment){
				var date = comment.created_at.match(/\d{4}-\d{2}-\d{2}/).join("");
				return <Comment name={comment.name} content={comment.content} date={date} />
			})
			console.log(comments);
		}
		return (
			<div className="commentList content">
				{comments}
			</div>
		);
	}
});



var Comment = React.createClass({
	render: function(){
		return (
			<div className="comment">
				<div className="comment-wrap">
					<img src="/assets/user-icon" alt="User Image" />
				</div>
				<div className="comment-wrap-wrap">
					<div className="comment-head">{this.props.name} &bull; {this.props.date}</div>
					<p className="content">{this.props.content}</p>
				</div>					
			</div>

		);
	}
});



var CommentForm = React.createClass({
	handleSubmit: function(e){
		e.preventDefault();
		var formData = $(this).serialize();
		$.ajax({
			url: "#",
			type: "post",
			data: formData,
			success: function(comment){
				console.log("comment submited to the database");
				console.log(comment);
			}.bind(this),
			error: function(){
				console.log("Comment not submited to the database");
			}

		})
	},
	render: function(){
		return (
			<div>
				<img src="/assets/user-icon" alt="User Image" />
				<form className="comment-form" onSubmit={this.handleSubmit}>
					<input type="text" name="name" placeholder="Name (optional)" />
					<textarea name="content" placeholder="Write your comment here">
					</textarea>
					<input type="submit" value="Comment!" />

				</form>
			</div>

		);
	}
});
