import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';
import Text from '../misc/Text.js';
import NavigationEndpoint from '../NavigationEndpoint.js';

export default class ClientSideToggleMenuItem extends YTNode {
  static type = 'ClientSideToggleMenuItem';

  text: Text;
  toggled_text: Text;
  icon_type: string;
  toggled_icon_type: string;
  menu_item_identifier: string;
  command: {
    click_tracking_params: string,
    toggle_live_chat_timestamps_endpoint: NavigationEndpoint
  };

  constructor(data: RawNode) {
    super();
    this.text = new Text(data.defaultText);
    this.toggled_text = new Text(data.toggledText);
    this.icon_type = data.defaultIcon.iconType;
    this.toggled_icon_type = data.toggledIcon.iconType;
    this.menu_item_identifier = data.menuItemIdentifier;
    this.command = {
      click_tracking_params: data.command.clickTrackingParams,
      toggle_live_chat_timestamps_endpoint: new NavigationEndpoint(data.command.toggleLiveChatTimestampsEndpoint)
    };
  }
}
