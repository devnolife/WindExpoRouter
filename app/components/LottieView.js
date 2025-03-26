import React from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import { useColorScheme } from 'nativewind';

/**
 * A reusable component for displaying Lottie animations
 * @param {Object} props - Component props
 * @param {string|Object} props.source - Animation source (can be require or uri)
 * @param {number} props.speed - Animation speed (default: 1)
 * @param {boolean} props.autoPlay - Whether to start playing automatically (default: true)
 * @param {boolean} props.loop - Whether to loop the animation (default: true)
 * @param {Object} props.style - Additional styles for the animation container
 * @param {Function} props.onAnimationFinish - Callback when animation finishes
 */
export default function AnimatedLottieView({
  source,
  speed = 1,
  autoPlay = true,
  loop = true,
  style,
  onAnimationFinish,
  ...props
}) {
  const { colorScheme } = useColorScheme();
  const animationRef = React.useRef(null);

  React.useEffect(() => {
    if (animationRef.current && autoPlay) {
      animationRef.current.play();
    }
  }, [autoPlay]);

  // Determine if source is a string or object
  const animationSource = typeof source === 'string' 
    ? { uri: source } 
    : source;

  return (
    <View style={[styles.container, style]}>
      <LottieView
        ref={animationRef}
        source={animationSource}
        speed={speed}
        autoPlay={autoPlay}
        loop={loop}
        onAnimationFinish={onAnimationFinish}
        colorFilters={colorScheme === 'dark' ? [
          {
            keypath: "**",
            color: "#FFFFFF"
          }
        ] : undefined}
        {...props}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
}); 