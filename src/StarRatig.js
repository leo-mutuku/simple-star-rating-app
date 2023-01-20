import * as React from 'react';


function StarRating() {
const [stars, setStars] = React.useState([]);
const [rating, setRating] = React.useState(0);
const [hovered, setHovered] = React.useState(0);
const [selectedIcon, setSelectedIcon] = React.useState("★")
const [deselectedIcon, setDeselectedIcon] = React.useState("☆")


return (
    <div>
                <div className="rating" style={{ fontSize: '5em', color: "#38d39f" }}>

                    {stars.map(star => {
                        return (
                            <span
                                style={{ cursor: 'pointer' }}
                                onClick={() => { this.changeRating(star); }}
                                onMouseEnter={() => { this.hoverRating(star); }}
                                onMouseLeave={() => { this.hoverRating(0); }}
                            >
                                {rating < star ?
                                    hovered < star ? deselectedIcon : selectedIcon
                                    :
                                    selectedIcon
                                }
                            </span>
                        );
                    })}

                </div>
            </div>
)

}

export default StarRating
