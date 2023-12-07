<article @php(post_class())>
  @if ($printPageHeading)
    <header class="entry-header">

      @if (get_the_post_thumbnail_url())
        <figure class="wp-block-image size-large">
          @php(the_post_thumbnail('large', ['sizes' => '100vw']))
          @if (get_field('featured_image_caption'))
            <figcaption>
              {{ get_field('featured_image_caption') }}
            </figcaption>
          @endif
        </figure>
      @endif

      <x-group>
        @include('partials/entry-meta')

        <h2 class="entry-title">
          @php(the_title())
        </h2>
      </x-group>

    </header>
  @endif

  <div class="entry-content">
    @if (get_the_excerpt())
      <p class="description">
        {{ get_the_excerpt() }}
      </p>
    @endif

    @php(the_content())

    @if (get_locale() == 'fi')
      @include('partials/react-and-share')
    @endif
  </div>

  <x-group align="full" class="post-contacts">
    @include ('blocks/contact', [
      'block' => (object) [
        'classes' => 'wp-block-contact alignfull',
      ],
      'contacts' => is_array(get_field('contacts')) ? get_field('contacts') : [],
    ])
  </x-group>


</article>
