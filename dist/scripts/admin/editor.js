((wp) => {

  const {unregisterBlockStyle, registerBlockStyle} = wp.blocks;
  const {createElement, Fragment} = wp.element;
  const {RichTextToolbarButton} = wp.blockEditor;
  const {registerFormatType, applyFormat, toggleFormat} = wp.richText;
  const {Popover, SelectControl} = wp.components;

  const colorPalette = [
    {
      "name": "Black",
      "slug": "black",
      "color": "#000000"
    },
    {
      "name": "White",
      "slug": "white",
      "color": "#ffffff"
    },
    {
      "name": "liliac",
      "slug": "liliac",
      "color": "#c491fe"
    },
    {
      "name": "brightlightblue",
      "slug": "brightlightblue",
      "color": "#30e0ff"
    },
    {
      "name": "orangish",
      "slug": "orangish",
      "color": "#ff8547"
    },
    {
      "name": "weirdgreen",
      "slug": "weirdgreen",
      "color": "#43d09d"
    },
    {
      "name": "bubblegumpink",
      "slug": "bubblegumpink",
      "color": "#ff99e5"
    },
    {
      "name": "lightblue",
      "slug": "lightblue",
      "color": "#6dcff6"
    },
    {
      "name": "sunfloweryellow",
      "slug": "sunfloweryellow",
      "color": "#ffe400"
    },
    {
      "name": "greyishbrown",
      "slug": "greyishbrown",
      "color": "#3c3c3c"
    }
  ];

  const CustomHighlight = ({ isActive, value, onChange, activeAttributes }) => {
    return createElement(Fragment, {},
      createElement(RichTextToolbarButton, {
        icon: "editor-underline",
        title: "Highlight",
        onClick: () => {
          onChange(
            toggleFormat(value, {type: 'urban-tech-helsinki/highlight'})
          );
        },
        isActive: isActive,
        shortcutType: "primary",
        shortcutCharacter: "u",
      }),
      isActive && createElement(Popover, {
          position: "bottom center",
          headerTitle: "Highlight color",
        },
        createElement(SelectControl, {
          label: "Color name",
          value: activeAttributes.color || '',
          options: [
            {label: 'Select color', value: ''},
            ...colorPalette.map(({name, slug}) => ({label: name, value: slug}))
          ],
          onChange: newColor => {
            onChange(
              applyFormat(value, {
                type: 'urban-tech-helsinki/highlight',
                attributes: {color: newColor},
              })
            );
          },
        })
      ),
    );
  };

  registerFormatType('urban-tech-helsinki/highlight', {
    title: 'Highlight',
  	tagName: 'span',
  	className: 'highlight',
  	attributes: {
  		color: 'data-color',
  	},
    edit: CustomHighlight,
  });

  const excludeBlockTypes = [
    'core/archives',
    'core/calendar',
    'core/categories',
    'core/latest-posts',
    'core/navigation',
    'core/nextpage',
    'core/latest-comments',
    'core/more',
    'core/rss',
    'core/search',
    'core/social-links',
    'core/tag-cloud',
    'core-embed/amazon-kindle',
    'core-embed/animoto',
    'core-embed/cloudup',
    'core-embed/collegehumor',
    'core-embed/crowdsignal',
    'core-embed/dailymotion',
    'core-embed/facebook',
    'core-embed/flickr',
    'core-embed/hulu',
    'core-embed/imgur',
    'core-embed/instagram',
    'core-embed/issuu',
    'core-embed/kickstarter',
    'core-embed/meetup-com',
    'core-embed/mixcloud',
    'core-embed/polldaddy',
    'core-embed/reddit',
    'core-embed/reverbnation',
    'core-embed/screencast',
    'core-embed/scribd',
    'core-embed/slideshare',
    'core-embed/smugmug',
    'core-embed/soundcloud',
    'core-embed/speaker',
    'core-embed/speaker-deck',
    'core-embed/spotify',
    'core-embed/ted',
    'core-embed/tiktok',
    'core-embed/tumblr',
    'core-embed/twitter',
    'core-embed/videopress',
    'core-embed/vimeo',
    'core-embed/wordpress',
    'core-embed/wordpress-tv',
  ];

  wp.hooks.addFilter(
    'blocks.registerBlockType',
    'pw-examples/exclude-blocks',
    function(settings, name) {
      if (excludeBlockTypes.indexOf(name) !== -1) {
          return Object.assign({}, settings, {
            supports: Object.assign({}, settings.supports, {inserter: false}),
          });
      }
      return settings;
    }
  );

  wp.domReady(() => {
    unregisterBlockStyle('core/button', 'fill');
    registerBlockStyle('core/button', {
      name: 'outline',
      label: 'Outline',
      isDefault: true,
    });
    registerBlockStyle('core/button', {
      name: 'text',
      label: 'Text',
      isDefault: true,
    });
    registerBlockStyle('core/media-text', {
      name: 'wide',
      label: 'Wide',
      isDefault: false,
    });
    registerBlockStyle('core/columns', {
      name: 'partner-grid',
      label: 'Partner grid',
      isDefault: false,
    });
    registerBlockStyle('core/columns', {
      name: 'startup-grid',
      label: 'Startup grid',
      isDefault: false,
    });
    registerBlockStyle('core/paragraph', {
      name: 'txt-link',
      label: 'TXT Link',
      isDefault: false,
    });
    ; ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].forEach(heading => {
      registerBlockStyle('core/heading', {
        name: `size-${heading}`,
        label: `${heading.toUpperCase()} size`,
        isDefault: false,
      });
    })
    registerBlockStyle('core/heading', {
      name: `article-title`,
      label: 'Article Title',
      isDefault: false,
    })
  });
})(window.wp);
