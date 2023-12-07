@php $level = $level ?? 1 @endphp
<li class="
  {{ $name }}__item
  {{ $item->classes ?? '' }}
  {{ ($item->active || $item->activeAncestor) ? 'is-active': '' }}
  {{ $item->children ? 'has-children' : '' }}
  {{ "is-level-$level" }}"
  aria-haspopup="true"
  aria-expanded="false"
  aria-label="{{ esc_attr($item->label) }}"
  role="none"
>
  <div class="{{ $name }}__link-container">
    <a
      href="{{ $item->url }}"
      target="{{ $item->target ?? '' }}"
      title="{{ $item->title ?? '' }}"
      class="{{ $name }}__link {{ ($item->active || $item->activeAncestor) ? 'is-active': '' }}"
      role="menuitem"
    >
      <span>
        {!! esc_html($item->label) !!}
      </span>
    </a>
    @if ($item->children)
    <button
      class="{{ $name }}__submenu-trigger"
      aria-label="{{ sprintf(__('%s submenu', 'hds'), $label ?? $item->label) }}"
      aria-controls="submenu-{{ $item->slug }}"
      role="button"
      type="button"
      aria-haspopup="true"
      aria-expanded="false"
    >
      <span
        class="{{ $name }}__submenu-icon"
        aria-hidden="true"
      >
      </span>
    </button>
    @endif
  </div>
  @if ($item->children)
  <ul
    id="submenu-{{ $item->slug }}" class="{{ $name }}__submenu"
    aria-label="{!! esc_attr($item->label) !!}"
  >
    @foreach ($item->children as $child)
      @include('partials.menu-item', ['item' => $child, 'name' => $name, 'level' => $level + 1])
    @endforeach
  </ul>
  @endif
</li>
