import React from 'react'

const Panel = ({activeRepo}) => {
	return (
			<div className='ma5'>
				<div>
					<div className='black-70 f2'>{activeRepo.full_name}</div>
					<a href={activeRepo.html_url} className='link underline blue hover-orange grow'>go to repo</a>
					<div className='black-70 grow mt4'>{activeRepo.forks}<span className='blue'> forks</span></div>
					<div className='black-70 grow mt2'>{activeRepo.open_issues}<span className='blue'> issues</span></div>
					<div className='black-70 grow mt2'>{activeRepo.watchers}<span className='blue'> watchers</span></div>
					<div className='black-70 grow mt2'>{activeRepo.score}<span className='blue'> score</span></div>
				</div>
			</div>
		)
}

export default Panel