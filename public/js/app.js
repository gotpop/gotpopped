/////////////////////////////////////////////////////////////////////////////////
// Toggle grid
/////////////////////////////////////////////////////////////////////////////////

// var baseLine = document.getElementById('baseline');
// var toggleGrid = document.getElementById('toggle-grid');
// toggleGrid.addEventListener('click', function(e) {
//     e.preventDefault();
//     baseLine.classList.toggle('show-grid');
// });

////////////////////////////////////////////////////////////////////////////////
// Current menu item
////////////////////////////////////////////////////////////////////////////////

// var currentMenuItem = {
// 	findSelected: function() {
// 	    return document.querySelectorAll('.selected');
// 	},
// 	removeClassSelected: function() {
// 	    for (var i = 0; i < currentMenuItem.findSelected().length; i++) {
// 	        currentMenuItem.findSelected()[i].classList.remove('selected');
// 	    }
// 	},
// 	getCurrentPage: function() {
// 	    return localStorage.getItem('currentPage');
// 	},
//     currentMenuItemToggle: function() {
//         currentMenuItem.removeClassSelected();
//         var bodyId = currentMenuItem.getCurrentPage();
//         // Add back dependent on location
//         if (bodyId === 'home') {
//             var currentPageHome = document.getElementById('homeClick');
//             currentPageHome.classList.toggle('selected');
//         } else if (bodyId === 'columbus') {
//             var currentPageColumbus = document.getElementById('caseClick');
//             currentPageColumbus.classList.toggle('selected');
//         } else if (bodyId === 'hackett') {
//             var currentPageHackett = document.getElementById('hackettClick');
//             currentPageHackett.classList.toggle('selected');
//         } else {
//             var currentPageOffers = document.getElementById('offersClick');
//             currentPageOffers.classList.toggle('selected');
//         }

//     }
// }



/////////////////////////////////////////////////////////////////////////////////
// Toggle menu
/////////////////////////////////////////////////////////////////////////////////

var rwdMenu = {
    menuTriggerState: 'closed',
    menuTrigger: function() {
        return document.getElementById('menuTrigger');
    },
    sidebarContainer: function() {
        return document.getElementById('sidebarContainer');
    },
    wrapSite: function() {
        return document.getElementById('wrapSite');
    },
    allLinks: function() {
        return document.querySelectorAll(".side-menu__item");
    },
    menuTriggerStateFunction: function() {
        if (this.menuTriggerState === "closed") {
            rwdMenu.menuTrigger().innerHTML = "Close menu";
            this.menuTriggerState = "open";
        } else {
            rwdMenu.menuTrigger().innerHTML = "Open menu";
            this.menuTriggerState = "closed";
        }
    },
    menuTriggerFunction: function(el) {
        el.addEventListener('click', function(e) {
            rwdMenu.sidebarContainer().classList.toggle('active');
            rwdMenu.menuTriggerStateFunction();
        });
    },
    loopLinks: function() {
        for (var i = rwdMenu.allLinks().length - 1; i >= 0; i--) {
            rwdMenu.menuTriggerFunction(rwdMenu.allLinks()[i]);
        }
    }
}

////////////////////////////////////////////////////////////////////////////////
// Call functions
////////////////////////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function() {

    localStorage.setItem('currentPage', 'home');

    // Menu
    rwdMenu.menuTriggerFunction(rwdMenu.menuTrigger());
    rwdMenu.loopLinks();
});
