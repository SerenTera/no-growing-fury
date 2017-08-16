module.exports = function nogrowingfury(dispatch) {
	let cid
	
	dispatch.hook('S_LOGIN', 2, event => {
		cid=event.cid
	})
	
	dispatch.hook('S_ABNORMALITY_BEGIN', 2, event => {
		if(!event.source.equals(cid) && event.id===10153040) return false
	})
}
