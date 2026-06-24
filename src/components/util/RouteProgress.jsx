import { useEffect, useState } from 'react';
import { useNavigation } from 'react-router-dom';
import { cn } from '../../utils/cn';

// Thin top progress bar shown during client-side route transitions (while the
// lazy route chunk loads). Driven by React Router's navigation state.
export default function RouteProgress() {
  const navigation = useNavigation();
  const loading = navigation.state === 'loading';
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timers = [];
    if (loading) {
      setVisible(true);
      setProgress(8);
      timers.push(setTimeout(() => setProgress(55), 120));
      timers.push(setTimeout(() => setProgress(82), 420));
    } else if (visible) {
      setProgress(100);
      timers.push(
        setTimeout(() => {
          setVisible(false);
          setProgress(0);
        }, 250),
      );
    }
    return () => timers.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  return (
    <div
      aria-hidden="true"
      className={cn(
        'pointer-events-none fixed left-0 top-0 z-[80] h-0.5 bg-safety-orange transition-all duration-300 ease-out',
        visible ? 'opacity-100' : 'opacity-0',
      )}
      style={{ width: `${progress}%` }}
    />
  );
}
