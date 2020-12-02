
export class FloorplanConfig {
  // Core features
  image!: FloorplanImageConfig | string;
  stylesheet!: string;
  log_level!: string;
  debug_level!: string;
  rules!: FloorplanRuleConfig[];

  // Optional features
  startup!: FloorplanStartupConfig;
  defaults!: FloorplanConfigDefaults | undefined;
  image_mobile!: FloorplanImageConfig | string;
  last_motion!: FloorplanLastMotionConfig;

  // Experimental features
  pages!: string[];
  variables!: FloorplanVariableConfig[];
  pan_zoom: unknown;
}

export class FloorplanConfigDefaults {
  hover_over!: boolean;
  more_info!: boolean;
  propagate = true;
}

export class FloorplanStartupConfig {
  action!: FloorplanActionConfig;
}

export class FloorplanActionConfig {
  service!: string;
  service_template!: string;
  value: unknown;
  value_template!: string;
  data!: string;
  data_template!: string;
  no_entity_id = false;
}

export class FloorplanPageConfig extends FloorplanConfig {
  page_id!: string;
  master_page!: FloorplanMasterPageConfig;
}

export class FloorplanMasterPageConfig extends FloorplanPageConfig {
  content_element!: string;
}

export class FloorplanImageConfig {
  sizes!: FloorplanImageSize[];
}

export class FloorplanImageSize {
  min_width = 0;
  location!: string;
}

export class FloorplanRuleConfig {
  image!: string;
  image_template!: string;
  image_refresh_interval!: string;
  text_template!: string;
  class_template!: string;
  hover_over!: boolean;
  more_info!: boolean;
  propagate = true;
  entity!: string;
  entities!: (string | FloorplanRuleEntityElementConfig)[];
  element!: string;
  elements!: string[];
  on_hover!: FloorplanActionConfig;
  on_click!: FloorplanActionConfig;
  on_long_click!: FloorplanActionConfig;
  groups!: string[];
  states!: FloorplanRuleStateConfig[];
}

export class FloorplanRuleStateConfig {
  state!: string;
  class!: string | string[];
  classes!: string | string[];
}

export class FloorplanRuleEntityElementConfig {
  entity!: string;
  element!: string;
}

export class FloorplanLastMotionConfig extends FloorplanRuleStateConfig {
  entity!: string;
}

export class FloorplanVariableConfig {
  name!: string;
  value!: unknown;
  value_template!: string;
}
