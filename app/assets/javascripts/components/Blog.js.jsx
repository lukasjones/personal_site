var Blog = React.createClass({
	changeBlog: function(blogId){
		this.setState({currentBlogId: blogId})
	},
	loadBlogs: function(){
		$.ajax({
			url: "/blogs/all",
			type: "get",
			dataType: 'json',
			success: function(blogs) {
				this.setState({blogs: blogs, currentBlogId: blogs.length-1});
			}.bind(this),
			error: function(data){
				console.log("didn't work");
			}
		});
	},
	getInitialState: function(){
		return {blogs: [], currentBlogId: null}
	},
	componentDidMount: function(){
		this.loadBlogs();
	},
	render: function(){
		var self = this;
		var blogs = this.state.blogs;
		console.log(this.state.blogs);

		return (
			<div className="wrap">
				<div id="layout">
					<div id="main">
							<NavBar blogSelf={self} blogs={this.state.blogs} currentBlogId={this.state.currentBlogId}/>
					</div>
				</div>

				<div id="layout">
					<div id="main">
							<BlogPost blogs={this.state.blogs} currentBlogId={this.state.currentBlogId} />
					</div>
				</div>
			</div>
		);
	}
});

var NavBar = React.createClass({
	render: function(){
		var currentBlogId = this.props.currentBlogId;
		var blogSelf = this.props.blogSelf;
		return (
			<div>
				<a href="#menu" id="menuLink" className="menu-link">
			    <span></span>
				</a>

				<div id="menu">
		    <div className="pure-menu">
		        <a className="pure-menu-heading" href="/">Home</a>

		        <ul className="pure-menu-list">
		        		{
		        			this.props.blogs.map(function(blog){
			        			if (currentBlogId !== null) {
			        				if ((blog.id - 1) === currentBlogId) {
			        					return (
			        						<SelectedNavItem href={blog.id}>{blog.title}</SelectedNavItem>
			        					)
			        				} else {
				        				return (
				        					<NavItem blogSelf={blogSelf} href={blog.id}>{blog.title}</NavItem>
				        				);
			        				}
				        		} 
		        			})
		        		}
		        </ul>
			    </div>
				</div>
			</div>
		);
	}
});

var NavItem = React.createClass({
	changeBlog: function(event){
		event.preventDefault();
		this.props.blogSelf.changeBlog(this.props.href - 1);
	},
	render: function(){
		return (
			<li className="pure-menu-item"><a href={this.props.href} onClick={this.changeBlog} className="pure-menu-link">{this.props.children}</a></li>
		)
	}
})

var SelectedNavItem = React.createClass({
	doNothing: function(event){
		event.preventDefault();
		console.log('that\'s the current blog nard');
	},
	render: function(){
		return (
			<li className="pure-menu-item" className="menu-item-divided pure-menu-selected">
			    <a href={this.props.href} onClick={this.doNothing} className="pure-menu-link">{this.props.children}</a>
			</li>
		)
	}
})



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
				<div id="main">
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
		return (
			<div></div>

		);
	}
});



var Comment = React.createClass({
	render: function(){
		return (
			<div></div>

		);
	}
});



var CommentForm = React.createClass({
	render: function(){
		return (
			<div></div>

		);
	}
});
