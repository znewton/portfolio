let oneTimeEvents = {};
let endEvents = {};

/**
 * Only perform callback, fn, after a delay.
 *
 * @param {*} fn
 * @param {number} delay
 */
function debounce(fn, delay) {
  var timer = null;
  return function() {
    var context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function() {
      fn.apply(context, args);
    }, delay);
  };
}

/**
 * Add an event listener that only fires at the end of an event.
 *
 * @param {Object} element
 * @param {string} event
 * @param {*} _callback
 * @param {number} timeout
 * @param {string} name
 */
function addEndEventListener(element, event, _callback, timeout, name) {
  let endTimer;
  let handler = evt => {
    clearTimeout(endTimer);
    endTimer = setTimeout(function() {
      _callback(evt);
    }, timeout);
  };
  element.addEventListener(event, handler);
  endEvents[name] = { element: element, event: event, handler: handler };
}

/**
 * Remove an event listener added by `addEndEventListener`.
 *
 * @param {string} name
 */
function removeEndEventListener(name) {
  if (!endEvents[name]) return;
  const { element, event, handler } = endEvents[name];
  element.removeEventListener(event, handler);
  delete endEvents[name];
}

/**
 * Add an event listener that can be fired once then is removed.
 *
 * @param {Object} element
 * @param {string} event
 * @param {*} _callback
 * @param {string} name
 */
function addOneTimeEvent(element, event, _callback, name) {
  let handler = () => {
    _callback();
    element.removeEventListener(event, handler);
  };
  element.addEventListener(event, handler);
  oneTimeEvents[name] = { element: element, event: event, handler: handler };
}

/**
 * Manually remove an event added by `addOneTimeEvent`.
 *
 * @param {string} name
 */
function removeOneTimeEvent(name) {
  if (!oneTimeEvents[name]) return;
  const { element, event, handler } = oneTimeEvents[name];
  element.removeEventListener(event, handler);
  delete oneTimeEvents[name];
}

module.exports = {
  addEndEventListener,
  removeEndEventListener,
  addOneTimeEvent,
  removeOneTimeEvent,
  debounce
};
