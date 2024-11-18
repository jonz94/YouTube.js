import { YTNode } from '../../../helpers.js';
import type { RawNode } from '../../../index.js';
import { Parser } from '../../../index.js';
import LiveChatBannerHeader from './LiveChatBannerHeader.js';

export default class LiveChatBanner extends YTNode {
  static type = 'LiveChatBanner';

  header: LiveChatBannerHeader | null;
  contents: YTNode;
  action_id: string;
  viewer_is_creator: boolean;
  target_id: string;
  is_stackable: boolean;
  background_type: string | null;
  banner_type: string;
  banner_properties_is_ephemeral: boolean;
  banner_properties_auto_collapse_delay_seconds: string | null;

  constructor(data: RawNode) {
    super();
    this.header = Parser.parseItem(data.header, LiveChatBannerHeader);
    this.contents = Parser.parseItem(data.contents);
    this.action_id = data.actionId;
    this.viewer_is_creator = Boolean(data.viewerIsCreator);
    this.target_id = data.targetId;
    this.is_stackable = data.isStackable;
    this.background_type = data.backgroundType || null;
    this.banner_type = data.bannerType;
    this.banner_properties_is_ephemeral = Boolean(data.bannerProperties?.isEphemeral);
    this.banner_properties_auto_collapse_delay_seconds = data.bannerProperties?.autoCollapseDelay?.seconds || null;
  }
}