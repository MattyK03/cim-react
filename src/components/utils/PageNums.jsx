import React, { useState } from 'react';

const PageNums = () => {
    const maxNumber = 20;

	const pageNumbers = [...Array(maxNumber).keys()].map(i => i + 1);
    const [activePage, setActivePage] = useState(1);  
    
    const handleClick = pageNumber => {
        setActivePage(pageNumber);
    };

    var startIndex = 0;
    var endIndex = 0;

    if (activePage <= 4) {
		startIndex = 0;
        endIndex = 8;
	} else if (activePage >= maxNumber - 3) {
		startIndex = maxNumber - 8 
        endIndex = maxNumber;
	} else {
		startIndex = activePage - 5 
        endIndex = activePage + 3;
	}
    const visiblePageNumbers = pageNumbers.slice(startIndex, endIndex + 1);



	return (
		<div className="pageNumbers">
			<button className={`${activePage === 1 ? "none" : "pageSwapBtn prev invert-btn btn-with-arrow"}`} onClick={() => setActivePage(activePage - 1)}>
				<svg className="arrow leftArrow" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path className="arrow leftArrow" d="M9.7168 5L2.99972 12L9.7168 19" stroke="#0074FC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					<line className="arrow leftArrow" x1="1" y1="-1" x2="16.7331" y2="-1" transform="matrix(1 0 0 -1 3.26758 11.0317)" stroke="#0074FC" stroke-width="2" stroke-linecap="round"/>
				</svg>

				<p>Назад</p>
			</button>

			<div className="nums__group">
				{visiblePageNumbers.map(number => {
					return (
						<button key={number} className={activePage === number ? "activePageNum" : "pageNum"} onClick={() => handleClick(number)}>
							{number}
						</button>
					);
				})}
				<span className={`${activePage >= maxNumber - 4 ? 'none' : 'pageNum'}`}>...</span>
			</div>

			<button className={`${activePage === maxNumber ? "none" : "pageSwapBtn next invert-btn btn-with-arrow"}`} onClick={() => setActivePage(activePage + 1)}>
				<p>Вперёд</p>
				<svg className="arrow rightArrow" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path className="arrow rightArrow" d="M14.2832 5L21.0003 12L14.2832 19" fill='none' stroke="#0074FC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					<line className="arrow rightArrow" x1="19.7324" y1="12.0317" x2="3.99936" y2="12.0317" stroke="#0074FC" stroke-width="2" stroke-linecap="round"/>
				</svg>

			</button>
		</div>
	);
    
};


export default PageNums;
