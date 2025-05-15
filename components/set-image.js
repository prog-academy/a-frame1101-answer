      AFRAME.registerComponent('set-image', {
        schema: {
          on: { type: 'string' },
          target: { type: 'selector' },
          src: { type: 'string' }
        },
        init: function () {
          const data = this.data;
          const el = this.el;
          el.addEventListener(data.on, () => {
            data.target.setAttribute('src', data.src);
          });
        }
      });