@if ($primary_navigation)
  <ul class="site-navigation" role="menubar">
    @foreach ($primary_navigation as $item)
      @include('partials.menu-item', ['item' => $item, 'name' => 'site-navigation'])
    @endforeach
  </ul>
@endif
