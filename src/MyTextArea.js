import React, { Component } from "react";
import "./MyTextArea.css";

class MyTextArea extends Component {
    state = {
        isHidden: true
    }

    _toggleHidden () {
        this.setState ({
            isHidden: !this.state.isHidden
        })
    }

    /*
    getScrollOffsets = (w) => {
        w = w || window;
        if (w.pageXOffset != null) {
            return { x: w.pageXOffset, y: w.pageYOffset };
        }

        var d = w.document;
        if (document.compatMode == "CSS1Compat") {
            return { x: d.documentElement.scrollLeft, y: d.documentElement.scrollTop };
        }

        return { x: d.body.scrollLeft, y: d.body.scrollTop };
    }

    drag = (elementToDrag, event) => {
        var scroll = getScrollOffsets();
        var startX = event.clientX + scroll.x;
        var startY = event.clientY + scroll.y;

        var origX = elementToDrag.offsetLeft;
        var origY = elementToDrag.offsetTop;

        var deltaX = startX - origX;
        var deltaY = startY - origY;

        if (document.addEventListener) {
            document.addEventListener("mousemove", moveHandler, true);
            document.addEventListener("mouseup", upHandler, true);
        } else if (document.attachEvent) {
            elementToDrag.setCapture();
            elementToDrag.attachEvent("onmousemove", moveHandler);
            elementToDrag.attachEvent("onmouseup", upHandler);
            elementToDrag.attachEvent("onlosecapture", upHandler);
        }

        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }

        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }

        moveHandler = (e) => {
            if (!e) {
                e = window.event;
            }

            var scroll = getScrollOffsets();
            elementToDrag.style.left = (e.clientX + scroll.x - deltaX) + "px";
            elementToDrag.style.top = (e.clientY + scroll.y - deltaY) + "px";

            if(e.stopPropagation) {
                e.stopPropagation();
            } else {
                e.cancelBubble = true;
            }
        }

        upHandler = (e) => {
            if (!e) e = window.event;

            if (document.removeEventListener) {
                document.removeEventListener("mouseup", upHandler, true);
                document.removeEventListener("mousemove", moveHandler, true);
            } else if (document.detachEvent) {
                elementToDrag.detachEvent("onlosecapture", upHandler);
                elementToDrag.detachEvent("onmouseup", upHandler);
                elementToDrag.detachEvent("onmousemove", moveHandler);
                elementToDrag.releaseCapture();
            }

            if (e.stopPropagation) {
                e.stopPropagation();
            } else {
                e.cancelBubble = true;
            }
        }
    }
    */

    render() {
        return (
            <div className='fixed'>
                <div onClick={this._toggleHidden.bind(this)}>
                    T
                </div>
                <div>
                    {!this.state.isHidden && <TextArea />}
                </div>
            </div>
        )
    }
}

export default MyTextArea;

class TextArea extends Component {
    render() {
        return (
            <div className='TextArea'>
                <div className='TextArea--top'>
                    <div className='TextArea--top--content'>a</div>
                    <div className='TextArea--top--content'>b</div>
                    <div className='TextArea--top--content'>c</div>
                    <div className='TextArea--top--content'>d</div>
                </div>
                <div className='TextArea--main' contentEditable='true'>매인</div>
                <div className='TextArea--bottom'>제출?</div>
            </div>
        );
    }
}