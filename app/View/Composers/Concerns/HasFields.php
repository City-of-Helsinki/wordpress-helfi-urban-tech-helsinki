<?php

namespace App\View\Composers\Concerns;

use Illuminate\Support\Str;

trait HasFields
{
    public function fields($postId = null): array
    {
        if (!isset($this->fieldsCache)) {
            $postId = $postId ?: $this->post()->ID;

            $this->fieldsCache = array_merge(
                $this->metadata($postId),
                \get_fields($postId) ?: []
            );
        }
        return $this->fieldsCache ?: [];
    }

    public function metadata($postId): array
    {
        $objectSubtype = \get_object_subtype('post', $postId);
        $metaKeys = \get_registered_meta_keys('post', $objectSubtype);

        return collect(\get_registered_metadata('post', $postId))
            ->map(function ($value, $key) use ($metaKeys) {
                $isSingle = $metaKeys[$key]['single'] ?? false;
                return $isSingle ? reset($value) : $value;
            })
            ->all();
    }

    public function field($key, $default = null)
    {
        return $this->fields()[$key] ?? $default;
    }
}
