<div class="teaser type {{ $post_type }} type-{{ $post_type }}--teaser {{ $custom_class }}">
  <a
    class="teaser__link"
    href="{{ $permalink }}"
    aria-label="{{ $aria_label }}"
    @if ($excerpt)
    aria-describedby="teaser-{{ $id }}-excerpt"
    @endif
  >
    @if ($label)
      <div class="teaser__label">
        {!! $label !!}
      </div>
    @endif
    @if ($thumbnail)
      <div class="teaser__thumbnail {{ $large_thumbnail ? 'teaser__thumbnail--large' : '' }}">
        {!! $thumbnail !!}
      </div>
    @else
      <div class="teaser__thumbnail teaser__thumbnail--placeholder">
        <img src="{{ \Roots\asset('images/post-placeholder.png')->uri() }}" alt="{{ $label }}" />
      </div>
    @endif
    <div class="teaser__content">
      @if ($title)
        <h2 class="teaser__title has-medium-heading-font-size">{!! $title !!}</h2>
      @endif
    </div>
  </a>
</div>
