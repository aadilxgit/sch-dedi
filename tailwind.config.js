module.exports = {
  theme: {
    extend: {
      animation: {
        'bounce-slow': 'bounce 1.2s infinite cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce-slower': 'bounce 1.2s infinite 0.1s cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce-slowest': 'bounce 1.2s infinite 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
        'glow-wave-1': 'glowWave 2s ease-in-out infinite',
        'glow-wave-2': 'glowWave 2s ease-in-out infinite 0.33s',
        'glow-wave-3': 'glowWave 2s ease-in-out infinite 0.66s',
      },
      keyframes: {
        glowWave: {
          '0%, 100%': { 
            opacity: '0.2',
            filter: 'drop-shadow(0 0 0 rgba(121, 100, 228, 0))',
            transform: 'translateY(0)'
          },
          '50%': { 
            opacity: '1',
            filter: 'drop-shadow(0 0 12px rgba(121, 100, 228, 0.6))',
            transform: 'translateY(6px)'
          }
        }
      },
      dropShadow: {
        'glow': [
          '0 0 8px rgba(121, 100, 228, 0.5)',
          '0 0 16px rgba(121, 100, 228, 0.3)'
        ]
      }
    },
  },
}