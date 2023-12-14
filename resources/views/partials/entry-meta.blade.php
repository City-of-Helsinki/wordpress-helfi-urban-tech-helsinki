<div class="entry-meta">
  <?php $categories = get_the_category(); ?>
  @if ($categories)
    <span class="category has-category-{{$categories[0]->slug}}-color">
      {{$categories[0]->name}}
    </span>
  @endif
  <time class="updated" datetime="{{ get_post_time('c', true) }}">
    {{ get_the_date() }}
  </time>
</div>
