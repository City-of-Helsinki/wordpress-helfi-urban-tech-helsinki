<div class="{{ esc_attr($block->classes) }} @if (count($contacts) > 1) has-multiple-contacts @endif">
  @foreach ($contacts as $contact)
    <div class="wp-block-media-text alignfull is-stacked-on-mobile wp-block-media-text--contact">
      <figure class="wp-block-media-text__media">
        {!!get_the_post_thumbnail($contact, 'xxlarge')!!}
      </figure>

      <div class="wp-block-media-text__content">
        <h3>{{$contact->post_title}}</h3>

        <p>
          @if (get_field('description', $contact))
            {!!get_field('description', $contact)!!}
          @endif
        </p>

        <p>
          @if (get_field('telephone', $contact))
            {{get_field('telephone', $contact)}}
            <br/>
          @endif
          @if (get_field('email', $contact))
            {{get_field('email', $contact)}}
            <br/>
          @endif
          @if (get_Field('url', $contact))
            <a href="{{get_field('url', $contact)}}">{{get_field('url', $contact)}}</a>
            <br/>
          @endif
        </p>
      </div>
    </div>
    @endforeach
    @php(wp_reset_postdata())
</div>
