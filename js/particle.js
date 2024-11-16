particlesJS('particles-js', {
    particles: {
      number: {
        value: 50, // Adjust the number of particles
        density: {
          enable: true,
          value_area: 800, // Particle density area
        },
      },
      color: {
        value: ['#1c99fe', '#7644ff', '#fd4766'], // Particle colors
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
        },
      },
      opacity: {
        value: 0.7, // Transparency of particles
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.2,
        },
      },
      size: {
        value: 4, // Size of the particles
        random: true,
        anim: {
          enable: true,
          speed: 2,
          size_min: 0.3,
        },
      },
      line_linked: {
        enable: true,
        distance: 150, // Distance between particles to draw a line
        color: '#ffffff',
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2, // Speed of particle movement
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out', // Particles will bounce back when out of bounds
      },
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'grab', // Particles attract to cursor
        },
        onclick: {
          enable: true,
          mode: 'push', // Particles burst on click
        },
      },
      modes: {
        grab: {
          distance: 200,
          line_linked: {
            opacity: 0.5,
          },
        },
        push: {
          particles_nb: 4,
        },
      },
    },
    retina_detect: true,
  });
  