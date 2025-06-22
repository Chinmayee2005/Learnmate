import { User } from 'lucide-react';

const Avatar = ({ src, alt, size = 'md', className = '' }) => {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  };
  
  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 32,
    xl: 48
  };
  
  const classes = `${sizes[size]} rounded-full bg-gray-200 flex items-center justify-center overflow-hidden ${className}`;
  
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={classes}
      />
    );
  }
  
  return (
    <div className={classes}>
      <User size={iconSizes[size]} className="text-gray-500" />
    </div>
  );
};

export default Avatar;