// Touch event class

class DealWithTouchEvents {

    constructor(touchTarget) {
        this.touchTarget = touchTarget;
        this.isTouchActive = false;
    }

    goTouch() {
        const touchItems = document.getElementsByClassName(this.touchTarget);
        const touchItemsArray = Array.from(touchItems);
        let sampleItem;

        for (const touchItem of touchItemsArray) {
            sampleItem = touchItem;
            
            touchItem.addEventListener('touchstart', ()=> {
                if (this.isTouchActive === false) {
                    touchItem.classList.add('not-touched');
                    touchItem.classList.remove('touched');
                } else if (this.isTouchActive === true) {
                    touchItem.classList.add('touched');
                    touchItem.classList.remove('not-touched');
                };

                this.isTouchActive = !this.isTouchActive;
            });
        }

        return sampleItem;
    }

    getWindowWidth(direction, width) {
        if (direction === ('min' || 'max') && width.length > 4) {
            const widthString = `(${direction}-width: ${width})`;
            const widthMatches = window.matchMedia(widthString).matches;
            
            return widthMatches
        } else {
            console.error('getWindowWidth() must have valid input properties');
        }
    }
}

export default DealWithTouchEvents;
