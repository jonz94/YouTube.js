import { YTNode } from '../../../helpers.js';
import type { RawNode } from '../../../index.js';
import NavigationEndpoint from '../../NavigationEndpoint.js';
import Text from '../../misc/Text.js';
import Thumbnail from '../../misc/Thumbnail.js';

export default class LiveChatSponsorshipsGiftRedemptionAnnouncement extends YTNode {
  static type = 'LiveChatSponsorshipsGiftRedemptionAnnouncement';

  id: string;
  timestamp_usec: string;
  timestamp_text: Text;
  author_external_channel_id: string;
  author_name: Text;
  author_photo: Thumbnail[];
  message: Text;
  endpoint: NavigationEndpoint;
  context_menu_accessibility: {
    accessibility_data: {
      label: string
    }
  };

  constructor(data: RawNode) {
    super();
    this.id = data.id;
    this.timestamp_usec = data.timestampUsec;
    this.timestamp_text = new Text(data.timestampText);
    this.author_external_channel_id = data.authorExternalChannelId;
    this.author_name = new Text(data.authorName);
    this.author_photo = Thumbnail.fromResponse(data.authorPhoto);
    this.message = new Text(data.message);
    this.endpoint = new NavigationEndpoint(data.contextMenuEndpoint);
    this.context_menu_accessibility = {
      accessibility_data: {
        label: data.contextMenuAccessibility.accessibilityData.label
      }
    };
  }
}