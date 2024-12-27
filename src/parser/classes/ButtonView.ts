import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
import NavigationEndpoint from './NavigationEndpoint.js';

export default class ButtonView extends YTNode {
  static type = 'ButtonView';

  icon_name: string;
  title: string;
  accessibility_text?: string;
  style?: string;
  is_full_width?: boolean;
  button_type: string;
  button_size: string;
  on_tap: NavigationEndpoint;
  icon_trailing?: boolean;
  custom_background_color?: number;
  custom_font_color?: number;

  constructor(data: RawNode) {
    super();
    this.icon_name = data.iconName;
    this.title = data.title;

    if (Reflect.has(data, 'accessibilityText')) {
      this.accessibility_text = data.accessibilityText;
    }

    if (Reflect.has(data, 'style')) {
      this.style = data.style;
    }

    if (Reflect.has(data, 'isFullWidth')) {
      this.is_full_width = data.isFullWidth;
    }

    this.button_type = data.type;
    this.button_size = data.buttonSize;
    this.on_tap = new NavigationEndpoint(data.onTap);

    if (Reflect.has(data, 'iconTrailing')) {
      this.icon_trailing = data.iconTrailing;
    }

    if (Reflect.has(data, 'customBackgroundColor')) {
      this.custom_background_color = data.customBackgroundColor;
    }

    if (Reflect.has(data, 'customFontColor')) {
      this.custom_font_color = data.customFontColor;
    }
  }
}