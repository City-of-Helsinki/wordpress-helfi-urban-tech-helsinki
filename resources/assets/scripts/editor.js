import {
  unregisterBlockStyle,
  registerBlockStyle,
} from '@wordpress/blocks';
import {
  RichTextToolbarButton,
} from '@wordpress/block-editor'
import {
  registerFormatType,
  applyFormat,
  toggleFormat,
} from '@wordpress/rich-text'
import '@wordpress/edit-post';
import domReady from '@wordpress/dom-ready';
import {Popover, SelectControl} from '@wordpress/components'
import colorPalette from '../palette.json'

registerFormatType('urban-tech-helsinki/highlight', {
  title: 'Highlight',
	tagName: 'span',
	className: 'highlight',
	attributes: {
		color: 'data-color',
	},
	edit( { isActive, value, onChange, activeAttributes } ) {
		const onToggle = () => {
			onChange(toggleFormat(value, {
        type: 'urban-tech-helsinki/highlight',
      }));
		};
		return ([
      <RichTextToolbarButton
        icon="editor-underline"
        title="Highlight"
        onClick={ onToggle }
        isActive={ isActive }
        shortcutType="primary"
        shortcutCharacter="u"
      />,
      isActive && (
        <Popover
          position="bottom center"
          headerTitle="Highlight color"
        >
          <SelectControl
            label="Color name"
            value={activeAttributes.color || ''}
            options={[
              {
                label: 'Select color',
                value: '',
              },
              ...colorPalette.map(color => ({
                label: color.name,
                value: color.slug,
              })),
            ]}
            onChange={newColor => {
              onChange(applyFormat(value, {
                type: 'urban-tech-helsinki/highlight',
                attributes: {
                  color: newColor,
                },
              }))
            }}
          />
        </Popover>
      ),
    ]);

	},
})

var excludeBlockTypes = [
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
wp.hooks.addFilter('blocks.registerBlockType', 'pw-examples/exclude-blocks', function(settings, name) {
  if (excludeBlockTypes.indexOf(name) !== -1) {
      return Object.assign({}, settings, {
          supports: Object.assign({}, settings.supports, {inserter: false}),
      });
  }
  return settings;
});

domReady(() => {
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
