<div class="entry-meta">
  @if ($category)
    <span class="category has-category-{{$category->slug}}-color">
      {{$category->name}}
    </span>
  @endif
  <time class="updated" datetime="{{ get_post_time('c', true) }}">
    {{ get_the_date() }}
  </time>
</div>
