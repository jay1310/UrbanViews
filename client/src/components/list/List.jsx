import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons"
import { useRef, useState } from "react"
import ListItem from "../listItem/ListItem"
import "./list.scss"

export default function List({ list }) {
    const [isMoved, setIsMoved] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);

    const listRef = useRef()

    //Handles Click on the arrow to move movie list
    const handleClick = (direction) => {

        setIsMoved(true);
        //gives distance from left-most part of page and topmost part of page
        let distance = listRef.current.getBoundingClientRect().x - 50;
        //moves listItems to left
        if (direction === "left" && slideNumber > 0) {
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${230 + distance}px)`;
        }
        //moves listItems to right
        if (direction === "right" && slideNumber < 5) {
            setSlideNumber(slideNumber + 1);
            listRef.current.style.transform = `translateX(${-230 + distance}px)`;
        }
    }

    return (
        <div className="list">
            <span className="listTitle">{list.title}</span>
            <div className="wrapper">
                <ArrowBackIosOutlined
                    className="sliderArrow left"
                    onClick={() => handleClick("left")}
                    style={{ display: !isMoved && 'none' }}
                />
                <div className="container" ref={listRef} >
                    {
                        list.content.map((item, i) => (
                            <ListItem index={i} item={item} />
                        ))
                    }


                </div>
                <ArrowForwardIosOutlined className="sliderArrow right" onClick={() => handleClick('right')} />
            </div>
        </div>
    )
}