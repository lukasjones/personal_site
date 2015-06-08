var Blog = React.createClass({
	render: function(){
		return (
			<div className="blog" id="layout">
				<div id="main">
					<div className="content">
						<NavBar />
						<BlogPost />
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
				        <a className="pure-menu-heading" href="#">Company</a>

				        <ul className="pure-menu-list">
				            <li className="pure-menu-item"><a href="#" className="pure-menu-link">Home</a></li>
				            <li className="pure-menu-item"><a href="#" className="pure-menu-link">About</a></li>

				            <li className="pure-menu-item" className="menu-item-divided pure-menu-selected">
				                <a href="#" className="pure-menu-link">Services</a>
				            </li>

				            <li className="pure-menu-item"><a href="#" className="pure-menu-link">Contact</a></li>
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
			<div>Blog Post</div>
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
