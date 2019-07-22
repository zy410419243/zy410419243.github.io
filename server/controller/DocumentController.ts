import { Controller, Request } from '../utils/decorator';
import md5 from 'blueimp-md5';
import { getWriteFilesPaths } from '../utils/document';
import DocumentService from '../service/DocumentService';

export interface MappingProps {
  [x: string]: any;
  createTime?: number;
  modifyTime?: number;
  id: string;
  title?: string;
  url?: string;
  type?: string;
  subType?: string;
  category?: 'mapping' | 'markdown';
}

@Controller('/document')
export default class MarkdownController {
  @Request({ url: '/update', method: 'post' })
  async updateTargetDocument(ctx: any) {
    const {
      layout,
      id,
      title,
      type,
      subType,
      category,
      format,
    } = ctx.request.body;
    if (!id) {
      throw Error('id is undefined');
    }
    const service = new DocumentService();
    // formatted by prettier
    if (format) {
      service.formattedByPrettier(layout);
    }
    // update mapping
    service.updateMapping({
      id,
      title,
      modifyTime: new Date().getTime(),
      type,
      subType,
      category,
    });
    // update layout for mapping, content for markdown
    const writeFilesPaths = getWriteFilesPaths(category, id);
    const originContent = service.getOriginContent(
      writeFilesPaths[0],
      layout,
      id,
    );
    service.updateContent(category, writeFilesPaths, originContent);
    ctx.response.body = true;
  }

  @Request({ url: '/add', method: 'post' })
  async initDocument(ctx: any) {
    const { title, type, subType, category } = ctx.request.body;
    const service = new DocumentService();
    const timeStamp = new Date().getTime();
    const id = md5(timeStamp.toString());
    const writeFilesPaths = getWriteFilesPaths(category, id);
    service.updateMapping({
      id,
      title,
      type,
      subType,
      category,
    });
    service.updateContent(category, writeFilesPaths);
    ctx.response.body = id;
  }

  @Request({ url: '/delete', method: 'delete' })
  async deleteTargetDocument(ctx: any) {
    const { id, category } = ctx.request.body;
    const service = new DocumentService();
    const writeFilesPaths = getWriteFilesPaths(category, id);
    service.deleteTargetDocument(writeFilesPaths);
    service.updateMapping({ id }, true);
    ctx.response.body = true;
  }
}