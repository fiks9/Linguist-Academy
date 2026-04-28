import { useEffect, useState } from 'react';

const pad = (n) => String(n).padStart(2, '0');

/**
 * useCountdown
 * Counts down to a target Date or ISO string and returns formatted segments.
 *
 * @param {Date|string|number} target  When the countdown should reach zero.
 * @param {number} [tickMs=1000]       Refresh interval in milliseconds.
 * @returns {{ days:string, hours:string, minutes:string, seconds:string, totalMs:number, isExpired:boolean }}
 */
export default function useCountdown(target, tickMs = 1000) {
  const targetMs =
    target instanceof Date ? target.getTime() : new Date(target).getTime();

  const compute = () => {
    const diff = Math.max(0, targetMs - Date.now());
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    return {
      days: pad(days),
      hours: pad(hours),
      minutes: pad(minutes),
      seconds: pad(seconds),
      totalMs: diff,
      isExpired: diff === 0,
    };
  };

  const [time, setTime] = useState(compute);

  useEffect(() => {
    setTime(compute());
    const id = setInterval(() => setTime(compute()), tickMs);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetMs, tickMs]);

  return time;
}
