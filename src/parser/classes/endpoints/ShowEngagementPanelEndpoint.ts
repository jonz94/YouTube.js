import { YTNode } from '../../helpers.js';
import type { ShowEngagementPanelRequest, IEndpoint, RawNode } from '../../index.js';

export default class ShowEngagementPanelEndpoint extends YTNode implements IEndpoint<ShowEngagementPanelRequest> {
  static type = 'ShowEngagementPanelEndpoint';

  #API_PATH = 'get_panel';
  #data: RawNode;

  public panel_identifier: string;
  public source_panel_identifier?: string;

  constructor(data: RawNode) {
    super();
    this.#data = data;
    this.panel_identifier = data.panelIdentifier;
    this.source_panel_identifier = data.sourcePanelIdentifier;
  }

  public getApiPath(): string {
    return this.#API_PATH;
  }

  public buildRequest(): ShowEngagementPanelRequest {
    const request: ShowEngagementPanelRequest = {};
  
    if (this.#data.globalConfiguration?.params)
      request.params = this.#data.globalConfiguration.params;

    if (this.#data.identifier?.tag)
      request.panelId = this.#data.identifier.tag;

    return request;
  }
}