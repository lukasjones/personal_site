var Blog = React.createClass({
	loadBlogs: function(){
		$.ajax({
			url: "/blogs/all",
			type: "get",
			dataType: 'json',
			success: function(blogs) {
				this.setState({blogs: blogs});
			}.bind(this),
			error: function(data){
				console.log("didn't work");
			}
		});
	},
	getInitialState: function(){
		return {blogs: []}
	},
	componentDidMount: function(){
		this.loadBlogs();
	},
	render: function(){
		var blogs = this.state.blogs;
		console.log(blogs);
		return (
			<div className="wrap">
				<div id="layout">
					<div id="main">
							<NavBar />
					</div>
				</div>

				<div id="layout">
					<div id="main">
							<BlogPost blogs={this.state.blogs}/>
					</div>
				</div>
			</div>
		);
	}
});

var NavBar = React.createClass({
	render: function(){
		return (
			<div>
				<a href="#menu" id="menuLink" className="menu-link">
			    <span></span>
				</a>

				<div id="menu">
		    <div className="pure-menu">
		        <a className="pure-menu-heading" href="/">Home</a>

		        <ul className="pure-menu-list">
		            <li className="pure-menu-item"><a href="#" className="pure-menu-link">Blog 1</a></li>
		            <li className="pure-menu-item"><a href="#" className="pure-menu-link">Blog 2</a></li>

		            <li className="pure-menu-item" className="menu-item-divided pure-menu-selected">
		                <a href="#" className="pure-menu-link">Blog 3</a>
		            </li>

		            <li className="pure-menu-item"><a href="#" className="pure-menu-link">Blog 4</a></li>
		        </ul>
			    </div>
				</div>
			</div>
		);
	}
});

var BlogPost = React.createClass({
	render: function(){
		return (
			// <h1 className="blog-title">{this.props.title}</h1>
			// <span className="blog-date">{this.props.date}</span>
			// <p className="blog-content">{this.props.content}</p>
			<div id="main">
			  <div className="header">
	        <h1>{this.props.title}</h1>
	        <h2>{this.props.date}</h2>
		    </div>

		    <div className="content">
	        <h2 className="content-subhead">Post Written By Lukas Jones</h2>
	        <p>
	        	{this.props.content}
	        </p>

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
