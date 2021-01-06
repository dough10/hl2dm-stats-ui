import {
  transitionEvent
} from './whichtransistion.js';
export {
  animateElement,
  animateScroll,
  fadeIn,
  fadeOut,
  animateHeight
};

/**
 * animate transform of transform and opacity on a HTML element
 *
 * @param {HTMLElement} el the HTML element to be animated *required*
 * @param {String} transform transform value *required*
 * @param {Number} time duration the animation will take to play through *optional*
 * @param {Number} opacity opacity value *optional*
 * @param {Number} delay time to wait before animating *optional*
 * 
 * @returns {Promise<Void>} nothing
 * 
 * @example <caption>Example usage of animateElement() function.</caption>
 * animateElement(card, 'translateX(0)', 200, 1).then(_ => {
 * // animation complete
 * });
 */
function animateElement(el, transform, time, opacity, delay) {
  return new Promise(resolve => {
    if (!el) {
      resolve();
      return; 
    }
    if (el.style.transform === transform) {
      resolve();
      return;
    }
    const animationEnd = _ => {
      el.removeEventListener(transitionEvent, animationEnd);
      el.style.willChange = 'initial';
      el.style.transition = 'initial';
      requestAnimationFrame(resolve);
    };
    if (!time) {
      time = 300;
    }
    if (!delay) {
      delay = 0;
    }
    el.addEventListener(transitionEvent, animationEnd, true);
    el.style.willChange = 'auto';
    el.style.transition = `all ${time}ms cubic-bezier(.33,.17,.85,1.1) ${delay}ms`;
    requestAnimationFrame(_ => {
      el.style.transform = transform;
      if (opacity !== undefined) {
        el.style.opacity = opacity;
      }
    });
  });
}

/**
 * fade in opacity of a given element
 *
 * @param {HTMLElement} el HTML element to fade
 * @param {Number} time duration of the fade animation
 * 
 * @returns {Promise<Void>} nothing
 * 
 * @example <caption>Example usage of fadeIn() function.</caption>
 * fadeIn(card, 200).then(_ => {
 * // animation complete
 * });
 */
function fadeIn(el, time) {
  return new Promise(resolve => {
    if (!el) {
      return resolve();
    }
    if (el.style.opacity === 1) {
      return resolve();
    }
    if (!time) {
      time = 200;
    }
    const animationEnd = _ => {
      el.removeEventListener(transitionEvent, animationEnd);
      el.style.willChange = 'initial';
      el.style.transition = 'initial';
      requestAnimationFrame(resolve);
    };
    el.addEventListener(transitionEvent, animationEnd, true);
    el.style.willChange = 'opacity';
    el.style.transition = `opacity ${time}ms cubic-bezier(.33,.17,.85,1.1) 0s`;
    requestAnimationFrame(_ => {
      el.style.opacity = 1;
    });

  });
}

/**
 * fade out opacity of a given element
 *
 * @param {HTMLElement} el HTML element to fade
 * @param {Number} time duration of the fade animation
 * 
 * @returns {Promise<Void>} nothing
 * 
 * @example <caption>Example usage of fadeOut() function.</caption>
 * fadeOut(card, 200).then(_ => {
 * // animation complete
 * });
 */
function fadeOut(el, time) {
  return new Promise(resolve => {
    if (!el) {
      return resolve();
    }
    if (el.style.opacity === 0) {
      return resolve();
    }
    if (!time) {
      time = 200;
    }
    var animationEnd = _ => {
      el.removeEventListener(transitionEvent, animationEnd);
      el.style.willChange = 'initial';
      el.style.transition = 'initial';
      requestAnimationFrame(resolve);
    };
    el.addEventListener(transitionEvent, animationEnd, true);
    el.style.willChange = 'opacity';
    el.style.transition = `opacity ${time}ms cubic-bezier(.33,.17,.85,1.1) 0s`;
    requestAnimationFrame(_ => {
      el.style.opacity = 0;
    });
  });
}

/**
 * animate scroll to top of the page
 * moves content down the page and when content reachest what would be the top position the page snaps back into original position
 * 
 * @returns {Promise<Void>} Nothing
 */
function animateScroll() {
  return new Promise(resolve => {
    const wrapper = document.querySelector('#container');
    const content = document.querySelector('#content');
    animateElement(content, `translateY(${wrapper.scrollTop}px)`, 350).then(_ => {
      content.style.transform = 'initial';
      wrapper.scrollTop = 0;
      resolve();
    });
  });
}

/**
 * animate transform / opacity on a give element
 *
 * @param {HTMLElement} el HTML element *required*
 * @param {String} height height value *required*
 * @param {Number} time duration for the animation to complete
 */
function animateHeight(el, height, time) {
  return new Promise(resolve => {
    if (!el) {
      return resolve();
    }
    var timer = 0;
    const animationEnd = _ => {
      el.removeEventListener(transitionEvent, animationEnd);
      el.style.willChange = 'initial';
      el.style.transition = 'initial';
      requestAnimationFrame(resolve);
    };
    if (!time) {
      time = 300;
    }
    el.addEventListener(transitionEvent, animationEnd, true);
    el.style.willChange = 'auto';
    el.style.transition = `height ${time}ms cubic-bezier(.33,.17,.85,1.1) 0s`;
    requestAnimationFrame(_ => {
      el.style.height = height;
    });
  });
}
