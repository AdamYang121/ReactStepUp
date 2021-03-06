var React = require('react');
var PropTypes = require('prop-types');


function PlayerPreview (props) {
	return (
		<div>
			<div className='column'>
				<img 
					className='avatar'
					src={props.avatar}
					alt={'Avator for' + props.username }
				/>
				<h2 className='username'>@{props.username}</h2>
			</div>
			{props.children}
		</div>
	)
}


// function Link (){
// 	return(
// 		<a>
// 			{props.children}
// 		</a>
// 		)
// }

// <Link>
// 	Some Text
// </Link>

PlayerPreview.propTypes = {
	avatar: PropTypes.string.isRequired,
	username: PropTypes.string.isRequired,
}


module.exports = PlayerPreview;