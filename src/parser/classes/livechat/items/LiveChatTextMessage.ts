import { type ObservedArray, YTNode } from '../../../helpers.js';
import type { RawNode } from '../../../index.js';
import { Parser } from '../../../index.js';
import Button from '../../Button.js';
import ButtonView from '../../ButtonView.js';
import NavigationEndpoint from '../../NavigationEndpoint.js';
import Author from '../../misc/Author.js';
import Text from '../../misc/Text.js';

export class LiveChatMessageBase extends YTNode {
  static type = 'LiveChatMessageBase';

  id: string;
  message: Text;
  inline_action_buttons: ObservedArray<Button>;
  timestamp: number;
  timestamp_usec: number;

  constructor(data: RawNode) {
    super();
    this.id = data.id;
    this.message = new Text(data.message);
    this.inline_action_buttons = Parser.parseArray(data.inlineActionButtons, Button);
    this.timestamp = Math.floor(parseInt(data.timestampUsec) / 1000);
    this.timestamp_usec = data.timestampUsec;
  }
}

export default class LiveChatTextMessage extends LiveChatMessageBase {
  static type = 'LiveChatTextMessage';

  author: Author;
  menu_endpoint: NavigationEndpoint;
  context_menu_accessibility_label: string;
  before_content_buttons: ObservedArray<ButtonView>;

  constructor(data: RawNode) {
    super(data);

    this.author = new Author(
      data.authorName,
      data.authorBadges,
      data.authorPhoto,
      data.authorExternalChannelId
    );

    this.menu_endpoint = new NavigationEndpoint(data.contextMenuEndpoint);
    this.context_menu_accessibility_label = data.contextMenuAccessibility.accessibilityData.label;
    this.before_content_buttons = Parser.parseArray(data.beforeContentButtons, ButtonView);
  }
}