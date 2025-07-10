import { useEffect } from "react";

/**
 * useClickOutside
 * @param {React.RefObject} ref - reference to the DOM element you want to detect outside clicks for
 * @param {Function} handler - callback to run when an outside click is detected
 * @param {string} eventType - optional, defaults to 'mousedown', can be 'click' or 'touchstart'
 */
export function useClickOutside(ref, handler, eventType = "mousedown") {
  useEffect(() => {
    function handleEvent(event) {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    }

    document.addEventListener(eventType, handleEvent);
    return () => {
      document.removeEventListener(eventType, handleEvent);
    };
  }, [ref, handler, eventType]);
}
