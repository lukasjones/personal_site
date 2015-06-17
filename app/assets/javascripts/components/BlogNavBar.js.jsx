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