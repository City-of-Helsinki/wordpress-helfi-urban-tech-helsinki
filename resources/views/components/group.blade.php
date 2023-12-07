<div
  class="wp-block-group
    {{ $style ? "is-style-$style" : '' }}
    {{ $color ? "has-text-color has-$color-color" : '' }}
    {{ $align ? "align$align" : '' }}
    {{ $background ? "has-background has-$background-background-color" : '' }}
    {{ $class }}
  ">
  <div class="wp-block-group__inner-container">
    {!! $slot !!}
  </div>
</div>
