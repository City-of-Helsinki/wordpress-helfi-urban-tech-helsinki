@if (sizeof($query->posts) > 0)
  <div class="{{ esc_attr($block->classes) }}">
    <div class="grid">
      @if ($show_all_articles_link)
        <div class="cell small:12 medium:6 large:3">
          <div class="aspect-ratio-container">
            <a href="/news">
              <h1>{{__('News', 'hds')}}</h1>
              <div class="read-more-link">{{__('All articles>', 'hds')}}</div>
            </a>
          </div>
        </div>
      @endif
      @foreach ($query->posts as $post)
        @php
          $categories = get_the_category($post);
          $category = null;
          if (isset($categories) && sizeof($categories) >= 1) {
              $category = $categories[0]->slug;
          }
        @endphp
        <div class="cell small:12 medium:6 large:3 has-category-{{$category}}-background-color">
          <div class="aspect-ratio-container">
            <a href="{{get_permalink($post)}}">
              <h3>
                {{$post->post_title}}
              </h3>
              <div class="date-and-category">
                {{date('j.n.Y', strtotime($post->post_date))}}
                –
                News
              </div>
              <div class="read-more-link">{{__('Read more>', 'hds')}}</div>
            </a>
          </div>
        </div>
      @endforeach
    </div>
  </div>
  @if ($use_pagination)
    <div class="wp-block-buttons alignfull news-grid-pagination">
      @include('partials.pagination', ['query' => $query, 'fragment' => $block->id ?? 'listing'])
    </div>
  @endif
@else
  <!-- no posts -->
@endif
