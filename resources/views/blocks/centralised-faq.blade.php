<div class="wp-block-centralised-faq accordion" id="faq-accordion" aria-label="accordion">
  @foreach($faqs as $faq)
    <div class="accordion-item">
      <h4 class="accordion-header">
        <button class="accordion-button" id="accordion-header-{{ $faq->ID }}" type="button" data-target="#accordion-panel-{{ $faq->ID }}" aria-expanded="false" aria-controls="accordion-panel-{{ $faq->ID }}">
          {!! $faq->post_title !!}
          <span
            class="site-navigation__submenu-icon accordion-icon"
            aria-hidden="true"
          ></span>
        </button>
      </h4>
      <div id="accordion-panel-{{ $faq->ID }}" class="accordion-panel collapse" aria-hidden="true" aria-labelledby="accordion-header-{{ $faq->ID }}" data-parent="#faq-accordion" role=“region”>
        <div class="accordion-body entry-content">{!! $faq->post_content !!}</div>
      </div>
    </div>
  @endforeach
</div>
<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      @foreach ($faqs as $faq)
      {
        "@type": "Question",
        "name": "{{$faq->post_title}}",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "{{preg_replace('/\s+/', ' ', wp_strip_all_tags($faq->post_content))}}"
        }
      }@if (!$loop->last),@endif
      @endforeach
    ]
  }
</script>
