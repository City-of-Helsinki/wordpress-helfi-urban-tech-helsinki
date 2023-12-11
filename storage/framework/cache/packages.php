<?php return array (
  'log1x/acf-composer' =>
  array (
    'providers' =>
    array (
      0 => 'Log1x\\AcfComposer\\Providers\\AcfComposerServiceProvider',
    ),
  ),
  'log1x/navi' =>
  array (
    'providers' =>
    array (
      0 => 'Log1x\\Navi\\Providers\\NaviServiceProvider',
    ),
    'aliases' =>
    array (
      'Navi' => 'Log1x\\Navi\\Facades\\Navi',
    ),
  ),
  'log1x/sage-svg' =>
  array (
    'providers' =>
    array (
      0 => 'Log1x\\SageSvg\\SageSvgServiceProvider',
    ),
  ),
  'nesbot/carbon' =>
  array (
    'providers' =>
    array (
      0 => 'Carbon\\Laravel\\ServiceProvider',
    ),
  ),
);
