import React, { useState } from 'react';

import rightArrow from "../../rightArrow.svg"
import leftArrow from "../../leftArrow.svg"

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
				<img src={leftArrow} alt="" className="arrow leftArrow" />
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
				<img src={rightArrow} alt="" className="arrow rightArrow" />
			</button>
		</div>
	);
    
};


export default PageNums;
