
export class FaqModel {

  /**
   * Request ID.
   * @type {number}
   * @private
   */
  readonly id: number;

  /**
   * Request title.
   * @type {string}
   * @private
   */
  readonly title: string;

  /**
   * Request content.
   * @type {string}
   * @private
   */
  readonly content: string;

  /**
   * Constructor assigns parameters to properties.
   * @param {number} id
   * @param {string} title
   * @param {string} content
   */
  constructor(
    id: number,
    title: string,
    content: string,
  ){
    this.id = id;
    this.title = title;
    this.content = content;
  }
}
