export class TextBuilder {
  private contents: Array<string> = [];

  public addLine(text: string): this {
    this.contents.push(text);
    return this;
  }

  public addNewLine(): this {
    this.contents.push("<br>");
    return this;
  }

  public addImage(src: string): this {
    this.contents.push(`<img src="${src}">`);
    return this;
  }

  public toArray(): Array<string> {
    const list: Array<string> = [];

    this.contents.forEach((content) => {
      const lineMaxLength = 60;
      const parts = content.split(" ");
      let line = "";
      parts.forEach((part) => {
        if (line.length + part.length > lineMaxLength) {
          list.push(line);
          line = "";
        }
        line += part + " ";
      });
      list.push(line);
    });

    return list;
  }
}
