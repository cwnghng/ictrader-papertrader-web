import { useCallback, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { toggleCircleStyles, toggleStyles } from './Toggle.styles';
import { ToggleProps } from './Toggle.types';

function Toggle({
  className,
  variant,
  isToggled,
  onToggle,
  ...props
}: ToggleProps) {
  const [baseIsToggled, setBaseIsToggled] = useState(false);

  const toggleClass =
    baseIsToggled || isToggled ? 'translate-x-6' : 'translate-x-0';
  const bgColor = baseIsToggled || isToggled ? 'bg-green-400' : 'bg-gray-400';

  const handleToggle = useCallback(() => {
    if (!onToggle || isToggled === undefined) {
      setBaseIsToggled(!baseIsToggled);
      return;
    }

    onToggle(!isToggled);
  }, [baseIsToggled, isToggled, onToggle]);

  return (
    <button
      type="button"
      onClick={handleToggle}
      className={twMerge(toggleStyles({ variant, className }), bgColor)}
      {...props}
    >
      <span className={twMerge(toggleCircleStyles({ variant }), toggleClass)} />
    </button>
  );
}

export default Toggle;
