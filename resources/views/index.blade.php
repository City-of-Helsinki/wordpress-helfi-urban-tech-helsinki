@extends('layouts.app')

@section('content')
  @if ($content)
    @includeFirst(['partials.content-archive', 'partials.content'])
  @else
    @include('partials.page-header')

    <div class="entry-content">

      <x-group align="wide">
        @php(the_archive_description())

        @if (!have_posts())
          <x-alert type="warning">
            {!! __('Sorry, no results were found.', 'sage') !!}
          </x-alert>
        @endif
      </x-group>

      <x-group align="wide" id="listing">
        <div class="alignwide">
          <div class="grid">
            @while(have_posts()) @php(the_post())
              <div class="cell xsmall:4 small:2 medium:4">
                @includeFirst(['teasers.' . get_post_type(), 'teasers.teaser'], ['post' => get_post()])
              </div>
            @endwhile
          </div>
        </div>
      </x-group>

      @include('partials.pagination', ['fragment' => 'listing'])
    </div>
  @endif
@endsection
